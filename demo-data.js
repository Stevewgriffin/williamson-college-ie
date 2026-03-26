/**
 * demo-data.js
 * Static demo data derived from Williamson College enrollment, student,
 * and attendance CSV exports (2025-2026 Module Six).
 * Generated 2026-03-26.
 */

// ---------------------------------------------------------------------------
// DEMO_STUDENTS  (from Students-2.csv)
// ---------------------------------------------------------------------------
const DEMO_STUDENTS = [
  { studentId: 2026000005, firstName: "Leticia", lastName: "Araujo Eboli", standing: "1st year", program: "Undergraduate", degree: "BSBA", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 21.00, cumGPA: 4.00, totalTransferCredits: 17.00 },
  { studentId: 2023000008, firstName: "Eduarda", lastName: "Becher", standing: "4th year", program: "Undergraduate", degree: "BSBA", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 92.00, cumGPA: 3.49, totalTransferCredits: 0.00 },
  { studentId: 2026000002, firstName: "Seth", lastName: "Dawson", standing: "1st year", program: "Undergraduate", degree: "ADL", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 5.00, cumGPA: 4.00, totalTransferCredits: 0.00 },
  { studentId: 2024000022, firstName: "Corban", lastName: "Dolan", standing: "2nd year", program: "Undergraduate", degree: "ADL", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 59.00, cumGPA: 3.77, totalTransferCredits: 21.00 },
  { studentId: 2024000001, firstName: "Jana-Rai", lastName: "Dufault", standing: "2nd year", program: "Undergraduate", degree: "BSML", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 50.00, cumGPA: 3.96, totalTransferCredits: 0.00 },
  { studentId: 2022000022, firstName: "Pavlos", lastName: "Fokos", standing: "4th year", program: "Undergraduate", degree: "BSML", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 101.00, cumGPA: 3.22, totalTransferCredits: 9.00 },
  { studentId: 2026000003, firstName: "Jessica", lastName: "Goldsmith", standing: "1st year", program: "Undergraduate", degree: "ADL", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 5.00, cumGPA: 4.00, totalTransferCredits: 0.00 },
  { studentId: 2020000004, firstName: "Theresa", lastName: "Green", standing: "4th year", program: "Undergraduate", degree: "BSBA", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 113.00, cumGPA: 3.03, totalTransferCredits: 49.00 },
  { studentId: 2025000008, firstName: "Landon", lastName: "Henley", standing: "1st year", program: "Undergraduate", degree: "ADL", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 25.00, cumGPA: 2.39, totalTransferCredits: 0.00 },
  { studentId: 2025000029, firstName: "Jack", lastName: "Hines", standing: "2nd year", program: "Undergraduate", degree: "BSML", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 56.00, cumGPA: 4.00, totalTransferCredits: 52.00 },
  { studentId: 2023000016, firstName: "Jolie", lastName: "Hudson", standing: "3rd year", program: "Undergraduate", degree: "ADL", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 62.00, cumGPA: 3.60, totalTransferCredits: 0.00 },
  { studentId: 2025000016, firstName: "Richard", lastName: "Hutchison", standing: "1st year", program: "Undergraduate", degree: "BSML", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 29.00, cumGPA: 3.77, totalTransferCredits: 16.00 },
  { studentId: 2022000003, firstName: "Maria Candelaria", lastName: "Insua Fuentes", standing: "4th year", program: "Undergraduate", degree: "BSBA", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 95.00, cumGPA: 3.89, totalTransferCredits: 0.00 },
  { studentId: 2024000013, firstName: "Jason", lastName: "Layton", standing: "2nd year", program: "Undergraduate", degree: "BSBA", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 47.00, cumGPA: 4.00, totalTransferCredits: 0.00 },
  { studentId: 2025000017, firstName: "Marcus", lastName: "Legere", standing: "2nd year", program: "Undergraduate", degree: "BSML", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 44.00, cumGPA: 3.31, totalTransferCredits: 31.00 },
  { studentId: 2024000002, firstName: "Mariana", lastName: "Lucas Lourenco", standing: "4th year", program: "Undergraduate", degree: "BSBA", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 98.00, cumGPA: 3.93, totalTransferCredits: 39.00 },
  { studentId: 2025000019, firstName: "Justin", lastName: "Martin", standing: "1st year", program: "Undergraduate", degree: "ADL", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 14.00, cumGPA: 4.00, totalTransferCredits: 0.00 },
  { studentId: 2023000043, firstName: "John", lastName: "McLeod", standing: "2nd year", program: "Undergraduate", degree: "BSML", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 58.00, cumGPA: 3.95, totalTransferCredits: 0.00 },
  { studentId: 2026000004, firstName: "Melanie", lastName: "Morgan", standing: "1st year", program: "Undergraduate", degree: "ADL", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 1.00, cumGPA: 4.00, totalTransferCredits: 0.00 },
  { studentId: 2024000007, firstName: "Brian", lastName: "Myers", standing: "3rd year", program: "Undergraduate", degree: "BSML", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 64.00, cumGPA: 4.00, totalTransferCredits: 11.00 },
  { studentId: 2024000010, firstName: "Gracie", lastName: "Myers", standing: "2nd year", program: "Undergraduate", degree: "ADL", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 44.00, cumGPA: 3.67, totalTransferCredits: 0.00 },
  { studentId: 2025000025, firstName: "Thi Phuong Thao", lastName: "Nguyen", standing: "2nd year", program: "Undergraduate", degree: "BSBA", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 38.00, cumGPA: 4.00, totalTransferCredits: 25.00 },
  { studentId: 2025000018, firstName: "Rodney", lastName: "Outland", standing: "1st year", program: "Undergraduate", degree: "BSML", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 11.00, cumGPA: 3.14, totalTransferCredits: 0.00 },
  { studentId: 2025000003, firstName: "Humberto", lastName: "Pena", standing: "2nd year", program: "Undergraduate", degree: "ADL", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 31.00, cumGPA: 4.00, totalTransferCredits: 0.00 },
  { studentId: 2023000003, firstName: "Khanh", lastName: "Pham", standing: "4th year", program: "Undergraduate", degree: "BSBA", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 107.00, cumGPA: 3.52, totalTransferCredits: 46.00 },
  { studentId: 2024000004, firstName: "Meghan", lastName: "Prinsloo", standing: "2nd year", program: "Undergraduate", degree: "BSBA", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 56.00, cumGPA: 3.93, totalTransferCredits: 0.00 },
  { studentId: 2024000008, firstName: "Benjamin", lastName: "Strickroot", standing: "2nd year", program: "Undergraduate", degree: "ADL", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 53.00, cumGPA: 3.69, totalTransferCredits: 0.00 },
  { studentId: 2025000021, firstName: "Anna", lastName: "Stuart", standing: "1st year", program: "Undergraduate", degree: "BSML", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 14.00, cumGPA: 3.80, totalTransferCredits: 0.00 },
  { studentId: 2024000031, firstName: "Nona", lastName: "Wesson", standing: "2nd year", program: "Undergraduate", degree: "ADL", fullTime: true, termUnits: 3.00, termGPA: 0.00, cumEarnedUnits: 31.00, cumGPA: 3.90, totalTransferCredits: 0.00 },
];

// ---------------------------------------------------------------------------
// DEMO_ENROLLMENTS  (from Enrollments-2.csv)
// ---------------------------------------------------------------------------
const DEMO_ENROLLMENTS = [
  { studentId: 2026000005, firstName: "Leticia", lastName: "Araujo Eboli", program: "Undergraduate", standing: "1st year", academicTerm: "2025-2026: Module Six", department: "General Education", course: "ECON 101", courseName: "Principles of Microeconomics", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "William Kraus", status: "Enrolled", deliveryMethod: "On Campus", grade: 96.83, letter: "A", gradePoints: 12.00, credits: 3.00, present: 4, absent: 1, tardy: 0, excused: 0, pctAttended: 80 },
  { studentId: 2023000008, firstName: "Eduarda", lastName: "Becher", program: "Undergraduate", standing: "4th year", academicTerm: "2025-2026: Module Six", department: "School of Ministry", course: "BL 212", courseName: "New Testament Survey", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Dave Dillon", status: "Enrolled", deliveryMethod: "On Campus", grade: 95.50, letter: "A", gradePoints: 12.00, credits: 3.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
  { studentId: 2026000002, firstName: "Seth", lastName: "Dawson", program: "Undergraduate", standing: "1st year", academicTerm: "2025-2026: Module Six", department: "General Education", course: "PSI 115/116", courseName: "Introduction to Earth Science & Lab", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Erica Waggoner", status: "Enrolled", deliveryMethod: "", grade: 98.28, letter: "A", gradePoints: 16.00, credits: 4.00, present: 4, absent: 0, tardy: 1, excused: 0, pctAttended: 100 },
  { studentId: 2024000022, firstName: "Corban", lastName: "Dolan", program: "Undergraduate", standing: "2nd year", academicTerm: "2025-2026: Module Six", department: "School of Business", course: "MGT 301", courseName: "Essentials of Management", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Leah Levine", status: "Enrolled", deliveryMethod: "On Campus", grade: 94.76, letter: "A", gradePoints: 12.00, credits: 3.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
  { studentId: 2024000001, firstName: "Jana-Rai", lastName: "Dufault", program: "Undergraduate", standing: "2nd year", academicTerm: "2025-2026: Module Six", department: "School of Business", course: "MGT 301", courseName: "Essentials of Management", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Leah Levine", status: "Enrolled", deliveryMethod: "On Campus", grade: 97.16, letter: "A", gradePoints: 12.00, credits: 3.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
  { studentId: 2022000022, firstName: "Pavlos", lastName: "Fokos", program: "Undergraduate", standing: "4th year", academicTerm: "2025-2026: Module Six", department: "General Education", course: "PSI 115/116", courseName: "Introduction to Earth Science & Lab", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Erica Waggoner", status: "Enrolled", deliveryMethod: "", grade: 89.11, letter: "B", gradePoints: 12.00, credits: 4.00, present: 2, absent: 1, tardy: 2, excused: 0, pctAttended: 80 },
  { studentId: 2026000003, firstName: "Jessica", lastName: "Goldsmith", program: "Undergraduate", standing: "1st year", academicTerm: "2025-2026: Module Six", department: "General Education", course: "PSI 115/116", courseName: "Introduction to Earth Science & Lab", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Erica Waggoner", status: "Enrolled", deliveryMethod: "", grade: 94.95, letter: "A", gradePoints: 16.00, credits: 4.00, present: 4, absent: 1, tardy: 0, excused: 0, pctAttended: 80 },
  { studentId: 2020000004, firstName: "Theresa", lastName: "Green", program: "Undergraduate", standing: "4th year", academicTerm: "2025-2026: Module Six", department: "School of Ministry", course: "BL 212", courseName: "New Testament Survey", startDate: "1/19/2026", endDate: "3/30/2026", finalized: false, primaryFaculty: "Dave Dillon", status: "Enrolled", deliveryMethod: "On Campus", grade: 88.00, letter: "B", gradePoints: 9.00, credits: 3.00, present: 4, absent: 1, tardy: 0, excused: 0, pctAttended: 80 },
  { studentId: 2025000008, firstName: "Landon", lastName: "Henley", program: "Undergraduate", standing: "1st year", academicTerm: "2025-2026: Module Six", department: "School of Business", course: "MGT 301", courseName: "Essentials of Management", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Leah Levine", status: "Enrolled", deliveryMethod: "On Campus", grade: 91.22, letter: "B", gradePoints: 9.00, credits: 3.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
  { studentId: 2025000029, firstName: "Jack", lastName: "Hines", program: "Undergraduate", standing: "2nd year", academicTerm: "2025-2026: Module Six", department: "School of Business", course: "MGT 301", courseName: "Essentials of Management", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Leah Levine", status: "Enrolled", deliveryMethod: "On Campus", grade: 97.30, letter: "A", gradePoints: 12.00, credits: 3.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
  { studentId: 2023000016, firstName: "Jolie", lastName: "Hudson", program: "Undergraduate", standing: "3rd year", academicTerm: "2025-2026: Module Six", department: "General Education", course: "ECON 101", courseName: "Principles of Microeconomics", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "William Kraus", status: "Enrolled", deliveryMethod: "On Campus", grade: 97.20, letter: "A", gradePoints: 12.00, credits: 3.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
  { studentId: 2025000016, firstName: "Richard", lastName: "Hutchison", program: "Undergraduate", standing: "1st year", academicTerm: "2025-2026: Module Six", department: "General Education", course: "ENG 103", courseName: "English Composition and Reading II", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Beth Bivins", status: "Enrolled", deliveryMethod: "On Campus", grade: 98.70, letter: "A", gradePoints: 12.00, credits: 3.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
  { studentId: 2022000003, firstName: "Maria Candelaria", lastName: "Insua Fuentes", program: "Undergraduate", standing: "4th year", academicTerm: "2025-2026: Module Six", department: "School of Ministry", course: "BL 341", courseName: "Acts: The Early Church", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Daniel Clubb", status: "Enrolled", deliveryMethod: "On Campus", grade: 99.40, letter: "A", gradePoints: 12.00, credits: 3.00, present: 4, absent: 0, tardy: 1, excused: 0, pctAttended: 100 },
  { studentId: 2024000013, firstName: "Jason", lastName: "Layton", program: "Undergraduate", standing: "2nd year", academicTerm: "2025-2026: Module Six", department: "General Education", course: "ENG 103", courseName: "English Composition and Reading II", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Beth Bivins", status: "Enrolled", deliveryMethod: "On Campus", grade: 95.50, letter: "A", gradePoints: 12.00, credits: 3.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
  { studentId: 2025000017, firstName: "Marcus", lastName: "Legere", program: "Undergraduate", standing: "2nd year", academicTerm: "2025-2026: Module Six", department: "School of Business", course: "MGT 301", courseName: "Essentials of Management", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Leah Levine", status: "Enrolled", deliveryMethod: "On Campus", grade: 98.34, letter: "A", gradePoints: 12.00, credits: 3.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
  { studentId: 2024000002, firstName: "Mariana", lastName: "Lucas Lourenco", program: "Undergraduate", standing: "4th year", academicTerm: "2025-2026: Module Six", department: "General Education", course: "PSI 115/116", courseName: "Introduction to Earth Science & Lab", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Erica Waggoner", status: "Enrolled", deliveryMethod: "", grade: 96.01, letter: "A", gradePoints: 16.00, credits: 4.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
  { studentId: 2025000019, firstName: "Justin", lastName: "Martin", program: "Undergraduate", standing: "1st year", academicTerm: "2025-2026: Module Six", department: "General Education", course: "PSI 115/116", courseName: "Introduction to Earth Science & Lab", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Erica Waggoner", status: "Enrolled", deliveryMethod: "", grade: 98.51, letter: "A", gradePoints: 16.00, credits: 4.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
  { studentId: 2023000043, firstName: "John", lastName: "McLeod", program: "Undergraduate", standing: "2nd year", academicTerm: "2025-2026: Module Six", department: "School of Ministry", course: "BL 341", courseName: "Acts: The Early Church", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Daniel Clubb", status: "Enrolled", deliveryMethod: "On Campus", grade: 97.00, letter: "A", gradePoints: 12.00, credits: 3.00, present: 4, absent: 0, tardy: 1, excused: 0, pctAttended: 100 },
  { studentId: 2024000021, firstName: "Drew", lastName: "Mickholtzick", program: "Undergraduate", standing: "2nd year", academicTerm: "2025-2026: Module Six", department: "General Education", course: "ENG 103", courseName: "English Composition and Reading II", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Beth Bivins", status: "Enrolled", deliveryMethod: "On Campus", grade: 98.80, letter: "A", gradePoints: 12.00, credits: 3.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
  { studentId: 2026000004, firstName: "Melanie", lastName: "Morgan", program: "Undergraduate", standing: "1st year", academicTerm: "2025-2026: Module Six", department: "General Education", course: "PSI 115/116", courseName: "Introduction to Earth Science & Lab", startDate: "1/19/2026", endDate: "3/30/2026", finalized: false, primaryFaculty: "Erica Waggoner", status: "Enrolled", deliveryMethod: "", grade: 97.56, letter: "A", gradePoints: 16.00, credits: 4.00, present: 4, absent: 0, tardy: 1, excused: 0, pctAttended: 100 },
  { studentId: 2024000007, firstName: "Brian", lastName: "Myers", program: "Undergraduate", standing: "3rd year", academicTerm: "2025-2026: Module Six", department: "School of Ministry", course: "BL 341", courseName: "Acts: The Early Church", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Daniel Clubb", status: "Enrolled", deliveryMethod: "On Campus", grade: 98.50, letter: "A", gradePoints: 12.00, credits: 3.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
  { studentId: 2024000010, firstName: "Gracie", lastName: "Myers", program: "Undergraduate", standing: "2nd year", academicTerm: "2025-2026: Module Six", department: "School of Ministry", course: "BL 212", courseName: "New Testament Survey", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Dave Dillon", status: "Enrolled", deliveryMethod: "On Campus", grade: 98.60, letter: "A", gradePoints: 12.00, credits: 3.00, present: 4, absent: 1, tardy: 0, excused: 0, pctAttended: 80 },
  { studentId: 2025000025, firstName: "Thi Phuong Thao", lastName: "Nguyen", program: "Undergraduate", standing: "2nd year", academicTerm: "2025-2026: Module Six", department: "General Education", course: "ECON 101", courseName: "Principles of Microeconomics", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "William Kraus", status: "Enrolled", deliveryMethod: "On Campus", grade: 97.23, letter: "A", gradePoints: 12.00, credits: 3.00, present: 4, absent: 1, tardy: 0, excused: 0, pctAttended: 80 },
  { studentId: 2025000018, firstName: "Rodney", lastName: "Outland", program: "Undergraduate", standing: "1st year", academicTerm: "2025-2026: Module Six", department: "General Education", course: "PSI 115/116", courseName: "Introduction to Earth Science & Lab", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Erica Waggoner", status: "Enrolled", deliveryMethod: "", grade: 97.92, letter: "A", gradePoints: 16.00, credits: 4.00, present: 4, absent: 1, tardy: 0, excused: 0, pctAttended: 80 },
  { studentId: 2025000003, firstName: "Humberto", lastName: "Pena", program: "Undergraduate", standing: "2nd year", academicTerm: "2025-2026: Module Six", department: "School of Business", course: "MGT 301", courseName: "Essentials of Management", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Leah Levine", status: "Enrolled", deliveryMethod: "On Campus", grade: 96.68, letter: "A", gradePoints: 12.00, credits: 3.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
  { studentId: 2023000003, firstName: "Khanh", lastName: "Pham", program: "Undergraduate", standing: "4th year", academicTerm: "2025-2026: Module Six", department: "School of Ministry", course: "BL 212", courseName: "New Testament Survey", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Dave Dillon", status: "Enrolled", deliveryMethod: "On Campus", grade: 93.80, letter: "A-", gradePoints: 11.10, credits: 3.00, present: 4, absent: 0, tardy: 1, excused: 0, pctAttended: 100 },
  { studentId: 2024000004, firstName: "Meghan", lastName: "Prinsloo", program: "Undergraduate", standing: "2nd year", academicTerm: "2025-2026: Module Six", department: "School of Ministry", course: "BL 212", courseName: "New Testament Survey", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Dave Dillon", status: "Enrolled", deliveryMethod: "On Campus", grade: 99.40, letter: "A", gradePoints: 12.00, credits: 3.00, present: 3, absent: 2, tardy: 0, excused: 0, pctAttended: 60 },
  { studentId: 2024000008, firstName: "Benjamin", lastName: "Strickroot", program: "Undergraduate", standing: "2nd year", academicTerm: "2025-2026: Module Six", department: "General Education", course: "ECON 101", courseName: "Principles of Microeconomics", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "William Kraus", status: "Enrolled", deliveryMethod: "On Campus", grade: 99.40, letter: "A", gradePoints: 12.00, credits: 3.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
  { studentId: 2025000021, firstName: "Anna", lastName: "Stuart", program: "Undergraduate", standing: "1st year", academicTerm: "2025-2026: Module Six", department: "General Education", course: "PSI 115/116", courseName: "Introduction to Earth Science & Lab", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Erica Waggoner", status: "Enrolled", deliveryMethod: "", grade: 92.13, letter: "B+", gradePoints: 13.20, credits: 4.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
  { studentId: 2024000031, firstName: "Nona", lastName: "Wesson", program: "Undergraduate", standing: "2nd year", academicTerm: "2025-2026: Module Six", department: "School of Business", course: "MGT 301", courseName: "Essentials of Management", startDate: "1/19/2026", endDate: "3/30/2026", finalized: true, primaryFaculty: "Leah Levine", status: "Enrolled", deliveryMethod: "On Campus", grade: 97.23, letter: "A", gradePoints: 12.00, credits: 3.00, present: 5, absent: 0, tardy: 0, excused: 0, pctAttended: 100 },
];

// ---------------------------------------------------------------------------
// DEMO_ATTENDANCE  (from Attendance By Student And Term.csv)
// ---------------------------------------------------------------------------
const DEMO_ATTENDANCE = [
  { studentId: 2026000005, firstName: "Leticia", lastName: "Araujo Eboli", academicTerm: "2025-2026: Module Six", present: 4, excused: 0, tardy: 0, absent: 1, pctAttended: 80, gender: "Female" },
  { studentId: 2023000008, firstName: "Eduarda", lastName: "Becher", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Female" },
  { studentId: 2026000002, firstName: "Seth", lastName: "Dawson", academicTerm: "2025-2026: Module Six", present: 4, excused: 0, tardy: 1, absent: 0, pctAttended: 100, gender: "Male" },
  { studentId: 2024000022, firstName: "Corban", lastName: "Dolan", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Male" },
  { studentId: 2024000001, firstName: "Jana-Rai", lastName: "Dufault", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Female" },
  { studentId: 2022000022, firstName: "Pavlos", lastName: "Fokos", academicTerm: "2025-2026: Module Six", present: 2, excused: 0, tardy: 2, absent: 1, pctAttended: 80, gender: "Male" },
  { studentId: 2026000003, firstName: "Jessica", lastName: "Goldsmith", academicTerm: "2025-2026: Module Six", present: 4, excused: 0, tardy: 0, absent: 1, pctAttended: 80, gender: "Female" },
  { studentId: 2020000004, firstName: "Theresa", lastName: "Green", academicTerm: "2025-2026: Module Six", present: 4, excused: 0, tardy: 0, absent: 1, pctAttended: 80, gender: "Female" },
  { studentId: 2025000008, firstName: "Landon", lastName: "Henley", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Male" },
  { studentId: 2025000029, firstName: "Jack", lastName: "Hines", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Male" },
  { studentId: 2023000016, firstName: "Jolie", lastName: "Hudson", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Female" },
  { studentId: 2025000016, firstName: "Richard", lastName: "Hutchison", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Male" },
  { studentId: 2022000003, firstName: "Maria Candelaria", lastName: "Insua Fuentes", academicTerm: "2025-2026: Module Six", present: 4, excused: 0, tardy: 1, absent: 0, pctAttended: 100, gender: "Female" },
  { studentId: 2024000013, firstName: "Jason", lastName: "Layton", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Male" },
  { studentId: 2025000017, firstName: "Marcus", lastName: "Legere", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Male" },
  { studentId: 2024000002, firstName: "Mariana", lastName: "Lucas Lourenco", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Female" },
  { studentId: 2025000019, firstName: "Justin", lastName: "Martin", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Male" },
  { studentId: 2023000043, firstName: "John", lastName: "McLeod", academicTerm: "2025-2026: Module Six", present: 4, excused: 0, tardy: 1, absent: 0, pctAttended: 100, gender: "Male" },
  { studentId: 2024000021, firstName: "Drew", lastName: "Mickholtzick", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Male" },
  { studentId: 2026000004, firstName: "Melanie", lastName: "Morgan", academicTerm: "2025-2026: Module Six", present: 4, excused: 0, tardy: 1, absent: 0, pctAttended: 100, gender: "Female" },
  { studentId: 2024000007, firstName: "Brian", lastName: "Myers", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Male" },
  { studentId: 2024000010, firstName: "Gracie", lastName: "Myers", academicTerm: "2025-2026: Module Six", present: 4, excused: 0, tardy: 0, absent: 1, pctAttended: 80, gender: "Female" },
  { studentId: 2025000025, firstName: "Thi Phuong Thao", lastName: "Nguyen", academicTerm: "2025-2026: Module Six", present: 4, excused: 0, tardy: 0, absent: 1, pctAttended: 80, gender: "Female" },
  { studentId: 2025000018, firstName: "Rodney", lastName: "Outland", academicTerm: "2025-2026: Module Six", present: 4, excused: 0, tardy: 0, absent: 1, pctAttended: 80, gender: "Male" },
  { studentId: 2025000003, firstName: "Humberto", lastName: "Pena", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Male" },
  { studentId: 2023000003, firstName: "Khanh", lastName: "Pham", academicTerm: "2025-2026: Module Six", present: 4, excused: 0, tardy: 1, absent: 0, pctAttended: 100, gender: "Male" },
  { studentId: 2024000004, firstName: "Meghan", lastName: "Prinsloo", academicTerm: "2025-2026: Module Six", present: 3, excused: 0, tardy: 0, absent: 2, pctAttended: 60, gender: "Female" },
  { studentId: 2024000008, firstName: "Benjamin", lastName: "Strickroot", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Male" },
  { studentId: 2025000021, firstName: "Anna", lastName: "Stuart", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Female" },
  { studentId: 2024000031, firstName: "Nona", lastName: "Wesson", academicTerm: "2025-2026: Module Six", present: 5, excused: 0, tardy: 0, absent: 0, pctAttended: 100, gender: "Female" },
];

// ---------------------------------------------------------------------------
// DEMO_SUMMARY  (pre-computed from the data above)
// ---------------------------------------------------------------------------
const DEMO_SUMMARY = {
  // Enrollment counts by Degree (from Students-2.csv Degree column)
  enrollmentByProgram: {
    BSBA: 9,
    BSML: 9,
    ADL: 11,
  },

  totalStudents: 29,

  // Average cumulative GPA across all 29 students in Students-2.csv
  avgGPA: 3.72,

  // Average attendance % from Attendance CSV (30 rows including Mickholtzick)
  avgAttendance: 93.33,

  // Course-level breakdown from Enrollments (30 rows)
  courseBreakdown: {
    "Principles of Microeconomics": {
      enrolled: 4,
      avgGrade: 97.62,
      faculty: "William Kraus",
    },
    "New Testament Survey": {
      enrolled: 5,
      avgGrade: 95.06,
      faculty: "Dave Dillon",
    },
    "Introduction to Earth Science & Lab": {
      enrolled: 8,
      avgGrade: 95.56,
      faculty: "Erica Waggoner",
    },
    "Essentials of Management": {
      enrolled: 7,
      avgGrade: 96.10,
      faculty: "Leah Levine",
    },
    "English Composition and Reading II": {
      enrolled: 3,
      avgGrade: 97.67,
      faculty: "Beth Bivins",
    },
    "Acts: The Early Church": {
      enrolled: 3,
      avgGrade: 98.30,
      faculty: "Daniel Clubb",
    },
  },

  // Letter-grade distribution from Enrollments (30 rows)
  // Bucketed by letter prefix: A/A-=A bucket, B+/B=B bucket
  gradeDistribution: {
    A: 26,
    B: 4,
    C: 0,
    D: 0,
    F: 0,
  },
};

// ---------------------------------------------------------------------------
// Exports (works in both Node.js and browser <script> contexts)
// ---------------------------------------------------------------------------
if (typeof module !== "undefined" && module.exports) {
  module.exports = { DEMO_STUDENTS, DEMO_ENROLLMENTS, DEMO_ATTENDANCE, DEMO_SUMMARY };
}
