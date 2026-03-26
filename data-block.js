// ============================================================
// Williamson College IE Assessment System - Data Block
// Auto-generated from williamson ie data.json
// ============================================================

const INSTITUTION = {
  name: "Williamson College",
  mission: "Williamson College is an institution of higher education that offers both graduate and undergraduate programs. The college equips, or prepares, students to be on mission in the world for Christ by teaching a curriculum that integrates faith with education.",
  institutionalGoals: {
    forStudents: [
      "Completed coursework in which they were exposed to biblical truth and cultural literacy.",
      "Identified their God-calling and the factors involved in planning their vocation around that calling.",
      "Developed a Christian worldview in which values, goals, strategies, initiative, and relationships are confidently developed.",
      "Developed the ability to use a library and to find, evaluate, and synthesize information from a variety of sources.",
      "Developed a professional relationship with faculty members who have provided advice, motivation, and direction to their academic experience.",
      "Learned how to effectively interact with other adults in a rigorous learning environment and acquired the knowledge, new perspectives, and skills to become lifelong learners."
    ],
    forInstitution: [
      "Demonstrate its desire for quality in meeting its mission by conducting an effective institutional research and planning program for the purpose of constant improvement.",
      "Maintain honest and quality relationships with all segments of the college's community.",
      "Create an adequate, healthy, and safe environment for students and employees.",
      "Maintain programs that promote the enrollment and retention of persons who demonstrate their ability to receive instruction and have the heart for God."
    ]
  },
  genEdMission: "Students complete coursework in which they develop and can communicate Christian values, new knowledge, new perspectives, and new skills."
};

const ILOs = [
  { id: "ILO1", text: "The student can demonstrate the ability to think critically." },
  { id: "ILO2", text: "The student can exhibit effective communication skills." },
  { id: "ILO3", text: "The student can exercise basic math competencies." },
  { id: "ILO4", text: "The student can perform basic computing competencies." },
  { id: "ILO5", text: "The student can articulate a biblical worldview." }
];

const GEN_ED_SLOS = [
  { id: "ILO1", text: "The student can demonstrate the ability to think critically." },
  { id: "ILO2", text: "The student can exhibit effective communication skills." },
  { id: "ILO3", text: "The student can exercise basic math competencies." },
  { id: "ILO4", text: "The student can perform basic computing competencies." },
  { id: "ILO5", text: "The student can articulate a biblical worldview." }
];

const PROGRAMS = [
  {
    id: "BSBA", name: "B.S. in Business Administration", level: "ug", school: "Business",
    credits: 122, chair: "Steve W. Griffin MAOL",
    benchmarkPercent: 70, benchmarkScore: 70,
    slos: [
      { id: "BSBA-PLO1", name: "Financial Analysis", text: "Analyze financial statements and apply accounting principles to evaluate business performance and inform decision-making." },
      { id: "BSBA-PLO2", name: "Strategic Planning", text: "Develop a comprehensive business plan integrating mission, market analysis, competitive strategy, and financial projections." },
      { id: "BSBA-PLO3", name: "Organizational Leadership", text: "Evaluate organizational culture and behavior and apply management principles to lead teams and drive effectiveness." },
      { id: "BSBA-PLO4", name: "Business Communication", text: "Construct clear, persuasive written and oral arguments appropriate to professional business contexts." },
      { id: "BSBA-PLO5", name: "Legal and Ethical Reasoning", text: "Analyze business scenarios through frameworks of business law, risk management, and biblical ethics." },
      { id: "BSBA-PLO6", name: "Biblical Integration", text: "Apply a biblical worldview to evaluation of business practices, articulating how Christian values inform enterprise purpose and servant leadership." }
    ],
    courses: [
      { id: "LD201", code: "LD 201", name: "Biblical Concepts of Leadership", cr: 3, category: "core" },
      { id: "BL201", code: "BL 201", name: "Old Testament Studies I", cr: 3, category: "core" },
      { id: "CT251", code: "CT 251", name: "Introduction to Biblical Worldview", cr: 3, category: "core" },
      { id: "BL202", code: "BL 202", name: "Old Testament Studies II", cr: 3, category: "core" },
      { id: "BL212", code: "BL 212", name: "New Testament Survey", cr: 3, category: "core" },
      { id: "ACCT301", code: "ACCT 301", name: "Principles of Accounting I", cr: 3, category: "core" },
      { id: "ECON301", code: "ECON 301", name: "Principles of Macroeconomics", cr: 3, category: "core" },
      { id: "MGT311", code: "MGT 311", name: "Entrepreneurship and Small Business", cr: 3, category: "core" },
      { id: "MGT301", code: "MGT 301", name: "Essentials of Management", cr: 3, category: "core" },
      { id: "CT330", code: "CT 330", name: "Christian Doctrine II", cr: 3, category: "core" },
      { id: "MGT361", code: "MGT 361", name: "Introduction to Sales", cr: 3, category: "core" },
      { id: "MGT381", code: "MGT 381", name: "Organizational Behavior", cr: 3, category: "core" },
      { id: "ACCT310", code: "ACCT 310", name: "Introduction to Finance", cr: 3, category: "core" },
      { id: "MKT361", code: "MKT 361", name: "Marketing", cr: 3, category: "core" },
      { id: "MGT371", code: "MGT 371", name: "Managing Yourself, Managing Others", cr: 3, category: "core" },
      { id: "BUSPS450", code: "BUS/PS 450", name: "Business Law", cr: 3, category: "core" },
      { id: "BUS301", code: "BUS 301", name: "Business as Mission", cr: 3, category: "core" },
      { id: "CT403", code: "CT 403", name: "Biblical Ethics", cr: 3, category: "core" },
      { id: "LD471", code: "LD 471", name: "Leadership: Theory and Practice", cr: 3, category: "core" },
      { id: "MGT441", code: "MGT 441", name: "Principles and Issues in Business Risk", cr: 3, category: "core" },
      { id: "MGT489", code: "MGT 489", name: "Business Administration Capstone", cr: 3, category: "core" }
    ]
  },
  {
    id: "MAOL", name: "M.A. in Organizational Leadership", level: "grad", school: "Business",
    credits: 33, chair: "Steve W. Griffin MAOL",
    benchmarkPercent: 80, benchmarkScore: 80,
    slos: [
      { id: "MAOL-PLO1", name: "Ethical Leadership Framework", text: "Evaluate competing ethical frameworks and construct a personal leadership ethic grounded in theological reflection." },
      { id: "MAOL-PLO2", name: "Organizational Diagnosis", text: "Assess organizational culture using diagnostic models and design evidence-based strategies for leading change." },
      { id: "MAOL-PLO3", name: "Strategic Vision and Execution", text: "Design and defend a strategic plan integrating mission clarity, environmental analysis, and implementation." },
      { id: "MAOL-PLO4", name: "Conflict and Negotiation", text: "Analyze organizational conflict and apply resolution frameworks to produce outcomes that advance mission." },
      { id: "MAOL-PLO5", name: "Cross-Cultural Leadership", text: "Evaluate leadership practices across cultural contexts and adapt approaches to lead diverse teams." },
      { id: "MAOL-PLO6", name: "Scholarly Integration", text: "Synthesize research, theory, and biblical principles into substantive work demonstrating graduate-level competency." }
    ],
    courses: [
      { id: "OL500", code: "OL 500", name: "Critical Thinking", cr: 3, category: "core" },
      { id: "OL501", code: "OL 501", name: "Biblical Principles for Global Leadership", cr: 3, category: "core" },
      { id: "OL510", code: "OL 510", name: "Ethical Leadership in Public Life", cr: 3, category: "core" },
      { id: "OL530", code: "OL 530", name: "Organizational Culture", cr: 3, category: "core" },
      { id: "OL540", code: "OL 540", name: "Leading Through Change", cr: 3, category: "core" },
      { id: "OL550", code: "OL 550", name: "Leading in a National Context", cr: 3, category: "core" },
      { id: "OL560", code: "OL 560", name: "Organizational Communication and Conflict Management", cr: 3, category: "core" },
      { id: "OL565", code: "OL 565", name: "Business Risk Management", cr: 3, category: "core" },
      { id: "OL570", code: "OL 570", name: "Financial Statement Analysis", cr: 3, category: "core" },
      { id: "OL575", code: "OL 575", name: "Strategic Planning", cr: 3, category: "core" },
      { id: "OL590", code: "OL 590", name: "Dynamics of Leading in an International Context", cr: 3, category: "core" },
      { id: "OL599", code: "OL 599", name: "Capstone Project", cr: 3, category: "core" }
    ]
  },
  {
    id: "ASL", name: "Associate of Science in Leadership", level: "ug", school: "Leadership",
    credits: 62, chair: "TBD",
    benchmarkPercent: 70, benchmarkScore: 70,
    slos: [
      { id: "ASL-PLO1", name: "Transformation", text: "Demonstrate personal and spiritual transformation through engagement with biblical truth and self-reflection." },
      { id: "ASL-PLO2", name: "Worldview", text: "Articulate a Christian worldview that integrates faith with learning and professional practice." },
      { id: "ASL-PLO3", name: "Communication", text: "Exhibit effective written and oral communication skills appropriate to academic and professional contexts." },
      { id: "ASL-PLO4", name: "Leadership", text: "Apply foundational leadership principles grounded in biblical and organizational frameworks." },
      { id: "ASL-PLO5", name: "Biblical Knowledge", text: "Demonstrate knowledge of the Old and New Testaments including key themes, narratives, and theological concepts." },
      { id: "ASL-PLO6", name: "Biblical Understanding", text: "Interpret and apply Scripture to contemporary issues of faith, ethics, and vocation." }
    ],
    courses: [
      { id: "ORI101", code: "ORI101", name: "TBD", cr: 3, category: "core" },
      { id: "PD100", code: "PD100", name: "TBD", cr: 3, category: "core" },
      { id: "PD101", code: "PD101", name: "TBD", cr: 3, category: "core" },
      { id: "LD201", code: "LD 201", name: "Biblical Concepts of Leadership", cr: 3, category: "core" },
      { id: "BL200", code: "BL200", name: "TBD", cr: 3, category: "core" },
      { id: "BL201", code: "BL 201", name: "Old Testament Studies I", cr: 3, category: "core" },
      { id: "ENG102", code: "ENG102", name: "TBD", cr: 3, category: "core" },
      { id: "CT251", code: "CT 251", name: "Introduction to Biblical Worldview", cr: 3, category: "core" },
      { id: "BL202", code: "BL 202", name: "Old Testament Studies II", cr: 3, category: "core" },
      { id: "LD211", code: "LD211", name: "TBD", cr: 3, category: "core" },
      { id: "MGT301", code: "MGT 301", name: "Essentials of Management", cr: 3, category: "core" },
      { id: "ENG311", code: "ENG311", name: "TBD", cr: 3, category: "core" },
      { id: "BL212", code: "BL 212", name: "New Testament Survey", cr: 3, category: "core" },
      { id: "PSY103", code: "PSY103", name: "TBD", cr: 3, category: "core" },
      { id: "SPT243", code: "SPT243", name: "TBD", cr: 3, category: "core" },
      { id: "MGT381", code: "MGT 381", name: "Organizational Behavior", cr: 3, category: "core" },
      { id: "LD471", code: "LD 471", name: "Leadership: Theory and Practice", cr: 3, category: "core" },
      { id: "LD289", code: "LD289", name: "TBD", cr: 3, category: "core" }
    ]
  },
  {
    id: "BSML", name: "B.S. in Ministry Leadership", level: "ug", school: "Ministry",
    credits: 122, chair: "Dave Dillon M.Div.",
    benchmarkPercent: 70, benchmarkScore: 70,
    slos: [
      { id: "BSML-PLO1", name: "Biblical Knowledge", text: "Demonstrate comprehensive knowledge of the Old and New Testaments including key themes, narratives, and theological concepts." },
      { id: "BSML-PLO2", name: "Biblical Understanding", text: "Interpret and apply Scripture using sound hermeneutical methods to contemporary issues of faith and ministry." },
      { id: "BSML-PLO3", name: "Transformation", text: "Demonstrate personal and spiritual transformation through engagement with biblical truth and ministry practice." },
      { id: "BSML-PLO4", name: "Worldview", text: "Articulate a Christian worldview that integrates theology with leadership and ministry practice." },
      { id: "BSML-PLO5", name: "Communication", text: "Exhibit effective written and oral communication skills appropriate to ministry and academic contexts." },
      { id: "BSML-PLO6", name: "Leadership", text: "Apply leadership principles grounded in biblical and theological frameworks to ministry settings." }
    ],
    courses: [
      { id: "LD201", code: "LD 201", name: "Biblical Concepts of Leadership", cr: 3, category: "core" },
      { id: "BL200", code: "BL200", name: "TBD", cr: 3, category: "core" },
      { id: "BL201", code: "BL 201", name: "Old Testament Studies I", cr: 3, category: "core" },
      { id: "CT251", code: "CT 251", name: "Introduction to Biblical Worldview", cr: 3, category: "core" },
      { id: "BL202", code: "BL 202", name: "Old Testament Studies II", cr: 3, category: "core" },
      { id: "CT325", code: "CT325", name: "TBD", cr: 3, category: "core" },
      { id: "BL212", code: "BL 212", name: "New Testament Survey", cr: 3, category: "core" },
      { id: "BL331", code: "BL331", name: "TBD", cr: 3, category: "core" },
      { id: "BL341", code: "BL341", name: "TBD", cr: 3, category: "core" },
      { id: "CT330", code: "CT 330", name: "Christian Doctrine II", cr: 3, category: "core" },
      { id: "BL342", code: "BL342", name: "TBD", cr: 3, category: "core" },
      { id: "MGT381", code: "MGT 381", name: "Organizational Behavior", cr: 3, category: "core" },
      { id: "BL343", code: "BL343", name: "TBD", cr: 3, category: "core" },
      { id: "CT321", code: "CT321", name: "TBD", cr: 3, category: "core" },
      { id: "CT201", code: "CT201", name: "TBD", cr: 3, category: "core" },
      { id: "MIS300", code: "MIS300", name: "TBD", cr: 3, category: "core" },
      { id: "CT403", code: "CT 403", name: "Biblical Ethics", cr: 3, category: "core" },
      { id: "CM303", code: "CM303", name: "TBD", cr: 3, category: "core" },
      { id: "CM489", code: "CM489", name: "TBD", cr: 3, category: "core" }
    ]
  },
  {
    id: "MABS", name: "M.A. in Biblical Studies", level: "grad", school: "Ministry",
    credits: 42, chair: "Paul Wilkinson Ph.D.",
    benchmarkPercent: 80, benchmarkScore: 80,
    slos: [
      { id: "MABS-PLO1", name: "Biblical Exegesis", text: "Demonstrate advanced exegetical skills in interpreting Old and New Testament texts within their historical, literary, and theological contexts." },
      { id: "MABS-PLO2", name: "Theological Integration", text: "Integrate biblical theology with systematic theology to construct coherent theological positions." },
      { id: "MABS-PLO3", name: "Hermeneutical Method", text: "Apply sound hermeneutical principles to interpret Scripture and address contemporary theological questions." },
      { id: "MABS-PLO4", name: "Scholarly Communication", text: "Communicate biblical and theological research in clear, well-organized graduate-level writing." },
      { id: "MABS-PLO5", name: "Spiritual Formation", text: "Demonstrate spiritual maturity and commitment to lifelong growth in biblical understanding and Christian practice." },
      { id: "MABS-PLO6", name: "Ministry Application", text: "Apply biblical knowledge to ministry contexts including teaching, preaching, and pastoral care." }
    ],
    courses: [
      { id: "CT570", code: "CT570", name: "TBD", cr: 3, category: "core" },
      { id: "CT501", code: "CT501", name: "TBD", cr: 3, category: "core" },
      { id: "BL500", code: "BL500", name: "TBD", cr: 3, category: "core" },
      { id: "BL501", code: "BL501", name: "TBD", cr: 3, category: "core" },
      { id: "BL561", code: "BL561", name: "TBD", cr: 3, category: "core" },
      { id: "CT590", code: "CT590", name: "TBD", cr: 3, category: "core" },
      { id: "BL562", code: "BL562", name: "TBD", cr: 3, category: "core" },
      { id: "BL505", code: "BL505", name: "TBD", cr: 3, category: "core" },
      { id: "BL512", code: "BL512", name: "TBD", cr: 3, category: "core" },
      { id: "BL551", code: "BL551", name: "TBD", cr: 3, category: "core" },
      { id: "BL513", code: "BL513", name: "TBD", cr: 3, category: "core" },
      { id: "OL531", code: "OL531", name: "TBD", cr: 3, category: "core" },
      { id: "BL599", code: "BL599", name: "TBD", cr: 3, category: "core" }
    ]
  },
  {
    id: "MATS", name: "M.A. in Theological Studies", level: "grad", school: "Ministry",
    credits: 42, chair: "Paul Wilkinson Ph.D.",
    benchmarkPercent: 80, benchmarkScore: 80,
    slos: [
      { id: "MATS-PLO1", name: "Theological Analysis", text: "Analyze major theological doctrines within their biblical, historical, and contemporary contexts." },
      { id: "MATS-PLO2", name: "Historical Theology", text: "Trace the development of Christian doctrine through major historical periods and assess its contemporary relevance." },
      { id: "MATS-PLO3", name: "Apologetics", text: "Construct and defend coherent theological arguments engaging both Christian and secular perspectives." },
      { id: "MATS-PLO4", name: "Scholarly Communication", text: "Communicate theological research in clear, well-organized graduate-level writing and presentation." },
      { id: "MATS-PLO5", name: "Spiritual Formation", text: "Demonstrate spiritual maturity and commitment to lifelong theological reflection and Christian practice." },
      { id: "MATS-PLO6", name: "Ministry Application", text: "Apply theological understanding to ministry contexts including teaching, counseling, and church leadership." }
    ],
    courses: [
      { id: "CT570", code: "CT570", name: "TBD", cr: 3, category: "core" },
      { id: "CT501", code: "CT501", name: "TBD", cr: 3, category: "core" },
      { id: "CT535", code: "CT535", name: "TBD", cr: 3, category: "core" },
      { id: "CT510", code: "CT510", name: "TBD", cr: 3, category: "core" },
      { id: "CT550", code: "CT550", name: "TBD", cr: 3, category: "core" },
      { id: "CT590", code: "CT590", name: "TBD", cr: 3, category: "core" },
      { id: "CT520", code: "CT520", name: "TBD", cr: 3, category: "core" },
      { id: "BL550", code: "BL550", name: "TBD", cr: 3, category: "core" },
      { id: "CT530", code: "CT530", name: "TBD", cr: 3, category: "core" },
      { id: "CT540", code: "CT540", name: "TBD", cr: 3, category: "core" },
      { id: "CT515", code: "CT515", name: "TBD", cr: 3, category: "core" },
      { id: "CT560", code: "CT560", name: "TBD", cr: 3, category: "core" },
      { id: "OL531", code: "OL531", name: "TBD", cr: 3, category: "core" },
      { id: "CT599", code: "CT599", name: "TBD", cr: 3, category: "core" }
    ]
  },
  {
    id: "MATBL", name: "M.A. in Theology and Biblical Languages", level: "grad", school: "Ministry",
    credits: 42, chair: "Paul Wilkinson Ph.D.",
    benchmarkPercent: 80, benchmarkScore: 80,
    slos: [
      { id: "MATBL-PLO1", name: "Biblical Languages", text: "Demonstrate reading proficiency in biblical Hebrew and/or Greek sufficient for exegetical work." },
      { id: "MATBL-PLO2", name: "Exegetical Method", text: "Apply language-based exegetical methods to interpret biblical texts in their original languages." },
      { id: "MATBL-PLO3", name: "Theological Integration", text: "Integrate linguistic analysis with theological reflection to construct well-grounded interpretations." },
      { id: "MATBL-PLO4", name: "Scholarly Communication", text: "Communicate exegetical and theological research in clear, well-organized graduate-level writing." },
      { id: "MATBL-PLO5", name: "Spiritual Formation", text: "Demonstrate spiritual maturity and commitment to lifelong engagement with Scripture in the original languages." },
      { id: "MATBL-PLO6", name: "Ministry Application", text: "Apply language-informed biblical interpretation to preaching, teaching, and ministry practice." }
    ],
    courses: [
      { id: "CT570", code: "CT570", name: "TBD", cr: 3, category: "core" },
      { id: "CT501", code: "CT501", name: "TBD", cr: 3, category: "core" },
      { id: "BL500", code: "BL500", name: "TBD", cr: 3, category: "core" },
      { id: "BL561", code: "BL561", name: "TBD", cr: 3, category: "core" },
      { id: "BL562", code: "BL562", name: "TBD", cr: 3, category: "core" },
      { id: "CT510", code: "CT510", name: "TBD", cr: 3, category: "core" },
      { id: "CT540", code: "CT540", name: "TBD", cr: 3, category: "core" },
      { id: "CT520", code: "CT520", name: "TBD", cr: 3, category: "core" },
      { id: "BL551", code: "BL551", name: "TBD", cr: 3, category: "core" },
      { id: "BL552", code: "BL552", name: "TBD", cr: 3, category: "core" },
      { id: "CT530", code: "CT530", name: "TBD", cr: 3, category: "core" },
      { id: "CT590", code: "CT590", name: "TBD", cr: 3, category: "core" },
      { id: "OL531", code: "OL531", name: "TBD", cr: 3, category: "core" },
      { id: "CM599", code: "CM599", name: "TBD", cr: 3, category: "core" }
    ]
  },
  {
    id: "MAIL", name: "M.A. in Intercultural Leadership", level: "grad", school: "Intercultural",
    credits: 42, chair: "David Crim Ph.D.",
    benchmarkPercent: 80, benchmarkScore: 80,
    slos: [
      { id: "MAIL-PLO1", name: "Cultural Analysis", text: "Analyze cultural systems and worldviews using established intercultural frameworks." },
      { id: "MAIL-PLO2", name: "Intercultural Communication", text: "Demonstrate effective communication across cultural boundaries in ministry and organizational contexts." },
      { id: "MAIL-PLO3", name: "Mission Theology", text: "Articulate a theology of mission grounded in Scripture and informed by global perspectives." },
      { id: "MAIL-PLO4", name: "Leadership Development", text: "Apply leadership principles to develop and empower indigenous leaders in cross-cultural settings." },
      { id: "MAIL-PLO5", name: "Scholarly Integration", text: "Synthesize research, theory, and biblical principles into substantive graduate-level work." },
      { id: "MAIL-PLO6", name: "Spiritual Formation", text: "Demonstrate spiritual maturity and commitment to lifelong growth in intercultural ministry." }
    ],
    courses: [
      { id: "ICL500", code: "ICL500", name: "TBD", cr: 3, category: "core" },
      { id: "ICL510", code: "ICL510", name: "TBD", cr: 3, category: "core" },
      { id: "ICL520", code: "ICL520", name: "TBD", cr: 3, category: "core" },
      { id: "ICL530", code: "ICL530", name: "TBD", cr: 3, category: "core" },
      { id: "ICL540", code: "ICL540", name: "TBD", cr: 3, category: "core" },
      { id: "ICL550", code: "ICL550", name: "TBD", cr: 3, category: "core" },
      { id: "ICL560", code: "ICL560", name: "TBD", cr: 3, category: "core" },
      { id: "ICL600", code: "ICL600", name: "TBD", cr: 3, category: "core" },
      { id: "ICL610", code: "ICL610", name: "TBD", cr: 3, category: "core" },
      { id: "ICL620", code: "ICL620", name: "TBD", cr: 3, category: "core" },
      { id: "ICL630", code: "ICL630", name: "TBD", cr: 3, category: "core" },
      { id: "ICL640", code: "ICL640", name: "TBD", cr: 3, category: "core" },
      { id: "ICL650", code: "ICL650", name: "TBD", cr: 3, category: "core" },
      { id: "ICL660", code: "ICL660", name: "TBD", cr: 3, category: "core" }
    ]
  }
];

const COURSE_SLOS = {
  "LD201": {
    code: "LD 201", title: "Biblical Concepts of Leadership", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "LD_201_SLO1", number: 1, text: "Identify and explain at least five biblical leadership principles drawn from both Old and New Testament narratives." },
      { id: "LD_201_SLO2", number: 2, text: "Compare and contrast the leadership styles of at least three biblical leaders and evaluate their effectiveness." },
      { id: "LD_201_SLO3", number: 3, text: "Apply a biblical leadership principle to a contemporary organizational scenario in a written case analysis." },
      { id: "LD_201_SLO4", number: 4, text: "Articulate a personal philosophy of leadership grounded in scriptural foundations." },
      { id: "LD_201_SLO5", number: 5, text: "Evaluate a current leadership challenge using biblical criteria for integrity, service, and stewardship." }
    ]
  },
  "BL201": {
    code: "BL 201", title: "Old Testament Studies I", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "BL_201_SLO1", number: 1, text: "Outline the major narrative arc of the Old Testament from Genesis through the United Monarchy." },
      { id: "BL_201_SLO2", number: 2, text: "Identify the key themes, characters, and events in the Pentateuch and explain their theological significance." },
      { id: "BL_201_SLO3", number: 3, text: "Analyze the historical and cultural context of at least two Old Testament books." },
      { id: "BL_201_SLO4", number: 4, text: "Connect Old Testament principles of covenant, justice, and stewardship to contemporary ethical decision-making." },
      { id: "BL_201_SLO5", number: 5, text: "Summarize the content and theological contributions of the Wisdom Literature." }
    ]
  },
  "CT251": {
    code: "CT 251", title: "Introduction to Biblical Worldview", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "CT_251_SLO1", number: 1, text: "Define the components of a worldview and distinguish a biblical worldview from at least two alternatives." },
      { id: "CT_251_SLO2", number: 2, text: "Explain the roles of general revelation and special revelation in forming a Christian understanding of truth." },
      { id: "CT_251_SLO3", number: 3, text: "Analyze a contemporary cultural issue through the lens of a biblical worldview." },
      { id: "CT_251_SLO4", number: 4, text: "Articulate how a biblical worldview integrates with professional and vocational decision-making." },
      { id: "CT_251_SLO5", number: 5, text: "Evaluate the coherence of a biblical worldview compared to secular alternatives using logical criteria." }
    ]
  },
  "BL202": {
    code: "BL 202", title: "Old Testament Studies II", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "BL_202_SLO1", number: 1, text: "Trace the historical sequence from the Divided Monarchy through the Post-Babylonian Captivity." },
      { id: "BL_202_SLO2", number: 2, text: "Analyze the messages of at least three Old Testament prophets within their historical contexts." },
      { id: "BL_202_SLO3", number: 3, text: "Compare the theological themes of judgment and restoration across the prophetic literature." },
      { id: "BL_202_SLO4", number: 4, text: "Explain the relationship between the historical books and the concurrent prophetic writings." },
      { id: "BL_202_SLO5", number: 5, text: "Evaluate the relevance of Old Testament prophetic themes to contemporary issues of justice." }
    ]
  },
  "BL212": {
    code: "BL 212", title: "New Testament Survey", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "BL_212_SLO1", number: 1, text: "Describe the historical, cultural, and political context of the Intertestamental Period." },
      { id: "BL_212_SLO2", number: 2, text: "Summarize the structure, themes, and distinctive contributions of each of the four Gospels." },
      { id: "BL_212_SLO3", number: 3, text: "Trace the development of the early church through Acts, identifying key events and leaders." },
      { id: "BL_212_SLO4", number: 4, text: "Analyze the major themes in the Pauline and General Epistles." },
      { id: "BL_212_SLO5", number: 5, text: "Construct a timeline integrating the New Testament writings with first century historical events." }
    ]
  },
  "ACCT301": {
    code: "ACCT 301", title: "Principles of Accounting I", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "ACCT_301_SLO1", number: 1, text: "Record business transactions using double-entry bookkeeping through the complete accounting cycle." },
      { id: "ACCT_301_SLO2", number: 2, text: "Prepare a trial balance, income statement, balance sheet, and statement of cash flows." },
      { id: "ACCT_301_SLO3", number: 3, text: "Classify accounts as assets, liabilities, equity, revenues, or expenses." },
      { id: "ACCT_301_SLO4", number: 4, text: "Process accounts receivable and accounts payable transactions including adjusting entries." },
      { id: "ACCT_301_SLO5", number: 5, text: "Reconcile a bank statement and identify discrepancies between book and bank balances." }
    ]
  },
  "ECON301": {
    code: "ECON 301", title: "Principles of Macroeconomics", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "ECON_301_SLO1", number: 1, text: "Explain key macroeconomic indicators (GDP, unemployment, inflation) and interpret their trends." },
      { id: "ECON_301_SLO2", number: 2, text: "Analyze the effects of fiscal and monetary policy on economic output and price levels." },
      { id: "ECON_301_SLO3", number: 3, text: "Compare competing macroeconomic theories and their policy implications." },
      { id: "ECON_301_SLO4", number: 4, text: "Assess how macroeconomic conditions affect business planning and investment decisions." },
      { id: "ECON_301_SLO5", number: 5, text: "Interpret current economic data to support a business recommendation." }
    ]
  },
  "MGT311": {
    code: "MGT 311", title: "Entrepreneurship and Small Business", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "MGT_311_SLO1", number: 1, text: "Develop a complete business plan including mission, market analysis, and financial projections." },
      { id: "MGT_311_SLO2", number: 2, text: "Identify and evaluate a business opportunity using market research and feasibility analysis." },
      { id: "MGT_311_SLO3", number: 3, text: "Explain the legal structures available for small businesses and recommend an appropriate form." },
      { id: "MGT_311_SLO4", number: 4, text: "Create a startup budget and cash flow projection for the first twelve months." },
      { id: "MGT_311_SLO5", number: 5, text: "Present a business concept using a persuasive pitch format with supporting financial data." }
    ]
  },
  "MGT301": {
    code: "MGT 301", title: "Essentials of Management", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "MGT_301_SLO1", number: 1, text: "Explain and apply the five management functions to organizational scenarios." },
      { id: "MGT_301_SLO2", number: 2, text: "Compare at least three management theories and evaluate their applicability." },
      { id: "MGT_301_SLO3", number: 3, text: "Design an organizational structure that aligns roles, responsibilities, and reporting." },
      { id: "MGT_301_SLO4", number: 4, text: "Develop a basic operational plan with goals, timelines, and performance metrics." },
      { id: "MGT_301_SLO5", number: 5, text: "Assess a manager’s effectiveness using servant leadership principles alongside management criteria." }
    ]
  },
  "CT330": {
    code: "CT 330", title: "Christian Doctrine II", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "CT_330_SLO1", number: 1, text: "Articulate the key tenets of Christology, Soteriology, Pneumatology, Ecclesiology, and Eschatology." },
      { id: "CT_330_SLO2", number: 2, text: "Compare at least two theological positions on a contested doctrine and evaluate biblical evidence." },
      { id: "CT_330_SLO3", number: 3, text: "Explain the relationship between the person and work of Christ and the doctrine of salvation." },
      { id: "CT_330_SLO4", number: 4, text: "Apply Pneumatology to the life and mission of the local church." },
      { id: "CT_330_SLO5", number: 5, text: "Construct a personal doctrinal statement supported by Scripture and theological reasoning." }
    ]
  },
  "MGT361": {
    code: "MGT 361", title: "Introduction to Sales", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "MGT_361_SLO1", number: 1, text: "Execute the eight-step sales cycle from prospecting through closing in a simulation exercise." },
      { id: "MGT_361_SLO2", number: 2, text: "Identify and adapt communication approaches for different social styles and buyer personalities." },
      { id: "MGT_361_SLO3", number: 3, text: "Develop a relationship-based sales strategy reflecting ethical and biblical business principles." },
      { id: "MGT_361_SLO4", number: 4, text: "Deliver a persuasive sales presentation incorporating verbal and nonverbal techniques." },
      { id: "MGT_361_SLO5", number: 5, text: "Analyze a failed sales scenario, diagnose the breakdown, and recommend corrective actions." }
    ]
  },
  "MGT381": {
    code: "MGT 381", title: "Organizational Behavior", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "MGT_381_SLO1", number: 1, text: "Analyze an organization’s culture using a recognized diagnostic framework." },
      { id: "MGT_381_SLO2", number: 2, text: "Explain how individual behavior, group dynamics, and organizational structure interact." },
      { id: "MGT_381_SLO3", number: 3, text: "Evaluate factors that foster or inhibit organizational change and recommend strategies." },
      { id: "MGT_381_SLO4", number: 4, text: "Assess team composition and function using established models of team development." },
      { id: "MGT_381_SLO5", number: 5, text: "Diagnose a case study of organizational dysfunction and propose evidence-based interventions." }
    ]
  },
  "ACCT310": {
    code: "ACCT 310", title: "Introduction to Finance", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "ACCT_310_SLO1", number: 1, text: "Define and apply time value of money concepts to business decisions." },
      { id: "ACCT_310_SLO2", number: 2, text: "Analyze financial statements using ratio analysis to assess performance." },
      { id: "ACCT_310_SLO3", number: 3, text: "Evaluate a capital investment decision using NPV and IRR methods." },
      { id: "ACCT_310_SLO4", number: 4, text: "Explain the relationship between risk and return in investment scenarios." },
      { id: "ACCT_310_SLO5", number: 5, text: "Integrate biblical principles of stewardship into a financial plan." }
    ]
  },
  "MKT361": {
    code: "MKT 361", title: "Marketing", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "MKT_361_SLO1", number: 1, text: "Identify and segment a target market using demographic and psychographic data." },
      { id: "MKT_361_SLO2", number: 2, text: "Develop a marketing mix strategy for a product or service." },
      { id: "MKT_361_SLO3", number: 3, text: "Analyze consumer behavior factors that influence purchasing decisions." },
      { id: "MKT_361_SLO4", number: 4, text: "Evaluate the effectiveness of a marketing campaign using defined metrics." },
      { id: "MKT_361_SLO5", number: 5, text: "Create a written marketing plan integrating research, analysis, and positioning." }
    ]
  },
  "MGT371": {
    code: "MGT 371", title: "Managing Yourself, Managing Others", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "MGT_371_SLO1", number: 1, text: "Assess personal management style using a validated self-assessment instrument." },
      { id: "MGT_371_SLO2", number: 2, text: "Apply motivation theories to design strategies for employee engagement." },
      { id: "MGT_371_SLO3", number: 3, text: "Analyze generational and gender dynamics and recommend inclusive management approaches." },
      { id: "MGT_371_SLO4", number: 4, text: "Demonstrate effective conflict resolution techniques in a simulated scenario." },
      { id: "MGT_371_SLO5", number: 5, text: "Develop a personal leadership development plan with specific goals and accountability." }
    ]
  },
  "BUSPS450": {
    code: "BUS/PS 450", title: "Business Law", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "BUS_PS_450_SLO1", number: 1, text: "Identify the major areas of legal liability facing businesses and explain mitigation strategies." },
      { id: "BUS_PS_450_SLO2", number: 2, text: "Analyze a contract scenario to determine whether essential elements are present." },
      { id: "BUS_PS_450_SLO3", number: 3, text: "Compare business formation structures and evaluate legal and tax implications." },
      { id: "BUS_PS_450_SLO4", number: 4, text: "Explain employer obligations under employment law." },
      { id: "BUS_PS_450_SLO5", number: 5, text: "Evaluate a business dispute and recommend appropriate legal remedies." }
    ]
  },
  "BUS301": {
    code: "BUS 301", title: "Business as Mission", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "BUS_301_SLO1", number: 1, text: "Articulate the theological foundations for Business as Mission as a global engagement strategy." },
      { id: "BUS_301_SLO2", number: 2, text: "Evaluate case studies of kingdom-strategic business ventures." },
      { id: "BUS_301_SLO3", number: 3, text: "Design a conceptual BAM venture integrating profitability and gospel witness." },
      { id: "BUS_301_SLO4", number: 4, text: "Analyze ethical challenges of operating a mission-driven business cross-culturally." },
      { id: "BUS_301_SLO5", number: 5, text: "Present a BAM proposal addressing market viability, social impact, and formation outcomes." }
    ]
  },
  "CT403": {
    code: "CT 403", title: "Biblical Ethics", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "CT_403_SLO1", number: 1, text: "Explain how a biblical worldview provides the foundation for ethical decision-making." },
      { id: "CT_403_SLO2", number: 2, text: "Compare biblical ethics with at least two secular ethical systems." },
      { id: "CT_403_SLO3", number: 3, text: "Apply a biblical ethical framework to analyze a contemporary moral dilemma." },
      { id: "CT_403_SLO4", number: 4, text: "Assess the ethical implications of a business decision using scriptural principles." },
      { id: "CT_403_SLO5", number: 5, text: "Construct an ethical position paper integrating biblical, philosophical, and empirical evidence." }
    ]
  },
  "LD471": {
    code: "LD 471", title: "Leadership: Theory and Practice", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "LD_471_SLO1", number: 1, text: "Compare and evaluate at least five major leadership theories and their biblical parallels." },
      { id: "LD_471_SLO2", number: 2, text: "Analyze a leadership case study using a theoretical framework." },
      { id: "LD_471_SLO3", number: 3, text: "Develop a written analysis of personal leadership style informed by self-assessment." },
      { id: "LD_471_SLO4", number: 4, text: "Evaluate the effectiveness of a leader using established leadership criteria." },
      { id: "LD_471_SLO5", number: 5, text: "Synthesize biblical principles with contemporary theory to propose a leadership model." }
    ]
  },
  "MGT441": {
    code: "MGT 441", title: "Principles and Issues in Business Risk", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "MGT_441_SLO1", number: 1, text: "Identify and categorize the major types of business risk." },
      { id: "MGT_441_SLO2", number: 2, text: "Evaluate insurance and indemnification options and recommend risk transfer strategies." },
      { id: "MGT_441_SLO3", number: 3, text: "Analyze the tension between risk and innovation in a business case." },
      { id: "MGT_441_SLO4", number: 4, text: "Assess corporate finance decisions for risk implications." },
      { id: "MGT_441_SLO5", number: 5, text: "Develop a risk management plan integrating biblical principles of stewardship." }
    ]
  },
  "MGT489": {
    code: "MGT 489", title: "Business Administration Capstone", credits: 3,
    program: "bsba", category: "core",
    slos: [
      { id: "MGT_489_SLO1", number: 1, text: "Synthesize key concepts from general education, biblical studies, and business into an integrated paper." },
      { id: "MGT_489_SLO2", number: 2, text: "Demonstrate ability to connect biblical worldview with business principles in a coherent argument." },
      { id: "MGT_489_SLO3", number: 3, text: "Present a professional portfolio documenting growth and competency attainment." },
      { id: "MGT_489_SLO4", number: 4, text: "Analyze a real-world business challenge and propose a solution grounded in theory and faith." },
      { id: "MGT_489_SLO5", number: 5, text: "Defend capstone conclusions demonstrating communication competency and analytical depth." }
    ]
  },
  "OL500": {
    code: "OL 500", title: "Critical Thinking", credits: 3,
    program: "maol", category: "core",
    slos: [
      { id: "OL_500_SLO1", number: 1, text: "Evaluate the credibility and bias of multiple information sources using established criteria." },
      { id: "OL_500_SLO2", number: 2, text: "Construct a structured analytical framework for a complex organizational problem." },
      { id: "OL_500_SLO3", number: 3, text: "Distinguish between correlation and causation and identify logical fallacies." },
      { id: "OL_500_SLO4", number: 4, text: "Synthesize information from competing perspectives to formulate a well-reasoned position." },
      { id: "OL_500_SLO5", number: 5, text: "Apply critical thinking methods to a real-world organizational scenario in a graduate-level analysis." }
    ]
  },
  "OL501": {
    code: "OL 501", title: "Biblical Principles for Global Leadership", credits: 3,
    program: "maol", category: "core",
    slos: [
      { id: "OL_501_SLO1", number: 1, text: "Analyze biblical texts addressing leadership across cultural boundaries." },
      { id: "OL_501_SLO2", number: 2, text: "Evaluate qualities of effective Christian leadership from Scripture and scholarly literature." },
      { id: "OL_501_SLO3", number: 3, text: "Develop a personal philosophy of intercultural leadership grounded in biblical principles." },
      { id: "OL_501_SLO4", number: 4, text: "Assess ethical tensions in cross-cultural leadership and propose biblically-grounded resolutions." },
      { id: "OL_501_SLO5", number: 5, text: "Compare biblical leadership models with secular global leadership frameworks." }
    ]
  },
  "OL510": {
    code: "OL 510", title: "Ethical Leadership in Public Life", credits: 3,
    program: "maol", category: "core",
    slos: [
      { id: "OL_510_SLO1", number: 1, text: "Trace the historical development of ethical thought from ancient to modern systems." },
      { id: "OL_510_SLO2", number: 2, text: "Compare and evaluate at least four ethical frameworks applied to organizational leadership." },
      { id: "OL_510_SLO3", number: 3, text: "Analyze a contemporary ethical dilemma using multiple ethical frameworks." },
      { id: "OL_510_SLO4", number: 4, text: "Construct a personal leadership ethic integrating biblical convictions with philosophical reasoning." },
      { id: "OL_510_SLO5", number: 5, text: "Assess the ethical dimensions of a public leadership failure and propose preventive structures." }
    ]
  },
  "OL530": {
    code: "OL 530", title: "Organizational Culture", credits: 3,
    program: "maol", category: "core",
    slos: [
      { id: "OL_530_SLO1", number: 1, text: "Define organizational culture using at least two established theoretical models." },
      { id: "OL_530_SLO2", number: 2, text: "Diagnose an organization’s culture using qualitative and quantitative methods." },
      { id: "OL_530_SLO3", number: 3, text: "Analyze how leadership style and communication patterns shape culture." },
      { id: "OL_530_SLO4", number: 4, text: "Evaluate alignment between stated values and observable cultural artifacts." },
      { id: "OL_530_SLO5", number: 5, text: "Design a culture improvement initiative based on diagnostic findings." }
    ]
  },
  "OL540": {
    code: "OL 540", title: "Leading Through Change", credits: 3,
    program: "maol", category: "core",
    slos: [
      { id: "OL_540_SLO1", number: 1, text: "Analyze the drivers and stages of organizational change using established models." },
      { id: "OL_540_SLO2", number: 2, text: "Evaluate sources of resistance and design strategies to address them." },
      { id: "OL_540_SLO3", number: 3, text: "Develop a change management plan with communication and implementation milestones." },
      { id: "OL_540_SLO4", number: 4, text: "Assess the leader’s role in managing criticism during organizational transitions." },
      { id: "OL_540_SLO5", number: 5, text: "Synthesize biblical principles with change management theory for a faith-informed approach." }
    ]
  },
  "OL550": {
    code: "OL 550", title: "Leading in a National Context", credits: 3,
    program: "maol", category: "core",
    slos: [
      { id: "OL_550_SLO1", number: 1, text: "Analyze ethical dilemmas and competitive forces facing national-scale organizations." },
      { id: "OL_550_SLO2", number: 2, text: "Evaluate how political, regulatory, and market dynamics affect organizational strategy." },
      { id: "OL_550_SLO3", number: 3, text: "Assess guest speaker leadership practices against established frameworks." },
      { id: "OL_550_SLO4", number: 4, text: "Compare leadership challenges in national business versus ministry contexts." },
      { id: "OL_550_SLO5", number: 5, text: "Synthesize seminar insights into a reflective paper on personal leadership development." }
    ]
  },
  "OL560": {
    code: "OL 560", title: "Organizational Communication and Conflict Management", credits: 3,
    program: "maol", category: "core",
    slos: [
      { id: "OL_560_SLO1", number: 1, text: "Assess personal communication style and its impact on team dynamics." },
      { id: "OL_560_SLO2", number: 2, text: "Design a communication strategy for articulating organizational vision." },
      { id: "OL_560_SLO3", number: 3, text: "Analyze sources of organizational conflict and apply resolution frameworks." },
      { id: "OL_560_SLO4", number: 4, text: "Evaluate team dynamics and recommend interventions for building stronger teams." },
      { id: "OL_560_SLO5", number: 5, text: "Demonstrate advanced communication skills in a simulated leadership scenario." }
    ]
  },
  "OL565": {
    code: "OL 565", title: "Business Risk Management", credits: 3,
    program: "maol", category: "core",
    slos: [
      { id: "OL_565_SLO1", number: 1, text: "Identify and categorize the major risk domains facing contemporary organizations." },
      { id: "OL_565_SLO2", number: 2, text: "Evaluate risk transfer mechanisms including insurance and indemnifications." },
      { id: "OL_565_SLO3", number: 3, text: "Analyze the tension between risk mitigation and innovation." },
      { id: "OL_565_SLO4", number: 4, text: "Assess corporate finance decisions for risk implications using biblical stewardship principles." },
      { id: "OL_565_SLO5", number: 5, text: "Develop a comprehensive risk management framework for an organization." }
    ]
  },
  "OL570": {
    code: "OL 570", title: "Financial Statement Analysis", credits: 3,
    program: "maol", category: "core",
    slos: [
      { id: "OL_570_SLO1", number: 1, text: "Interpret the three primary financial statements and explain their interrelationships." },
      { id: "OL_570_SLO2", number: 2, text: "Conduct ratio analysis to evaluate liquidity, profitability, solvency, and efficiency." },
      { id: "OL_570_SLO3", number: 3, text: "Analyze budgeting and forecasting methods for organizational planning." },
      { id: "OL_570_SLO4", number: 4, text: "Evaluate a capital structure decision and its implications for risk and return." },
      { id: "OL_570_SLO5", number: 5, text: "Prepare a written financial analysis with strategic recommendations." }
    ]
  },
  "OL575": {
    code: "OL 575", title: "Strategic Planning", credits: 3,
    program: "maol", category: "core",
    slos: [
      { id: "OL_575_SLO1", number: 1, text: "Analyze competitive position using established strategic frameworks." },
      { id: "OL_575_SLO2", number: 2, text: "Design a strategic plan integrating mission, analysis, positioning, and implementation." },
      { id: "OL_575_SLO3", number: 3, text: "Evaluate real-world strategic decisions through case study analysis." },
      { id: "OL_575_SLO4", number: 4, text: "Assess alignment between strategy, resource allocation, culture, and execution." },
      { id: "OL_575_SLO5", number: 5, text: "Present a strategic recommendation with supporting analysis and implementation roadmap." }
    ]
  },
  "OL590": {
    code: "OL 590", title: "Dynamics of Leading in an International Context", credits: 3,
    program: "maol", category: "core",
    slos: [
      { id: "OL_590_SLO1", number: 1, text: "Analyze cultural, legal, and political dynamics shaping international leadership." },
      { id: "OL_590_SLO2", number: 2, text: "Evaluate strategies for managing global operations with ethical considerations." },
      { id: "OL_590_SLO3", number: 3, text: "Assess international leaders’ practices against scholarly frameworks." },
      { id: "OL_590_SLO4", number: 4, text: "Compare leadership challenges across national and cultural contexts." },
      { id: "OL_590_SLO5", number: 5, text: "Produce a reflective analysis connecting international observations to personal philosophy." }
    ]
  },
  "OL599": {
    code: "OL 599", title: "Capstone Project", credits: 3,
    program: "maol", category: "core",
    slos: [
      { id: "OL_599_SLO1", number: 1, text: "Identify and define a significant organizational opportunity or problem." },
      { id: "OL_599_SLO2", number: 2, text: "Design a research-informed intervention integrating leadership theory and biblical principles." },
      { id: "OL_599_SLO3", number: 3, text: "Conduct analysis using appropriate qualitative or quantitative methods." },
      { id: "OL_599_SLO4", number: 4, text: "Present findings in a graduate-level written document demonstrating scholarly rigor." },
      { id: "OL_599_SLO5", number: 5, text: "Defend the capstone proposal in an oral presentation demonstrating program mastery." }
    ]
  },
  "ACCT302": {
    code: "ACCT 302", title: "Principles of Accounting II", credits: 3,
    program: "bsba", category: "accounting_minor",
    slos: [
      { id: "ACCT_302_SLO1", number: 1, text: "Process payroll transactions including gross pay, withholdings, and employer taxes." },
      { id: "ACCT_302_SLO2", number: 2, text: "Record adjusting entries for accruals, deferrals, and depreciation." },
      { id: "ACCT_302_SLO3", number: 3, text: "Prepare closing entries and a post-closing trial balance." },
      { id: "ACCT_302_SLO4", number: 4, text: "Apply GAAP standards to receivables, payables, inventory, and PP&E." },
      { id: "ACCT_302_SLO5", number: 5, text: "Prepare an income statement, balance sheet, and statement of owner’s equity." }
    ]
  },
  "ACCT303": {
    code: "ACCT 303", title: "Principles of Accounting III", credits: 3,
    program: "bsba", category: "accounting_minor",
    slos: [
      { id: "ACCT_303_SLO1", number: 1, text: "Account for partnership formation, income allocation, and dissolution." },
      { id: "ACCT_303_SLO2", number: 2, text: "Record corporate equity transactions including stock issuance and dividends." },
      { id: "ACCT_303_SLO3", number: 3, text: "Prepare a statement of cash flows using direct and indirect methods." },
      { id: "ACCT_303_SLO4", number: 4, text: "Analyze financial statements of partnerships, corporations, and nonprofits." },
      { id: "ACCT_303_SLO5", number: 5, text: "Explain the accounting treatment for bonds payable including amortization." }
    ]
  },
  "ACCT311313": {
    code: "ACCT 311/313", title: "Accounting for Managers / Nonprofit Financial Mgmt", credits: 3,
    program: "bsba", category: "accounting_minor",
    slos: [
      { id: "ACCT_311_313_SLO1", number: 1, text: "Interpret financial statements from a managerial perspective." },
      { id: "ACCT_311_313_SLO2", number: 2, text: "Explain internal controls and identify common control weaknesses." },
      { id: "ACCT_311_313_SLO3", number: 3, text: "Distinguish between historical accounting data and financial planning projections." },
      { id: "ACCT_311_313_SLO4", number: 4, text: "Evaluate organizational financial health using key financial indicators." },
      { id: "ACCT_311_313_SLO5", number: 5, text: "Prepare a basic financial plan integrating budget data with strategic objectives." }
    ]
  },
  "ACCT321": {
    code: "ACCT 321", title: "Intermediate Accounting I", credits: 3,
    program: "bsba", category: "accounting_minor",
    slos: [
      { id: "ACCT_321_SLO1", number: 1, text: "Apply GAAP to complex transactions involving receivables, inventory, and long-lived assets." },
      { id: "ACCT_321_SLO2", number: 2, text: "Prepare a classified balance sheet with proper disclosure." },
      { id: "ACCT_321_SLO3", number: 3, text: "Calculate and interpret time value of money concepts in accounting." },
      { id: "ACCT_321_SLO4", number: 4, text: "Analyze the impact of alternative accounting methods on financial statements." },
      { id: "ACCT_321_SLO5", number: 5, text: "Explain the conceptual framework underlying GAAP." }
    ]
  },
  "ACCT322": {
    code: "ACCT 322", title: "Intermediate Accounting II", credits: 3,
    program: "bsba", category: "accounting_minor",
    slos: [
      { id: "ACCT_322_SLO1", number: 1, text: "Account for stockholders’ equity including stock options and comprehensive income." },
      { id: "ACCT_322_SLO2", number: 2, text: "Prepare a complete statement of cash flows with proper classification." },
      { id: "ACCT_322_SLO3", number: 3, text: "Apply revenue recognition standards under ASC 606." },
      { id: "ACCT_322_SLO4", number: 4, text: "Analyze earnings per share calculations." },
      { id: "ACCT_322_SLO5", number: 5, text: "Evaluate the impact of accounting policy choices on reported income." }
    ]
  },
  "ACCT323": {
    code: "ACCT 323", title: "Cost Accounting", credits: 3,
    program: "bsba", category: "accounting_minor",
    slos: [
      { id: "ACCT_323_SLO1", number: 1, text: "Calculate product costs using job-order and process costing systems." },
      { id: "ACCT_323_SLO2", number: 2, text: "Allocate overhead using traditional and activity-based costing methods." },
      { id: "ACCT_323_SLO3", number: 3, text: "Analyze cost-volume-profit relationships for break-even and target profit." },
      { id: "ACCT_323_SLO4", number: 4, text: "Prepare variance analyses for materials, labor, and overhead." },
      { id: "ACCT_323_SLO5", number: 5, text: "Evaluate variable versus absorption costing impact on reported income." }
    ]
  },
  "ACCT331": {
    code: "ACCT 331", title: "Accounting with QuickBooks Online", credits: 3,
    program: "bsba", category: "accounting_minor",
    slos: [
      { id: "ACCT_331_SLO1", number: 1, text: "Set up a company file in QuickBooks including chart of accounts." },
      { id: "ACCT_331_SLO2", number: 2, text: "Record daily business transactions including invoicing and reconciliation." },
      { id: "ACCT_331_SLO3", number: 3, text: "Generate and interpret financial reports from QuickBooks data." },
      { id: "ACCT_331_SLO4", number: 4, text: "Process payroll transactions and generate payroll tax reports." },
      { id: "ACCT_331_SLO5", number: 5, text: "Identify and correct common data entry errors to maintain data integrity." }
    ]
  },
  "ACCT332": {
    code: "ACCT 332", title: "Payroll Accounting", credits: 3,
    program: "bsba", category: "accounting_minor",
    slos: [
      { id: "ACCT_332_SLO1", number: 1, text: "Compute gross pay, withholdings, and net pay under various structures." },
      { id: "ACCT_332_SLO2", number: 2, text: "Calculate employer payroll tax obligations including FICA, FUTA, and SUTA." },
      { id: "ACCT_332_SLO3", number: 3, text: "Record payroll journal entries and maintain a payroll register." },
      { id: "ACCT_332_SLO4", number: 4, text: "Prepare federal and state payroll tax forms including 941, 940, and W-2." },
      { id: "ACCT_332_SLO5", number: 5, text: "Explain compliance obligations under the Fair Labor Standards Act." }
    ]
  },
  "ACCT333": {
    code: "ACCT 333", title: "State Tax Issues", credits: 3,
    program: "bsba", category: "accounting_minor",
    slos: [
      { id: "ACCT_333_SLO1", number: 1, text: "Identify requirements for opening and registering a business in Tennessee." },
      { id: "ACCT_333_SLO2", number: 2, text: "Explain Tennessee state tax obligations including franchise, excise, and sales tax." },
      { id: "ACCT_333_SLO3", number: 3, text: "Prepare basic state tax compliance filings for a Tennessee business." },
      { id: "ACCT_333_SLO4", number: 4, text: "Analyze tax implications of operating as a nonprofit in Tennessee." },
      { id: "ACCT_333_SLO5", number: 5, text: "Compare Tennessee’s tax environment with neighboring states." }
    ]
  },
  "ACCT341": {
    code: "ACCT 341", title: "Individual Tax", credits: 3,
    program: "bsba", category: "accounting_minor",
    slos: [
      { id: "ACCT_341_SLO1", number: 1, text: "Determine filing status, exemptions, and gross income for federal returns." },
      { id: "ACCT_341_SLO2", number: 2, text: "Calculate adjustments, deductions, and credits to arrive at tax liability." },
      { id: "ACCT_341_SLO3", number: 3, text: "Prepare a complete federal individual tax return with supporting schedules." },
      { id: "ACCT_341_SLO4", number: 4, text: "Analyze tax planning strategies for individuals and sole proprietors." },
      { id: "ACCT_341_SLO5", number: 5, text: "Explain tax treatment of capital gains, retirement distributions, and self-employment income." }
    ]
  },
  "ACCT342": {
    code: "ACCT 342", title: "Business Tax", credits: 3,
    program: "bsba", category: "accounting_minor",
    slos: [
      { id: "ACCT_342_SLO1", number: 1, text: "Explain federal tax treatment of partnership formation and distributions." },
      { id: "ACCT_342_SLO2", number: 2, text: "Analyze tax implications of corporate formation and shareholder distributions." },
      { id: "ACCT_342_SLO3", number: 3, text: "Prepare basic federal tax returns for partnerships and corporations." },
      { id: "ACCT_342_SLO4", number: 4, text: "Evaluate tax consequences of entity disposition including liquidation and sale." },
      { id: "ACCT_342_SLO5", number: 5, text: "Compare tax characteristics of different entities and recommend optimal structure." }
    ]
  },
  "ACCT343": {
    code: "ACCT 343", title: "Managerial Accounting", credits: 3,
    program: "bsba", category: "accounting_minor",
    slos: [
      { id: "ACCT_343_SLO1", number: 1, text: "Prepare internal management reports for operational and strategic decisions." },
      { id: "ACCT_343_SLO2", number: 2, text: "Apply capital budgeting techniques (NPV, IRR, payback) to evaluate investments." },
      { id: "ACCT_343_SLO3", number: 3, text: "Analyze cost allocation methods and their impact on performance measurement." },
      { id: "ACCT_343_SLO4", number: 4, text: "Develop a master budget including operating and financial budgets." },
      { id: "ACCT_343_SLO5", number: 5, text: "Assess control measures including standard costing and responsibility accounting." }
    ]
  },
  "ACCT401": {
    code: "ACCT 401", title: "Auditing", credits: 3,
    program: "bsba", category: "accounting_minor",
    slos: [
      { id: "ACCT_401_SLO1", number: 1, text: "Explain the objectives, standards, and process of a financial statement audit." },
      { id: "ACCT_401_SLO2", number: 2, text: "Design audit sampling procedures for testing balances and controls." },
      { id: "ACCT_401_SLO3", number: 3, text: "Evaluate internal control systems and identify material weaknesses." },
      { id: "ACCT_401_SLO4", number: 4, text: "Apply AICPA ethical standards to auditor independence scenarios." },
      { id: "ACCT_401_SLO5", number: 5, text: "Prepare audit documentation for a selected financial statement area." }
    ]
  },
  "ACCT403": {
    code: "ACCT 403", title: "Government and Nonprofit Accounting", credits: 3,
    program: "bsba", category: "accounting_minor",
    slos: [
      { id: "ACCT_403_SLO1", number: 1, text: "Explain differences between governmental, nonprofit, and for-profit accounting." },
      { id: "ACCT_403_SLO2", number: 2, text: "Apply GASB standards to governmental fund accounting transactions." },
      { id: "ACCT_403_SLO3", number: 3, text: "Prepare financial statements for a nonprofit organization." },
      { id: "ACCT_403_SLO4", number: 4, text: "Analyze the role of budgetary systems in governmental and nonprofit planning." },
      { id: "ACCT_403_SLO5", number: 5, text: "Evaluate financial health of a governmental or nonprofit entity." }
    ]
  },
  "ACCT423": {
    code: "ACCT 423", title: "Forensic Accounting", credits: 3,
    program: "bsba", category: "accounting_minor",
    slos: [
      { id: "ACCT_423_SLO1", number: 1, text: "Identify and classify major types of financial statement and occupational fraud." },
      { id: "ACCT_423_SLO2", number: 2, text: "Apply forensic techniques to detect anomalies in financial data." },
      { id: "ACCT_423_SLO3", number: 3, text: "Analyze a case of financial fraud and trace the concealment method." },
      { id: "ACCT_423_SLO4", number: 4, text: "Explain the legal framework for fraud investigation and expert testimony." },
      { id: "ACCT_423_SLO5", number: 5, text: "Evaluate an organization’s fraud prevention program and recommend improvements." }
    ]
  },
  "ACCT489": {
    code: "ACCT 489", title: "Accounting Capstone", credits: 3,
    program: "bsba", category: "accounting_minor",
    slos: [
      { id: "ACCT_489_SLO1", number: 1, text: "Demonstrate mastery across the four CPA exam domains." },
      { id: "ACCT_489_SLO2", number: 2, text: "Apply auditing and accounting standards to a comprehensive case." },
      { id: "ACCT_489_SLO3", number: 3, text: "Analyze a complex scenario integrating tax, reporting, and regulatory compliance." },
      { id: "ACCT_489_SLO4", number: 4, text: "Explain UCC and IRC provisions relevant to professional accounting." },
      { id: "ACCT_489_SLO5", number: 5, text: "Present a capstone project demonstrating integrated accounting knowledge." }
    ]
  },
  "MGT302": {
    code: "MGT 302", title: "Essentials of Nonprofit Management", credits: 3,
    program: "bsba", category: "elective",
    slos: [
      { id: "MGT_302_SLO1", number: 1, text: "Apply the five management functions to nonprofit organizational scenarios." },
      { id: "MGT_302_SLO2", number: 2, text: "Compare governance structures of nonprofit and for-profit entities." },
      { id: "MGT_302_SLO3", number: 3, text: "Develop an operational plan for a nonprofit with mission alignment and metrics." },
      { id: "MGT_302_SLO4", number: 4, text: "Evaluate legal and regulatory requirements unique to 501(c)(3) organizations." },
      { id: "MGT_302_SLO5", number: 5, text: "Assess nonprofit effectiveness using established frameworks and stewardship principles." }
    ]
  },
  "BUS421": {
    code: "BUS 421", title: "Fundamentals of Funds Development I", credits: 3,
    program: "bsba", category: "nonprofit_minor",
    slos: [
      { id: "BUS_421_SLO1", number: 1, text: "Explain principles of donor cultivation, solicitation, and stewardship." },
      { id: "BUS_421_SLO2", number: 2, text: "Develop an annual fund strategy including multiple giving channels." },
      { id: "BUS_421_SLO3", number: 3, text: "Design a major gifts cultivation plan with donor segmentation." },
      { id: "BUS_421_SLO4", number: 4, text: "Plan a special event fundraiser with goals, budget, and evaluation metrics." },
      { id: "BUS_421_SLO5", number: 5, text: "Create a donor database structure with best practices for tracking." }
    ]
  },
  "BUS422": {
    code: "BUS 422", title: "Fundamentals of Funds Development II", credits: 3,
    program: "bsba", category: "nonprofit_minor",
    slos: [
      { id: "BUS_422_SLO1", number: 1, text: "Write a complete grant proposal with needs statement, design, and budget." },
      { id: "BUS_422_SLO2", number: 2, text: "Design a capital campaign plan with phases, case statement, and gift table." },
      { id: "BUS_422_SLO3", number: 3, text: "Explain planned giving instruments and their application in donor strategy." },
      { id: "BUS_422_SLO4", number: 4, text: "Evaluate fundraising program effectiveness using industry benchmarks." },
      { id: "BUS_422_SLO5", number: 5, text: "Develop a comprehensive development plan integrating all fundraising channels." }
    ]
  },
  "BUS431": {
    code: "BUS 431", title: "Strategic Communications in Nonprofit Organizations", credits: 3,
    program: "bsba", category: "nonprofit_minor",
    slos: [
      { id: "BUS_431_SLO1", number: 1, text: "Develop a communications plan aligned with nonprofit mission and stakeholders." },
      { id: "BUS_431_SLO2", number: 2, text: "Create written communications appropriate to multiple nonprofit audiences." },
      { id: "BUS_431_SLO3", number: 3, text: "Evaluate communication channel effectiveness and recommend a media mix." },
      { id: "BUS_431_SLO4", number: 4, text: "Design a stakeholder engagement strategy building shared vision." },
      { id: "BUS_431_SLO5", number: 5, text: "Analyze a nonprofit communication failure and recommend corrective strategies." }
    ]
  },
  "BUS441": {
    code: "BUS 441", title: "Strategic Planning for Nonprofit Organizations", credits: 3,
    program: "bsba", category: "nonprofit_minor",
    slos: [
      { id: "BUS_441_SLO1", number: 1, text: "Develop a strategic plan for a nonprofit including mission, values, and goals." },
      { id: "BUS_441_SLO2", number: 2, text: "Conduct an environmental scan and stakeholder analysis." },
      { id: "BUS_441_SLO3", number: 3, text: "Align human and financial capital with strategic priorities." },
      { id: "BUS_441_SLO4", number: 4, text: "Design an implementation timeline with milestones and indicators." },
      { id: "BUS_441_SLO5", number: 5, text: "Evaluate an existing nonprofit strategic plan for coherence and feasibility." }
    ]
  },
  "BUS489": {
    code: "BUS 489", title: "Nonprofit Managerial Leadership Capstone", credits: 3,
    program: "bsba", category: "nonprofit_minor",
    slos: [
      { id: "BUS_489_SLO1", number: 1, text: "Synthesize knowledge from nonprofit management, fundraising, and leadership." },
      { id: "BUS_489_SLO2", number: 2, text: "Analyze a real-world nonprofit challenge and propose a viable solution." },
      { id: "BUS_489_SLO3", number: 3, text: "Connect biblical principles of service and stewardship with nonprofit practice." },
      { id: "BUS_489_SLO4", number: 4, text: "Present a professional portfolio documenting competency attainment." },
      { id: "BUS_489_SLO5", number: 5, text: "Defend capstone conclusions in written and oral presentation." }
    ]
  },
  "MGT411": {
    code: "MGT 411", title: "Teams and the Work Process", credits: 3,
    program: "bsba", category: "elective",
    slos: [
      { id: "MGT_411_SLO1", number: 1, text: "Analyze how team composition and process affect work output quality." },
      { id: "MGT_411_SLO2", number: 2, text: "Design a team-based work plan aligning tasks with strengths and objectives." },
      { id: "MGT_411_SLO3", number: 3, text: "Evaluate team performance against defined quality standards." },
      { id: "MGT_411_SLO4", number: 4, text: "Apply strategic plan implementation principles to organize work processes." },
      { id: "MGT_411_SLO5", number: 5, text: "Assess factors contributing to team dysfunction and recommend interventions." }
    ]
  },
  "MGT431": {
    code: "MGT 431", title: "Ethical Decisions in the Workplace", credits: 3,
    program: "bsba", category: "elective",
    slos: [
      { id: "MGT_431_SLO1", number: 1, text: "Analyze workplace ethical dilemmas using biblical and secular frameworks." },
      { id: "MGT_431_SLO2", number: 2, text: "Compare decision-making with and without presupposition of transcendent truth." },
      { id: "MGT_431_SLO3", number: 3, text: "Evaluate case studies of corporate ethical failures at key decision points." },
      { id: "MGT_431_SLO4", number: 4, text: "Construct a personal ethical decision-making framework for professional contexts." },
      { id: "MGT_431_SLO5", number: 5, text: "Defend an ethical position using Scripture, ethical theory, and case analysis." }
    ]
  },
  "MGT437": {
    code: "MGT 437", title: "Management of Human Resources", credits: 3,
    program: "bsba", category: "elective",
    slos: [
      { id: "MGT_437_SLO1", number: 1, text: "Explain the HR management cycle from recruitment through separation." },
      { id: "MGT_437_SLO2", number: 2, text: "Design a job description, recruitment strategy, and selection process." },
      { id: "MGT_437_SLO3", number: 3, text: "Evaluate compensation and benefits structures for effectiveness." },
      { id: "MGT_437_SLO4", number: 4, text: "Analyze legal requirements in employment including anti-discrimination laws." },
      { id: "MGT_437_SLO5", number: 5, text: "Develop an employee development and performance management plan." }
    ]
  },
  "BUS311": {
    code: "BUS 311", title: "Introduction to Statistical Reasoning", credits: 3,
    program: "bsba", category: "elective",
    slos: [
      { id: "BUS_311_SLO1", number: 1, text: "Interpret descriptive statistics and explain their application to business data." },
      { id: "BUS_311_SLO2", number: 2, text: "Distinguish between appropriate and inappropriate uses of statistical data." },
      { id: "BUS_311_SLO3", number: 3, text: "Apply basic inferential statistical methods to draw conclusions from samples." },
      { id: "BUS_311_SLO4", number: 4, text: "Evaluate the validity of statistical claims in published reports." },
      { id: "BUS_311_SLO5", number: 5, text: "Present statistical findings in clear, non-technical language." }
    ]
  },
  "BUS401": {
    code: "BUS 401", title: "Internship", credits: 3,
    program: "bsba", category: "nonprofit_minor",
    slos: [
      { id: "BUS_401_SLO1", number: 1, text: "Complete 200 hours of supervised professional experience." },
      { id: "BUS_401_SLO2", number: 2, text: "Apply classroom knowledge in a professional setting with documented examples." },
      { id: "BUS_401_SLO3", number: 3, text: "Demonstrate professional workplace behaviors including communication and ethics." },
      { id: "BUS_401_SLO4", number: 4, text: "Prepare a reflective internship report analyzing growth and lessons learned." },
      { id: "BUS_401_SLO5", number: 5, text: "Receive and respond to supervisor feedback demonstrating capacity for development." }
    ]
  },
  "CHAR101": {
    code: "CHAR 101", title: "Application of a Character-Based Mindset to Vocation", credits: 3,
    program: "bsba", category: "character_cert",
    slos: [
      { id: "CHAR_101_SLO1", number: 1, text: "Articulate how Christian identity provides the foundation for entrepreneurial purpose." },
      { id: "CHAR_101_SLO2", number: 2, text: "Identify and apply character-based life filters to entrepreneurial challenges." },
      { id: "CHAR_101_SLO3", number: 3, text: "Evaluate personal motivations for enterprise using biblical criteria." },
      { id: "CHAR_101_SLO4", number: 4, text: "Analyze the relationship between character formation and entrepreneurial effectiveness." },
      { id: "CHAR_101_SLO5", number: 5, text: "Develop a personal mission statement grounded in Christian identity and values." }
    ]
  },
  "CHAR210": {
    code: "CHAR 210", title: "Introduction to Entrepreneurship", credits: 3,
    program: "bsba", category: "character_cert",
    slos: [
      { id: "CHAR_210_SLO1", number: 1, text: "Identify and compare major types of entrepreneurs and their characteristics." },
      { id: "CHAR_210_SLO2", number: 2, text: "Analyze thinking patterns and habits contributing to entrepreneurial success." },
      { id: "CHAR_210_SLO3", number: 3, text: "Evaluate a business idea for feasibility using basic market assessment." },
      { id: "CHAR_210_SLO4", number: 4, text: "Explain the stages of venture development from ideation through launch." },
      { id: "CHAR_210_SLO5", number: 5, text: "Assess personal entrepreneurial readiness using self-assessment tools." }
    ]
  },
  "CHAR120": {
    code: "CHAR 120", title: "Entrepreneurship is a Team Sport", credits: 3,
    program: "bsba", category: "character_cert",
    slos: [
      { id: "CHAR_120_SLO1", number: 1, text: "Explain why human capital is the most valuable entrepreneurial asset." },
      { id: "CHAR_120_SLO2", number: 2, text: "Design an organizational culture strategy fostering innovation and character." },
      { id: "CHAR_120_SLO3", number: 3, text: "Apply human capital assessment tools to evaluate team composition." },
      { id: "CHAR_120_SLO4", number: 4, text: "Analyze the relationship between hiring decisions and organizational performance." },
      { id: "CHAR_120_SLO5", number: 5, text: "Develop a team-building plan aligning roles with strengths and mission." }
    ]
  },
  "CHAR130": {
    code: "CHAR 130", title: "Character-Based Leadership", credits: 3,
    program: "bsba", category: "character_cert",
    slos: [
      { id: "CHAR_130_SLO1", number: 1, text: "Articulate the principles of character-based, bottom-up leadership." },
      { id: "CHAR_130_SLO2", number: 2, text: "Apply character-based life filters to leadership scenarios." },
      { id: "CHAR_130_SLO3", number: 3, text: "Evaluate personal leadership style using character-based criteria." },
      { id: "CHAR_130_SLO4", number: 4, text: "Analyze case studies of leadership failure linked to character deficits." },
      { id: "CHAR_130_SLO5", number: 5, text: "Develop a personal leadership plan centered on character formation." }
    ]
  },
  "CHAR110": {
    code: "CHAR 110", title: "Storytelling and Persuasion", credits: 3,
    program: "bsba", category: "character_cert",
    slos: [
      { id: "CHAR_110_SLO1", number: 1, text: "Explain principles of effective storytelling for entrepreneurial communication." },
      { id: "CHAR_110_SLO2", number: 2, text: "Construct a compelling narrative for a business idea." },
      { id: "CHAR_110_SLO3", number: 3, text: "Deliver a persuasive presentation using storytelling techniques." },
      { id: "CHAR_110_SLO4", number: 4, text: "Analyze examples of effective and ineffective persuasion in business." },
      { id: "CHAR_110_SLO5", number: 5, text: "Evaluate personal communication strengths and develop an improvement plan." }
    ]
  },
  "CHAR220": {
    code: "CHAR 220", title: "Introduction to Innovation", credits: 3,
    program: "bsba", category: "character_cert",
    slos: [
      { id: "CHAR_220_SLO1", number: 1, text: "Explain the stages of the innovation process from ideation through implementation." },
      { id: "CHAR_220_SLO2", number: 2, text: "Apply at least two ideation frameworks to generate and evaluate ideas." },
      { id: "CHAR_220_SLO3", number: 3, text: "Assess feasibility of an innovative idea using market and financial criteria." },
      { id: "CHAR_220_SLO4", number: 4, text: "Identify decision points for advancing, pivoting, or abandoning an idea." },
      { id: "CHAR_220_SLO5", number: 5, text: "Develop a prototype or minimum viable concept with supporting rationale." }
    ]
  },
  "CHAR230": {
    code: "CHAR 230", title: "Personal Finance and Capital Formation", credits: 3,
    program: "bsba", category: "character_cert",
    slos: [
      { id: "CHAR_230_SLO1", number: 1, text: "Explain major capital sources available to entrepreneurs." },
      { id: "CHAR_230_SLO2", number: 2, text: "Prepare a basic financial projection for a new venture." },
      { id: "CHAR_230_SLO3", number: 3, text: "Analyze financial implications of different capital structures." },
      { id: "CHAR_230_SLO4", number: 4, text: "Conduct an informed conversation with investors using appropriate terminology." },
      { id: "CHAR_230_SLO5", number: 5, text: "Develop a personal financial plan supporting entrepreneurial goals with stewardship principles." }
    ]
  },
  "CHAR240": {
    code: "CHAR 240", title: "Business Law and Corporate Formation", credits: 3,
    program: "bsba", category: "character_cert",
    slos: [
      { id: "CHAR_240_SLO1", number: 1, text: "Identify fundamental legal issues facing entrepreneurs in venture formation." },
      { id: "CHAR_240_SLO2", number: 2, text: "Compare business entity types and recommend appropriate structure." },
      { id: "CHAR_240_SLO3", number: 3, text: "Explain basic intellectual property protections for startup ventures." },
      { id: "CHAR_240_SLO4", number: 4, text: "Analyze employment law impact on business strategy." },
      { id: "CHAR_240_SLO5", number: 5, text: "Develop a legal checklist for launching a new business." }
    ]
  }
};

const ASSESSMENT_INSTRUMENTS = {
  "bsba": {
    "BSBA-PLO1": {
      "courses": [
        "ACCT 301",
        "ACCT 310",
        "MGT 441"
      ],
      "instruments": [
        "Accounting Cycle Project",
        "Ratio Analysis Case",
        "Risk Assessment Report"
      ]
    },
    "BSBA-PLO2": {
      "courses": [
        "MGT 311",
        "ECON 301",
        "MKT 361",
        "MGT 489"
      ],
      "instruments": [
        "Business Plan Project",
        "Economic Analysis Brief",
        "Marketing Plan",
        "Capstone Paper"
      ]
    },
    "BSBA-PLO3": {
      "courses": [
        "MGT 301",
        "MGT 381",
        "MGT 371",
        "LD 471"
      ],
      "instruments": [
        "Org Structure Design",
        "Culture Diagnosis Case",
        "Leadership Dev Plan",
        "Leadership Analysis Paper"
      ]
    },
    "BSBA-PLO4": {
      "courses": [
        "MGT 361",
        "MGT 371",
        "MKT 361",
        "MGT 489"
      ],
      "instruments": [
        "Sales Presentation",
        "Conflict Resolution Sim",
        "Marketing Plan (written)",
        "Capstone Presentation"
      ]
    },
    "BSBA-PLO5": {
      "courses": [
        "BUS/PS 450",
        "CT 403",
        "MGT 441",
        "CT 251"
      ],
      "instruments": [
        "Contract Analysis Case",
        "Ethical Position Paper",
        "Risk Mgmt Plan",
        "Worldview Analysis Essay"
      ]
    },
    "BSBA-PLO6": {
      "courses": [
        "LD 201",
        "CT 251",
        "BUS 301",
        "CT 403",
        "MGT 489"
      ],
      "instruments": [
        "Leadership Philosophy Paper",
        "Worldview Analysis Essay",
        "BAM Proposal",
        "Ethical Position Paper",
        "Capstone Integration"
      ]
    }
  },
  "maol": {
    "MAOL-PLO1": {
      "courses": [
        "OL 510",
        "OL 501"
      ],
      "instruments": [
        "Personal Leadership Ethic Paper",
        "Intercultural Leadership Philosophy"
      ]
    },
    "MAOL-PLO2": {
      "courses": [
        "OL 530",
        "OL 540"
      ],
      "instruments": [
        "Culture Diagnosis & Improvement Project",
        "Change Management Plan"
      ]
    },
    "MAOL-PLO3": {
      "courses": [
        "OL 575",
        "OL 570",
        "OL 565",
        "OL 599"
      ],
      "instruments": [
        "Strategic Plan Project",
        "Financial Analysis Report",
        "Risk Framework",
        "Capstone Project"
      ]
    },
    "MAOL-PLO4": {
      "courses": [
        "OL 560",
        "OL 540"
      ],
      "instruments": [
        "Conflict Resolution Simulation",
        "Change & Criticism Analysis"
      ]
    },
    "MAOL-PLO5": {
      "courses": [
        "OL 590",
        "OL 550",
        "OL 501"
      ],
      "instruments": [
        "International Reflective Analysis",
        "National Context Reflective Paper",
        "Intercultural Philosophy Paper"
      ]
    },
    "MAOL-PLO6": {
      "courses": [
        "OL 500",
        "OL 599"
      ],
      "instruments": [
        "Graduate Analytical Paper",
        "Capstone Written Document & Defense"
      ]
    }
  }
};

const CAPSTONE_RUBRICS = {
  "bsba": {
    "course": "MGT 489",
    "passingThreshold": "Average 3.0, no criterion below 2.0",
    "criteria": [
      {
        "plo": "PLO 1 - Financial Analysis",
        "criterion": "Applies financial analysis to the capstone business challenge",
        "levels": {
          "exemplary": "Integrates sophisticated financial analysis that directly supports the argument with accurate data and clear interpretation.",
          "proficient": "Includes relevant financial analysis that supports the argument. Data is accurate.",
          "developing": "Includes some financial data but analysis is superficial or not clearly connected.",
          "beginning": "Financial analysis is absent, irrelevant, or contains significant errors."
        }
      },
      {
        "plo": "PLO 2 - Strategic Planning",
        "criterion": "Develops a strategic framework for the proposed solution",
        "levels": {
          "exemplary": "Comprehensive strategic framework with market analysis, competitive positioning, implementation milestones, and contingency planning.",
          "proficient": "Clear strategic framework with most key components. Logically sound and mission-aligned.",
          "developing": "Strategic framework present but incomplete or not clearly connected to analysis.",
          "beginning": "No coherent strategic framework. Lacks structure or feasibility analysis."
        }
      },
      {
        "plo": "PLO 3 - Organizational Leadership",
        "criterion": "Demonstrates understanding of organizational dynamics",
        "levels": {
          "exemplary": "Thoroughly addresses culture, stakeholder dynamics, team implications. Sophisticated understanding of implementation.",
          "proficient": "Addresses organizational implications including culture and stakeholder considerations.",
          "developing": "Mentions organizational factors but analysis is thin or disconnected.",
          "beginning": "Organizational dynamics not addressed."
        }
      },
      {
        "plo": "PLO 4 - Business Communication",
        "criterion": "Communicates effectively in written and oral presentation",
        "levels": {
          "exemplary": "Clear, well-organized, persuasive writing. Confident, professional oral presentation. Flawless APA.",
          "proficient": "Clear, organized writing. Professional presentation. Minor format issues.",
          "developing": "Organizational or clarity problems in writing. Presentation lacks confidence.",
          "beginning": "Unclear, disorganized writing. Inadequate presentation."
        }
      },
      {
        "plo": "PLO 5 - Legal & Ethical Reasoning",
        "criterion": "Addresses ethical and/or legal dimensions",
        "levels": {
          "exemplary": "Identifies and analyzes ethical/legal implications using biblical and professional frameworks. Nuanced reasoning.",
          "proficient": "Identifies ethical/legal dimensions and applies appropriate frameworks.",
          "developing": "Mentions ethical/legal considerations but analysis is superficial.",
          "beginning": "Ethical/legal dimensions ignored or addressed only in passing."
        }
      },
      {
        "plo": "PLO 6 - Biblical Integration",
        "criterion": "Integrates biblical worldview into analysis and solution",
        "levels": {
          "exemplary": "Biblical principles woven throughout. Christian values inform purpose, ethics, and stakeholder considerations.",
          "proficient": "Biblical principles clearly present and connected. Integration is genuine.",
          "developing": "Biblical references present but disconnected from business analysis.",
          "beginning": "Biblical integration absent or token Scripture reference only."
        }
      }
    ]
  },
  "maol": {
    "course": "OL 599",
    "passingThreshold": "Average 3.0, no criterion below 2.0",
    "criteria": [
      {
        "plo": "PLO 1 - Ethical Leadership",
        "criterion": "Grounds capstone in ethical leadership framework",
        "levels": {
          "exemplary": "Clear ethical framework integrating biblical, philosophical, and organizational perspectives. Consistently applied.",
          "proficient": "Identifies and applies ethical framework. Biblical and philosophical dimensions present.",
          "developing": "Mentions ethics but no coherent framework. Shallow grounding.",
          "beginning": "Ethical dimensions absent."
        }
      },
      {
        "plo": "PLO 2 - Organizational Diagnosis",
        "criterion": "Demonstrates diagnostic analysis of organizational context",
        "levels": {
          "exemplary": "Uses established diagnostic models to assess culture, stakeholders, and change readiness. Diagnosis informs design.",
          "proficient": "Includes diagnosis using appropriate models. Connects to intervention.",
          "developing": "Context described but not diagnosed using scholarly models.",
          "beginning": "No organizational diagnosis."
        }
      },
      {
        "plo": "PLO 3 - Strategic Vision & Execution",
        "criterion": "Designs strategic intervention with implementation architecture",
        "levels": {
          "exemplary": "Comprehensive research-informed intervention with objectives, phases, resources, metrics, contingencies.",
          "proficient": "Clear intervention with objectives, plan, and metrics.",
          "developing": "Intervention described but lacks specificity.",
          "beginning": "No coherent intervention design."
        }
      },
      {
        "plo": "PLO 4 - Conflict & Negotiation",
        "criterion": "Anticipates resistance, conflict, and stakeholder dynamics",
        "levels": {
          "exemplary": "Identifies resistance sources, applies conflict frameworks, designs mitigation. Nuanced organizational politics.",
          "proficient": "Addresses likely resistance and concerns. Reasonable strategies.",
          "developing": "Acknowledges resistance but no specific analysis or strategies.",
          "beginning": "Resistance and conflict not addressed."
        }
      },
      {
        "plo": "PLO 5 - Cross-Cultural Leadership",
        "criterion": "Demonstrates cultural awareness and adaptability",
        "levels": {
          "exemplary": "Analyzes cultural dimensions and adapts leadership approach. Addresses diversity and global implications.",
          "proficient": "Acknowledges cultural context with appropriate adaptability.",
          "developing": "Cultural context mentioned but not analyzed or integrated.",
          "beginning": "Cultural dimensions absent."
        }
      },
      {
        "plo": "PLO 6 - Scholarly Integration",
        "criterion": "Demonstrates graduate-level research, writing, and defense",
        "levels": {
          "exemplary": "Mastery of scholarly writing: clear thesis, rigorous evidence, proper citation. Confident, responsive defense.",
          "proficient": "Meets graduate standards. Professional defense with solid understanding.",
          "developing": "Significant gaps in scholarly rigor or theoretical integration.",
          "beginning": "Does not meet graduate standards."
        }
      }
    ]
  }
};

const BENCHMARKS = {
  "undergraduate": {
    "percentOfStudents": 70,
    "minimumScore": 70,
    "rationale": "Consistent with institutional grading policy defining C (70-79%) as satisfactory undergraduate performance. Aligns with SACSCOC peer institutions."
  },
  "graduate": {
    "percentOfStudents": 80,
    "minimumScore": 80,
    "rationale": "Reflects 3.0 GPA (B average, 80%) minimum for graduate degree completion. Standard for master's-level programs across SACSCOC institutions."
  }
};
