#!/usr/bin/env node
/**
 * sync-populi.js
 * Pulls all historical data from Populi API v2 and generates demo-data.js
 * for the Williamson College IE Assessment System.
 *
 * Usage:
 *   node sync-populi.js                          # incremental sync (new terms only)
 *   node sync-populi.js --full                    # full re-sync of all terms
 *   node sync-populi.js --key sk_xxx             # pass API key directly
 *   node sync-populi.js --dry-run --verbose       # preview without writing
 *   node sync-populi.js --term 295827             # sync only one term
 *   node sync-populi.js --skip-assignments        # skip assignment/SLO data (faster)
 *   node sync-populi.js --update-catalog          # also update data-block.js descriptions
 */

const fs = require('fs');
const path = require('path');

// ============================================================
// CLI ARGS
// ============================================================
const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf('--' + name);
  if (idx === -1) return null;
  return args[idx + 1] || true;
}
const API_KEY = getArg('key') || process.env.POPULI_API_KEY;
const DRY_RUN = args.includes('--dry-run');
const VERBOSE = args.includes('--verbose');
const SKIP_ASSIGNMENTS = args.includes('--skip-assignments');
const UPDATE_CATALOG = args.includes('--update-catalog');
const FULL_SYNC = args.includes('--full');
const SINGLE_TERM = getArg('term');
const BASE_URL = 'https://wc.populiweb.com/api2';
const OUTPUT_DIR = __dirname;
const SYNC_STATE_FILE = path.join(OUTPUT_DIR, '.sync-state.json');

if (!API_KEY) {
  console.error('ERROR: No API key provided.');
  console.error('Set POPULI_API_KEY env var or pass --key <key>');
  process.exit(1);
}

const maskedKey = '...' + API_KEY.slice(-4);
console.log(`Populi Sync starting (key: ${maskedKey})`);
if (DRY_RUN) console.log('  DRY RUN — no files will be written');
if (VERBOSE) console.log('  VERBOSE mode on');

// ============================================================
// RATE-LIMITED API CLIENT
// ============================================================
let lastRequestTime = 0;
let requestCount = 0;
const MIN_INTERVAL_MS = 1300; // ~46 req/min, safe under 50/min limit

async function apiGet(endpoint, params = {}) {
  // Rate limit
  const now = Date.now();
  const elapsed = now - lastRequestTime;
  if (elapsed < MIN_INTERVAL_MS) {
    await sleep(MIN_INTERVAL_MS - elapsed);
  }
  lastRequestTime = Date.now();
  requestCount++;

  const url = new URL(`${BASE_URL}${endpoint}`);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v);
  }

  if (VERBOSE) console.log(`  [${requestCount}] GET ${url.pathname}${url.search}`);

  const resp = await fetch(url.toString(), {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Accept': 'application/json',
    },
    signal: AbortSignal.timeout(30000),
  });

  if (resp.status === 429) {
    const retryAfter = parseInt(resp.headers.get('retry-after') || '5', 10);
    console.warn(`  Rate limited! Waiting ${retryAfter}s...`);
    await sleep(retryAfter * 1000);
    lastRequestTime = Date.now();
    return apiGet(endpoint, params);
  }

  if (!resp.ok) {
    const body = await resp.text().catch(() => '');
    throw new Error(`API ${resp.status} on ${endpoint}: ${body.slice(0, 200)}`);
  }

  return resp.json();
}

async function apiGetAll(endpoint, params = {}) {
  const allData = [];
  let page = 1;
  while (true) {
    const result = await apiGet(endpoint, { ...params, page, limit: 200 });
    if (result.data && Array.isArray(result.data)) {
      allData.push(...result.data);
      if (!result.has_more) break;
      page++;
    } else if (result.object && result.object !== 'list') {
      // Single object response
      return result;
    } else {
      break;
    }
  }
  return allData;
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// ============================================================
// DATA FETCHERS
// ============================================================

async function fetchAllTerms() {
  console.log('\n=== Fetching academic terms ===');
  const terms = await apiGetAll('/academicterms');
  // Sort chronologically (oldest first)
  terms.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
  console.log(`  Found ${terms.length} terms`);
  return terms;
}

async function fetchTermStudents(termId, termName) {
  if (VERBOSE) console.log(`  Fetching students for ${termName}...`);
  return apiGetAll(`/academicterms/${termId}/students`);
}

async function fetchTermEnrollments(termId, termName) {
  if (VERBOSE) console.log(`  Fetching enrollments for ${termName}...`);
  return apiGetAll(`/academicterms/${termId}/enrollments`);
}

async function fetchTermCourseOfferings(termId, termName) {
  if (VERBOSE) console.log(`  Fetching course offerings for ${termName}...`);
  return apiGetAll(`/academicterms/${termId}/courseofferings`);
}

async function fetchCourseStudents(courseOfferingId) {
  return apiGetAll(`/courseofferings/${courseOfferingId}/students`);
}

async function fetchCourseAssignments(courseOfferingId) {
  return apiGetAll(`/courseofferings/${courseOfferingId}/assignments`);
}

async function fetchCourseCatalog() {
  console.log('\n=== Fetching course catalog ===');
  return apiGetAll('/courses');
}

// ============================================================
// MAIN SYNC
// ============================================================

async function main() {
  const startTime = Date.now();

  // 1. Fetch all terms
  let allTerms = await fetchAllTerms();

  // Filter to only past/current terms
  const today = new Date().toISOString().split('T')[0];
  const pastAndCurrentTerms = allTerms.filter(t => t.start_date <= today);

  if (SINGLE_TERM) {
    const termId = parseInt(SINGLE_TERM, 10);
    allTerms = allTerms.filter(t => t.id === termId);
    if (allTerms.length === 0) {
      console.error(`Term ${termId} not found!`);
      process.exit(1);
    }
    console.log(`  Syncing single term: ${allTerms[0].display_name}`);
  }

  // Skip umbrella semester terms (e.g. "FALL 2022", "SPRING 2023", "Spring 2024")
  // that wrap individual modules — they duplicate enrollment data.
  // Keep: Module terms, Graduate terms, Ministry Formation terms
  // Skip: Generic "Fall/Spring YYYY" or "FALL YYYY" umbrella terms AND SACSCOC terms
  function isUmbrellaTerm(t) {
    const name = (t.display_name || t.name || '').toLowerCase();
    // Skip everything before 2018
    if (t.start_date < '2018-07-01') return true;
    // Skip SACSCOC resource terms
    if (name.includes('sacscoc')) return true;
    // Keep module, graduate, and ministry formation terms
    if (name.includes('module') || name.includes('graduate') || name.includes('ministry')) return false;
    // Everything else is an umbrella term (e.g. "FALL 2018", "SPRING 2023") — skip
    return true;
  }

  let termsToSync = SINGLE_TERM ? allTerms : pastAndCurrentTerms.filter(t => !isUmbrellaTerm(t));
  console.log(`  ${pastAndCurrentTerms.length} past/current terms, ${termsToSync.length} after filtering umbrellas`);

  // 2. Incremental sync: load existing data and only fetch new/active terms
  const allStudentsMap = new Map();
  const allEnrollments = [];
  const allCourseOfferings = [];
  const courseOfferingDetails = new Map();
  const termSummaries = [];
  let syncState = {};
  const syncedTermIds = new Set();

  // Load previous sync state
  if (fs.existsSync(SYNC_STATE_FILE) && !FULL_SYNC && !SINGLE_TERM) {
    try {
      syncState = JSON.parse(fs.readFileSync(SYNC_STATE_FILE, 'utf8'));
      console.log(`  Last sync: ${syncState.lastSyncDate || 'unknown'}`);
      console.log(`  Previously synced ${(syncState.syncedTermIds || []).length} terms`);
    } catch (e) {
      console.warn('  Could not read sync state, doing full sync');
    }
  }

  // Load existing demo-data.js to preserve historical data
  const existingDataPath = path.join(OUTPUT_DIR, 'demo-data.js');
  let existingData = null;
  if (fs.existsSync(existingDataPath) && !FULL_SYNC && !SINGLE_TERM && syncState.syncedTermIds) {
    try {
      // Extract existing data by evaluating the file
      const existingContent = fs.readFileSync(existingDataPath, 'utf8');
      const vm = require('vm');
      const ctx = {};
      vm.runInNewContext(existingContent, ctx);
      existingData = ctx;

      // Load existing terms, students, enrollments, course offerings
      if (ctx.ALL_TERMS) {
        for (const t of ctx.ALL_TERMS) termSummaries.push(t);
      }
      if (ctx.ALL_STUDENTS) {
        for (const s of ctx.ALL_STUDENTS) allStudentsMap.set(s.personId, s);
      }
      if (ctx.ALL_ENROLLMENTS) {
        allEnrollments.push(...ctx.ALL_ENROLLMENTS);
      }
      if (ctx.ALL_COURSE_OFFERINGS) {
        for (const co of ctx.ALL_COURSE_OFFERINGS) {
          allCourseOfferings.push(co);
          courseOfferingDetails.set(co.id, co);
        }
      }

      // Track which terms are already synced and finalized
      for (const tid of (syncState.syncedTermIds || [])) {
        syncedTermIds.add(tid);
      }

      console.log(`  Loaded existing: ${allStudentsMap.size} students, ${allEnrollments.length} enrollments`);
    } catch (e) {
      console.warn(`  Could not load existing data (${e.message}), doing full sync`);
      existingData = null;
      allStudentsMap.clear();
      allEnrollments.length = 0;
      allCourseOfferings.length = 0;
      termSummaries.length = 0;
    }
  }

  // Determine which terms need syncing
  if (!FULL_SYNC && !SINGLE_TERM && syncedTermIds.size > 0) {
    // Only sync terms that are: (a) not yet synced, OR (b) not finalized (still active/current)
    const originalCount = termsToSync.length;
    termsToSync = termsToSync.filter(t => {
      // Always re-sync terms that haven't ended yet (active terms)
      if (t.end_date >= today) return true;
      // Skip terms we've already synced and are in the past
      if (syncedTermIds.has(t.id)) return false;
      return true;
    });

    // Remove stale data for terms we're re-syncing
    const reSyncIds = new Set(termsToSync.map(t => t.id));
    // Remove old enrollments/offerings for terms being re-synced
    for (let i = allEnrollments.length - 1; i >= 0; i--) {
      if (reSyncIds.has(allEnrollments[i].termId)) allEnrollments.splice(i, 1);
    }
    for (let i = allCourseOfferings.length - 1; i >= 0; i--) {
      if (reSyncIds.has(allCourseOfferings[i].termId)) allCourseOfferings.splice(i, 1);
    }
    for (let i = termSummaries.length - 1; i >= 0; i--) {
      if (reSyncIds.has(termSummaries[i].termId)) termSummaries.splice(i, 1);
    }

    console.log(`  Incremental: syncing ${termsToSync.length} of ${originalCount} terms (${originalCount - termsToSync.length} already synced)`);
  }

  for (let i = 0; i < termsToSync.length; i++) {
    const term = termsToSync[i];
    const termLabel = term.display_name || term.name;
    console.log(`\n--- [${i + 1}/${termsToSync.length}] ${termLabel} ---`);

    // Fetch students for this term
    let termStudents;
    try {
      termStudents = await fetchTermStudents(term.id, termLabel);
    } catch (err) {
      console.warn(`  Skipping ${termLabel}: ${err.message}`);
      continue;
    }
    console.log(`  Students: ${termStudents.length}`);

    // Track unique students (update with latest data each time seen)
    for (const s of termStudents) {
      const personId = s.id;
      const rd = s.report_data || {};
      // visible_student_id comes from enrollment data, not student list;
      // we'll backfill it from enrollments below
      const existing = allStudentsMap.get(personId);
      allStudentsMap.set(personId, {
        personId,
        studentId: (existing && existing.studentId !== personId) ? existing.studentId : personId,
        firstName: s.first_name || '',
        lastName: s.last_name || '',
        gender: s.gender || '',
        standing: rd.standing_name || '',
        program: rd.program_name || '',
        degree: rd.degree_list || '',
        fullTime: rd.full_time === 1,
        termGPA: parseFloat(rd.term_gpa) || 0,
        cumGPA: parseFloat(rd.cum_gpa) || 0,
        termUnits: parseFloat(rd.term_units_attempted) || 0,
        cumEarnedUnits: parseFloat(rd.cum_units_granted) || 0,
      });
    }

    // Fetch enrollments for this term
    let termEnrollments;
    try {
      termEnrollments = await fetchTermEnrollments(term.id, termLabel);
    } catch (err) {
      console.warn(`  Skipping enrollments for ${termLabel}: ${err.message}`);
      termEnrollments = [];
    }
    console.log(`  Enrollments: ${termEnrollments.length}`);

    for (const e of termEnrollments) {
      const rd = e.report_data || {};
      const personId = rd.student_person_id || e.id;
      const visibleId = rd.visible_student_id || personId;

      // Backfill visible student ID into student record
      const studentRec = allStudentsMap.get(personId);
      if (studentRec && rd.visible_student_id) {
        studentRec.studentId = rd.visible_student_id;
      }

      allEnrollments.push({
        termId: term.id,
        termName: termLabel,
        termStartDate: term.start_date,
        personId,
        studentId: visibleId,
        firstName: rd.student_first_name || e.first_name || '',
        lastName: rd.student_last_name || e.last_name || '',
        program: rd.program_name || '',
        standing: studentRec ? studentRec.standing : '',
        courseOfferingId: rd.course_offering_id || null,
        course: rd.catalog_course_abbrv || '',
        courseName: rd.course_offering_name || rd.full_course_offering_name || '',
        section: rd.course_offering_section || '1',
        department: '',
        grade: parseFloat(rd.grade) || 0,
        letter: rd.grade_abbrv || '',
        credits: parseFloat(rd.credits) || 0,
        deliveryMethod: rd.delivery_method || '',
        status: rd.course_student_status || '',
        finalized: rd.finalized === 1,
        enrollmentId: rd.enrollment_id || null,
        primaryFaculty: '',
      });
    }

    // Fetch course offerings for this term (before backfill so we have the data)
    let termCourses;
    try {
      termCourses = await fetchTermCourseOfferings(term.id, termLabel);
    } catch (err) {
      console.warn(`  Skipping course offerings for ${termLabel}: ${err.message}`);
      termCourses = [];
    }
    console.log(`  Course offerings: ${termCourses.length}`);

    for (const co of termCourses) {
      const rd = co.report_data || {};
      const offering = {
        id: co.id,
        termId: term.id,
        termName: termLabel,
        courseAbbrv: rd.course_abbrv || '',
        name: rd.name || '',
        description: (rd.description || '').replace(/\r\n/g, '\n').trim(),
        section: rd.section || '1',
        credits: parseFloat(rd.credits) || 0,
        department: rd.department_name || '',
        faculty: rd.primary_faculty_display_name || '',
        facultyEmail: rd.primary_faculty_email_address || '',
        numStudents: parseInt(rd.num_students) || 0,
        numFinalized: parseInt(rd.num_finalized_students) || 0,
        finalized: co.finalized || false,
        catalogCourseId: rd.catalog_course_id || null,
      };
      allCourseOfferings.push(offering);
      courseOfferingDetails.set(co.id, offering);
    }

    // Backfill department and faculty from course offerings into enrollments
    for (const enr of allEnrollments) {
      if (enr.termId !== term.id) continue;
      const co = courseOfferingDetails.get(enr.courseOfferingId);
      if (co) {
        if (!enr.department) enr.department = co.department;
        if (!enr.primaryFaculty) enr.primaryFaculty = co.faculty;
      }
    }

    // Compute term summary
    const termEnrolledStudents = termStudents.filter(s => s.status === 'active');
    const termGPAs = termStudents
      .map(s => parseFloat((s.report_data || {}).cum_gpa) || 0)
      .filter(g => g > 0);
    const avgGPA = termGPAs.length ? termGPAs.reduce((a, b) => a + b, 0) / termGPAs.length : 0;

    // Enrollment by degree
    const byDegree = {};
    for (const s of termStudents) {
      const deg = (s.report_data || {}).degree_list || 'Unknown';
      byDegree[deg] = (byDegree[deg] || 0) + 1;
    }

    termSummaries.push({
      termId: term.id,
      termName: termLabel,
      startDate: term.start_date,
      endDate: term.end_date,
      studentCount: termStudents.length,
      courseCount: termCourses.length,
      enrollmentCount: termEnrollments.length,
      avgGPA: Math.round(avgGPA * 100) / 100,
      enrollmentByDegree: byDegree,
    });
  }

  console.log(`\n=== Sync complete ===`);
  console.log(`  Unique students: ${allStudentsMap.size}`);
  console.log(`  Total enrollments: ${allEnrollments.length}`);
  console.log(`  Total course offerings: ${allCourseOfferings.length}`);
  console.log(`  Terms synced: ${termsToSync.length}`);

  // 3. Fetch assignment data (SLO scores) if not skipped
  let assignmentData = [];
  if (!SKIP_ASSIGNMENTS) {
    console.log('\n=== Fetching assignment data (SLO scores) ===');
    // Only fetch for terms that have finalized courses
    const finalizedOfferings = allCourseOfferings.filter(co => co.finalized && co.numStudents > 0);
    console.log(`  ${finalizedOfferings.length} finalized course offerings with students`);

    let assignmentCount = 0;
    for (let i = 0; i < finalizedOfferings.length; i++) {
      const co = finalizedOfferings[i];
      if (VERBOSE) console.log(`  [${i + 1}/${finalizedOfferings.length}] ${co.courseAbbrv} - ${co.name} (${co.termName})`);

      try {
        const assignments = await fetchCourseAssignments(co.id);
        for (const a of assignments) {
          assignmentData.push({
            courseOfferingId: co.id,
            termName: co.termName,
            courseAbbrv: co.courseAbbrv,
            courseName: co.name,
            assignmentId: a.id,
            assignmentName: a.name,
            points: a.points,
            dueAt: a.due_at,
            type: a.type,
            groupId: a.assignment_group_id,
            extraCredit: a.extra_credit,
            passFail: a.pass_fail,
          });
          assignmentCount++;
        }
      } catch (err) {
        console.warn(`  Warning: Could not fetch assignments for ${co.courseAbbrv}: ${err.message}`);
      }
    }
    console.log(`  Total assignments fetched: ${assignmentCount}`);
  }

  // 4. Identify current term data for backward-compatible DEMO_ exports
  const currentTermId = termsToSync[termsToSync.length - 1]?.id;
  const currentTermName = termsToSync[termsToSync.length - 1]?.display_name || '';
  const currentTermStudents = [];
  const currentTermEnrollments = [];

  // Get students who appear in the current term's enrollments
  const currentEnrollmentPersonIds = new Set();
  for (const e of allEnrollments) {
    if (e.termId === currentTermId) {
      currentTermEnrollments.push(e);
      currentEnrollmentPersonIds.add(e.personId);
    }
  }

  // Also include students from term student list even if no enrollment record
  for (const [personId, student] of allStudentsMap) {
    // Check if this student was in any enrollment for the current term
    if (currentEnrollmentPersonIds.has(personId)) {
      currentTermStudents.push(student);
    }
  }

  // If no enrollments matched, fall back to all students seen in the last term
  if (currentTermStudents.length === 0) {
    console.log('  Warning: No students matched current term, using all students');
    currentTermStudents.push(...allStudentsMap.values());
  }

  // Compute DEMO_SUMMARY (current term)
  const demoSummary = computeSummary(currentTermStudents, currentTermEnrollments);

  // Compute attendance from enrollment data
  const attendanceMap = new Map(); // personId -> { present, absent, ... }
  // We'll derive attendance from the course-level enrollment data
  // For now, use enrollment-level finalized data
  const currentAttendance = [];
  for (const student of currentTermStudents) {
    const studentEnrollments = currentTermEnrollments.filter(e =>
      e.studentId === student.studentId && e.finalized
    );
    // Attendance isn't in the term enrollment response directly,
    // so we'll need to fetch from courseoffering/students endpoint
    currentAttendance.push({
      studentId: student.studentId,
      firstName: student.firstName,
      lastName: student.lastName,
      academicTerm: currentTermName,
      gender: student.gender,
    });
  }

  // 5. Build historical summary for trend charts
  const historicalSummary = {
    byTerm: {},
    enrollmentTrend: [],
    gpaTrend: [],
  };

  for (const ts of termSummaries) {
    historicalSummary.byTerm[ts.termName] = ts;
    historicalSummary.enrollmentTrend.push({
      term: ts.termName,
      startDate: ts.startDate,
      count: ts.studentCount,
    });
    historicalSummary.gpaTrend.push({
      term: ts.termName,
      startDate: ts.startDate,
      avgGPA: ts.avgGPA,
    });
  }

  // 6. Build course catalog with descriptions
  const courseCatalog = {};
  for (const co of allCourseOfferings) {
    if (co.description && co.description.length > 10) {
      // Only keep the description up to "Student Learning Outcomes" or "INSTRUCTOR" markers
      let desc = co.description;
      const sloIdx = desc.indexOf('Student Learning Outcomes');
      if (sloIdx > 0) desc = desc.substring(0, sloIdx).trim();
      const instrIdx = desc.indexOf("INSTRUCTOR'S OFFICE");
      if (instrIdx > 0) desc = desc.substring(0, instrIdx).trim();
      const instrIdx2 = desc.indexOf("INSTRUCTOR&#039;S OFFICE");
      if (instrIdx2 > 0) desc = desc.substring(0, instrIdx2).trim();

      if (!courseCatalog[co.courseAbbrv] || desc.length > (courseCatalog[co.courseAbbrv].length || 0)) {
        courseCatalog[co.courseAbbrv] = desc;
      }
    }
  }

  // 7. Generate output
  if (DRY_RUN) {
    console.log('\n=== DRY RUN — would write the following ===');
    console.log(`  demo-data.js: ${allStudentsMap.size} students, ${allEnrollments.length} enrollments`);
    console.log(`  ${termSummaries.length} term summaries for trend charts`);
    console.log(`  ${Object.keys(courseCatalog).length} course descriptions found`);
    console.log(`  ${assignmentData.length} assignment records`);
    console.log('\n  Sample student:', JSON.stringify([...allStudentsMap.values()][0], null, 2));
    console.log('\n  Sample enrollment:', JSON.stringify(allEnrollments[0], null, 2));
    if (assignmentData.length) {
      console.log('\n  Sample assignment:', JSON.stringify(assignmentData[0], null, 2));
    }
    console.log(`\n  Term summaries:`);
    for (const ts of termSummaries.slice(-10)) {
      console.log(`    ${ts.termName}: ${ts.studentCount} students, ${ts.courseCount} courses, GPA ${ts.avgGPA}`);
    }
  } else {
    writeDemoData({
      allStudents: [...allStudentsMap.values()],
      allEnrollments,
      allCourseOfferings,
      assignmentData,
      currentTermStudents,
      currentTermEnrollments,
      currentAttendance,
      demoSummary,
      historicalSummary,
      termSummaries,
      courseCatalog,
      currentTermName,
    });

    if (UPDATE_CATALOG) {
      updateDataBlock(courseCatalog);
    }
  }

  // Save sync state for incremental sync
  if (!DRY_RUN) {
    const allSyncedIds = [...syncedTermIds];
    // Add all past terms we just synced (not active ones — they'll be re-synced next time)
    for (const t of termsToSync) {
      if (t.end_date < today && !allSyncedIds.includes(t.id)) {
        allSyncedIds.push(t.id);
      }
    }
    const state = {
      lastSyncDate: new Date().toISOString(),
      syncedTermIds: allSyncedIds,
      totalStudents: allStudentsMap.size,
      totalEnrollments: allEnrollments.length,
      totalTerms: termSummaries.length,
    };
    fs.writeFileSync(SYNC_STATE_FILE, JSON.stringify(state, null, 2), 'utf8');
    console.log(`  Saved sync state to ${SYNC_STATE_FILE}`);
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\nDone! ${requestCount} API calls in ${elapsed}s`);
}

// ============================================================
// COMPUTE SUMMARY
// ============================================================
function computeSummary(students, enrollments) {
  const enrollmentByProgram = {};
  for (const s of students) {
    const deg = s.degree || 'Unknown';
    enrollmentByProgram[deg] = (enrollmentByProgram[deg] || 0) + 1;
  }

  const gpas = students.map(s => s.cumGPA).filter(g => g > 0);
  const avgGPA = gpas.length ? Math.round((gpas.reduce((a, b) => a + b, 0) / gpas.length) * 100) / 100 : 0;

  // Grade distribution
  const gradeDistribution = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  for (const e of enrollments) {
    if (!e.letter) continue;
    const first = e.letter.charAt(0).toUpperCase();
    if (gradeDistribution.hasOwnProperty(first)) {
      gradeDistribution[first]++;
    }
  }

  // Course breakdown
  const courseMap = {};
  for (const e of enrollments) {
    if (!e.course) continue;
    if (!courseMap[e.course]) {
      courseMap[e.course] = { courseName: e.courseName, enrolled: 0, totalGrade: 0, gradeCount: 0, faculty: e.primaryFaculty };
    }
    courseMap[e.course].enrolled++;
    if (e.grade > 0) {
      courseMap[e.course].totalGrade += e.grade;
      courseMap[e.course].gradeCount++;
    }
  }
  const courseBreakdown = Object.entries(courseMap).map(([code, d]) => ({
    course: code,
    courseName: d.courseName,
    enrolled: d.enrolled,
    avgGrade: d.gradeCount ? Math.round((d.totalGrade / d.gradeCount) * 100) / 100 : 0,
    faculty: d.faculty,
  }));

  return {
    totalStudents: students.length,
    enrollmentByProgram,
    avgGPA,
    avgAttendance: 0, // Will be computed if attendance data available
    gradeDistribution,
    courseBreakdown,
  };
}

// ============================================================
// FILE WRITERS
// ============================================================

function writeDemoData(data) {
  const {
    allStudents, allEnrollments, allCourseOfferings, assignmentData,
    currentTermStudents, currentTermEnrollments, currentAttendance,
    demoSummary, historicalSummary, termSummaries, courseCatalog, currentTermName,
  } = data;

  const timestamp = new Date().toISOString().split('T')[0];

  let out = `/**
 * demo-data.js
 * Williamson College IE Assessment System — Live Populi Data
 * Auto-generated by sync-populi.js on ${timestamp}
 * ${allStudents.length} unique students, ${allEnrollments.length} enrollments across ${termSummaries.length} modules
 */

// ---------------------------------------------------------------------------
// ALL_TERMS — every academic module synced from Populi
// ---------------------------------------------------------------------------
const ALL_TERMS = ${JSON.stringify(termSummaries.map(t => ({
  termId: t.termId,
  termName: t.termName,
  startDate: t.startDate,
  endDate: t.endDate,
  studentCount: t.studentCount,
  courseCount: t.courseCount,
  enrollmentCount: t.enrollmentCount,
  avgGPA: t.avgGPA,
  enrollmentByDegree: t.enrollmentByDegree,
})), null, 2)};

// ---------------------------------------------------------------------------
// ALL_STUDENTS — deduplicated roster (most recent data per student)
// ---------------------------------------------------------------------------
const ALL_STUDENTS = ${JSON.stringify(allStudents.sort((a, b) => a.lastName.localeCompare(b.lastName)), null, 2)};

// ---------------------------------------------------------------------------
// ALL_ENROLLMENTS — every enrollment across all modules
// ---------------------------------------------------------------------------
const ALL_ENROLLMENTS = ${JSON.stringify(allEnrollments, null, 2)};

// ---------------------------------------------------------------------------
// ALL_COURSE_OFFERINGS — every course offering across all modules
// ---------------------------------------------------------------------------
const ALL_COURSE_OFFERINGS = ${JSON.stringify(allCourseOfferings.map(co => ({
  id: co.id,
  termName: co.termName,
  courseAbbrv: co.courseAbbrv,
  name: co.name,
  credits: co.credits,
  department: co.department,
  faculty: co.faculty,
  numStudents: co.numStudents,
  finalized: co.finalized,
})), null, 2)};

// ---------------------------------------------------------------------------
// COURSE_CATALOG — course descriptions from Populi syllabi
// ---------------------------------------------------------------------------
const COURSE_CATALOG = ${JSON.stringify(courseCatalog, null, 2)};

`;

  if (assignmentData.length > 0) {
    out += `// ---------------------------------------------------------------------------
// ASSIGNMENT_DATA — assignment-level data (SLO measurement source)
// ---------------------------------------------------------------------------
const ASSIGNMENT_DATA = ${JSON.stringify(assignmentData, null, 2)};

`;
  } else {
    out += `const ASSIGNMENT_DATA = [];\n\n`;
  }

  out += `// ---------------------------------------------------------------------------
// HISTORICAL_SUMMARY — trends by module for dashboard charts
// ---------------------------------------------------------------------------
const HISTORICAL_SUMMARY = ${JSON.stringify(historicalSummary, null, 2)};

// ===========================================================================
// BACKWARD-COMPATIBLE EXPORTS (current module: ${currentTermName})
// ===========================================================================

// ---------------------------------------------------------------------------
// DEMO_STUDENTS — current module roster
// ---------------------------------------------------------------------------
const DEMO_STUDENTS = ${JSON.stringify(currentTermStudents.sort((a, b) => a.lastName.localeCompare(b.lastName)), null, 2)};

// ---------------------------------------------------------------------------
// DEMO_ENROLLMENTS — current module enrollments
// ---------------------------------------------------------------------------
const DEMO_ENROLLMENTS = ${JSON.stringify(currentTermEnrollments, null, 2)};

// ---------------------------------------------------------------------------
// DEMO_ATTENDANCE — current module attendance
// ---------------------------------------------------------------------------
const DEMO_ATTENDANCE = ${JSON.stringify(currentAttendance, null, 2)};

// ---------------------------------------------------------------------------
// DEMO_SUMMARY — computed from current module data
// ---------------------------------------------------------------------------
const DEMO_SUMMARY = ${JSON.stringify(demoSummary, null, 2)};
`;

  const outPath = path.join(OUTPUT_DIR, 'demo-data.js');
  fs.writeFileSync(outPath, out, 'utf8');
  console.log(`\nWrote ${outPath} (${(out.length / 1024).toFixed(1)} KB)`);
}

function updateDataBlock(courseCatalog) {
  const dbPath = path.join(OUTPUT_DIR, 'data-block.js');
  if (!fs.existsSync(dbPath)) {
    console.warn('data-block.js not found, skipping catalog update');
    return;
  }

  let content = fs.readFileSync(dbPath, 'utf8');
  let updateCount = 0;

  // For each course in the catalog, try to add a description field
  for (const [abbrv, desc] of Object.entries(courseCatalog)) {
    // Look for patterns like: code: "BL 212", name: "New Testament Survey"
    // and add description after name if not already present
    const escapedAbbrv = abbrv.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(
      `(code:\\s*"${escapedAbbrv}",\\s*name:\\s*"[^"]+",\\s*cr:\\s*\\d+)`,
      'g'
    );

    const shortDesc = desc.length > 200 ? desc.substring(0, 200).trim() + '...' : desc;
    const safeDesc = shortDesc.replace(/"/g, '\\"').replace(/\n/g, ' ');

    content = content.replace(regex, (match) => {
      if (match.includes('description:')) return match; // already has description
      updateCount++;
      return match + `, description: "${safeDesc}"`;
    });
  }

  if (updateCount > 0) {
    fs.writeFileSync(dbPath, content, 'utf8');
    console.log(`\nUpdated data-block.js: added ${updateCount} course descriptions`);
    console.log('  NOTE: You may also need to update the inline copy in index.html');
  } else {
    console.log('\nNo new course descriptions to add to data-block.js');
  }
}

// ============================================================
// RUN
// ============================================================
main().catch(err => {
  console.error('\nFATAL:', err.message);
  if (VERBOSE) console.error(err.stack);
  process.exit(1);
});
