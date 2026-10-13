/**
 * Central portfolio data — generated from Dhruv Achar's resume (DhruvAchar_Resume.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Dhruv Achar',
  displayName: 'Dhruv Achar',
  firstName: 'DHRUV',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ACHAR ORIGINAL',
  role: 'AI & Data Analyst',
  tagline: ['AI & Data Analyst', 'Agentic AI', 'AWS'],
  intro:
    'A B.Tech Electronics & Communication student (Data Science minor, MIT Manipal) and Intelligent Automation & Agentic AI Analyst at Deloitte India, building multi-agent AI systems, enterprise automation workflows and data dashboards with Python, LangGraph and Automation Anywhere.',
  location: 'Gurgaon',
  email: 'dhruv.achar2004@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/dhruv-achar-569521221',
    github: 'https://github.com/dhruvachar',
  },
  resumePdf: '/assets/Dhruv_Achar_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Dhruv Achar',
  },
  interests: ['Generative AI', 'Agentic AI', 'Data Engineering', 'AWS'],
};

export const education = [
  {
    school: 'MIT Manipal',
    place: 'Manipal',
    degree: 'B.Tech — Electronics & Communication · Minor: Data Science',
    period: 'Graduating Nov 2026',
    score: 'CGPA 7.63/10',
  },
  {
    school: 'DPS Gurgaon',
    place: 'Gurgaon',
    degree: 'High School — PCM + CS',
    period: 'Completed Jul 2022',
    score: 'Class XII: 94.6%',
  },
];

export const experience = [
  {
    company: 'Deloitte India',
    role: 'Intelligent Automation & Agentic AI Analyst',
    place: 'Bengaluru, Karnataka',
    period: 'Jan 2026 – Present',
    points: [
      'Developed enterprise automation workflows using Automation Anywhere A360, improving process efficiency by 30% through automated data processing, validation, and exception handling.',
      'Designed modular bot workflows using Data Tables, dictionaries, conditional logic, and reusable components, reducing manual intervention by 35%.',
      'Built and orchestrated Camunda BPMN workflows, reducing process turnaround time by 25% through automated task routing and decision logic.',
      'Optimized end-to-end automation pipelines across 15+ process components, reducing recurring execution errors by 30%.',
    ],
  },
  {
    company: 'Bosch Chassis Pvt. Ltd.',
    role: 'Project Intern',
    place: 'Pune, Maharashtra',
    period: 'Jun – Jul 2024',
    points: [
      'Redesigned EV emergency stop circuit, improving safety compliance by 35%.',
      'Diagnosed EV powertrain systems using CAN protocols and ISO 26262.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  /** Short badge shown on the card and in the overlay (the resume gives no project dates). */
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository link isn't known — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'agents' | 'dashboard' | 'candles';
};

export const projects: Project[] = [
  {
    id: 'market-intelligence-engine',
    title: 'Market Intelligence Engine',
    year: 'AGENTIC AI',
    genre: 'Multi-Agent • LLM • Consulting',
    logline: 'A multi-agent AI consulting system for market research, competitor analysis, SWOT, financial analysis and report generation.',
    stack: ['Python', 'LangGraph', 'LangChain', 'FastAPI', 'Ollama', 'Qwen2.5', 'PostgreSQL', 'Docker'],
    build: [
      'Built a multi-agent AI consulting system using LangGraph and LangChain for market research, competitor analysis, SWOT, financial analysis, and report generation.',
      'Designed specialized Research, Competitor, SWOT, Financial, and Report agents using structured state-based orchestration.',
      'Integrated Ollama/Qwen2.5 with web research APIs to generate data-driven insights and consulting-style reports.',
      'Developed FastAPI + PostgreSQL backend, containerized with Docker, and optimized local LLM inference for lower latency.',
    ],
    features: [
      'Research, Competitor, SWOT, Financial and Report agents',
      'Structured state-based orchestration with LangGraph',
      'Local LLM inference with Ollama / Qwen2.5',
      'Web research API integration',
      'FastAPI + PostgreSQL backend, containerized with Docker',
    ],
    metrics: [
      { value: '5', label: 'specialized agents' },
      { value: 'Local', label: 'LLM inference, optimized for latency' },
      { value: 'Docker', label: 'containerized backend' },
    ],
    // Add `github: 'https://github.com/dhruvachar/<repo-name>',` once you want a GitHub button on this project.
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'agents',
  },
  {
    id: 'fpl-analytics-dashboard',
    title: 'FPL Analytics Dashboard',
    year: 'R · SHINY',
    genre: 'Analytics • Dashboard • Sports',
    logline: 'An interactive dashboard analysing 600+ players with predictive filtering, player comparisons and team optimization models.',
    stack: ['R', 'Shiny'],
    build: [
      'Built an interactive analytics dashboard analyzing 600+ players with predictive filtering, player comparisons, and team optimization models.',
      'Designed performance metrics and visualizations to support data-driven team selection.',
    ],
    features: [
      'Predictive filtering',
      'Player-vs-player comparisons',
      'Team optimization models',
      'Custom performance metrics and visualizations',
    ],
    metrics: [{ value: '600+', label: 'players analysed' }],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'dashboard',
  },
  {
    id: 'stock-price-analytics',
    title: 'Stock Price Analytics Platform',
    year: 'REAL-TIME',
    genre: 'Fintech • Data Pipelines • Visualization',
    logline: 'A real-time stock analytics platform with technical indicators, automated alerts and interactive market visualizations.',
    stack: ['Python', 'Streamlit', 'Plotly', 'yFinance'],
    build: [
      'Built a real-time stock analytics platform with RSI, MACD, Bollinger Bands, automated alerts, and interactive market visualizations.',
      'Implemented automated data pipelines and monitoring features, improving monitoring efficiency by 50%.',
    ],
    features: [
      'RSI, MACD and Bollinger Bands',
      'Automated alerts',
      'Interactive market visualizations',
      'Automated data pipelines and monitoring',
    ],
    metrics: [
      { value: '50%', label: 'better monitoring efficiency' },
      { value: '3', label: 'technical indicators' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'candles',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'perfect-gpa',
    title: '10/10 GPA',
    org: 'MIT Manipal',
    detail: 'A perfect 8th semester GPA.',
    laurel: 'Perfect Semester',
  },
  {
    id: 'cs-100',
    title: '100% in Computer Science',
    org: 'CBSE · DPS Gurgaon',
    detail: 'Scored 100% in CBSE Computer Science and received the DPS Computer Science Proficiency Award.',
    laurel: 'Proficiency Award',
  },
  {
    id: 'directors-medal',
    title: "Director's Gold Medal",
    org: 'DPS Gurgaon',
    detail: 'Awarded for consistent academic excellence from Grades 5th–12th.',
    laurel: 'Gold Medal',
  },
  {
    id: 'football',
    title: 'Haryana U-14 National Player',
    org: 'Football',
    detail: '4× State Player for Gurgaon and Intra-University Winner with MIT Manipal.',
    laurel: 'National Player',
  },
  {
    id: 'french-olympiad',
    title: 'Gold Medalist',
    org: 'International French Olympiad',
    detail: 'Gold medal at the International French Olympiad.',
    laurel: 'Gold Medalist',
  },
];

export type Certification = { issuer: string; name: string; link: string };

/** The resume lists no certifications. Add entries here and the "Certified" rail appears automatically. */
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Python and SQL at the core',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'R', mono: 'R' },
    ],
  },
  {
    id: 'ml',
    title: 'AI & Machine Learning',
    subtitle: 'From data to predictions',
    skills: [
      { name: 'scikit-learn', mono: 'Sk' },
      { name: 'PySpark', mono: 'Ps' },
      { name: 'EDA', mono: 'Ed' },
      { name: 'Feature Engineering', mono: 'Fe' },
      { name: 'Predictive Modeling', mono: 'Pm' },
    ],
  },
  {
    id: 'genai',
    title: 'Generative AI & LLMs',
    subtitle: 'Agents, orchestration, prompts',
    skills: [
      { name: 'LLM Applications', mono: 'Ll' },
      { name: 'Agentic AI Systems', mono: 'Ag' },
      { name: 'Prompt Engineering', mono: 'Pr' },
      { name: 'LangGraph', mono: 'Lg' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'Ollama', mono: 'Ol' },
    ],
  },
  {
    id: 'data',
    title: 'Data Engineering',
    subtitle: 'Streams, stores and backends',
    skills: [
      { name: 'Apache Kafka', mono: 'Kf' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Docker', mono: 'Dk' },
    ],
  },
  {
    id: 'viz',
    title: 'Visualization & Tools',
    subtitle: 'Dashboards and daily drivers',
    skills: [
      { name: 'Tableau', mono: 'Tb' },
      { name: 'Power BI', mono: 'Pb' },
      { name: 'Plotly', mono: 'Pl' },
      { name: 'Streamlit', mono: 'St' },
      { name: 'Shiny', mono: 'Sh' },
      { name: 'Jupyter', mono: 'Jp' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
    ],
  },
  {
    id: 'automation',
    title: 'Automation',
    subtitle: 'Enterprise workflows at Deloitte',
    skills: [
      { name: 'Automation Anywhere A360', mono: 'A3' },
      { name: 'Camunda BPMN', mono: 'Cm' },
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    subtitle: 'The ECE foundation',
    skills: [
      { name: 'CAN Protocol', mono: 'Cn' },
      { name: 'ISO 26262', mono: 'Is' },
      { name: 'EV Powertrain', mono: 'Ev' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects or experience on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Market Intelligence Engine', 'Stock Price Analytics Platform'],
  R: ['FPL Analytics Dashboard'],
  Shiny: ['FPL Analytics Dashboard'],
  'Agentic AI Systems': ['Market Intelligence Engine', 'Deloitte India — Agentic AI Analyst'],
  'LLM Applications': ['Market Intelligence Engine'],
  LangGraph: ['Market Intelligence Engine'],
  LangChain: ['Market Intelligence Engine'],
  Ollama: ['Market Intelligence Engine'],
  PostgreSQL: ['Market Intelligence Engine'],
  FastAPI: ['Market Intelligence Engine'],
  Docker: ['Market Intelligence Engine'],
  Plotly: ['Stock Price Analytics Platform'],
  Streamlit: ['Stock Price Analytics Platform'],
  'Automation Anywhere A360': ['Deloitte India'],
  'Camunda BPMN': ['Deloitte India'],
  'CAN Protocol': ['Bosch Chassis internship'],
  'ISO 26262': ['Bosch Chassis internship'],
  'EV Powertrain': ['Bosch Chassis internship'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: 'Up to 2022',
    synopsis: 'School years at DPS Gurgaon — PCM + Computer Science, a perfect CS score and a few medals along the way.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Scholar',
        description: 'Class XII with 94.6% in PCM + CS, and the Director’s Gold Medal for consistent academic excellence from Grades 5th–12th.',
        tags: ['PCM + CS', '94.6%', 'Gold Medal'],
        runtime: 'DPS Gurgaon',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Coder',
        description: '100% in CBSE Computer Science and the DPS Computer Science Proficiency Award.',
        tags: ['CBSE', 'Computer Science', '100%'],
        runtime: 'Proficiency Award',
        palette: jade,
      },
      {
        code: 'S01 E03',
        title: 'The Linguist',
        description: 'Gold Medalist at the International French Olympiad.',
        tags: ['French', 'International Olympiad'],
        runtime: 'Gold Medal',
        palette: violet,
      },
      {
        code: 'S01 E04',
        title: 'The Footballer',
        description: 'Haryana U-14 National Player and a 4× State Player for Gurgaon.',
        tags: ['Football', 'Haryana U-14', 'National'],
        runtime: '4× State Player',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Engineering',
    period: 'Up to Nov 2026',
    synopsis: 'B.Tech in Electronics & Communication at MIT Manipal, with a Minor in Data Science.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'B.Tech in Electronics & Communication with a Minor in Data Science — CGPA 7.63/10.',
        tags: ['B.Tech', 'ECE', 'Data Science Minor'],
        runtime: 'MIT Manipal',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Perfect Semester',
        description: 'A perfect 10/10 GPA in the 8th semester.',
        tags: ['10/10 GPA', '8th Semester'],
        runtime: 'One semester',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Champion',
        description: 'Intra-University Winner in football with MIT Manipal.',
        tags: ['Football', 'Intra-University'],
        runtime: 'MIT Manipal',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Hands-On',
    period: 'Jun – Jul 2024',
    synopsis: 'Project Intern at Bosch Chassis Pvt. Ltd., Pune — working on EV safety circuits and powertrain diagnostics.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Circuit',
        description: 'Redesigned an EV emergency stop circuit, improving safety compliance by 35%.',
        tags: ['EV', 'Safety', '+35% compliance'],
        runtime: 'Bosch Chassis',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'The Diagnostician',
        description: 'Diagnosed EV powertrain systems using CAN protocols and ISO 26262.',
        tags: ['CAN', 'ISO 26262', 'Powertrain'],
        runtime: 'Bosch Chassis',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Automation at Scale',
    period: 'Jan 2026 – Present',
    synopsis: 'Intelligent Automation & Agentic AI Analyst at Deloitte India, Bengaluru.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Automator',
        description: 'Enterprise automation workflows on Automation Anywhere A360 — 30% better process efficiency through automated processing, validation and exception handling.',
        tags: ['A360', '+30% efficiency'],
        runtime: 'Deloitte India',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Modularist',
        description: 'Modular bot workflows with Data Tables, dictionaries, conditional logic and reusable components — 35% less manual intervention.',
        tags: ['Bots', 'Reusable components', '−35% manual work'],
        runtime: 'Deloitte India',
        palette: violet,
      },
      {
        code: 'S04 E03',
        title: 'The Orchestrator',
        description: 'Camunda BPMN workflows with automated task routing and decision logic — 25% faster process turnaround.',
        tags: ['Camunda', 'BPMN', '−25% turnaround'],
        runtime: 'Deloitte India',
        palette: ocean,
      },
      {
        code: 'S04 E04',
        title: 'The Optimizer',
        description: 'End-to-end automation pipelines optimized across 15+ process components — 30% fewer recurring execution errors.',
        tags: ['15+ components', '−30% errors'],
        runtime: 'Deloitte India',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Agents, data and the cloud — the headline on the resume points to the next arc.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Agent Builder',
        description: 'Market Intelligence Engine — a multi-agent consulting system built on LangGraph, with Research, Competitor, SWOT, Financial and Report agents.',
        tags: ['LangGraph', 'Agentic AI', 'Ollama'],
        runtime: 'Original',
        palette: crimson,
      },
      {
        code: 'S05 E02',
        title: 'The Next Chapter',
        description: 'Growing in Generative AI, Agentic AI, AWS and Data Engineering.',
        tags: ['Generative AI', 'Agentic AI', 'AWS', 'Data Engineering'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current role', title: 'Deloitte India', detail: 'Intelligent Automation & Agentic AI Analyst', palette: crimson },
  { label: 'The AI Original', title: 'Market Intelligence Engine', detail: 'Multi-agent consulting system on LangGraph', palette: violet },
  { label: 'Perfect semester', title: '10/10 GPA', detail: '8th semester • MIT Manipal', palette: jade },
  { label: 'Computer Science', title: '100%', detail: 'CBSE CS • Proficiency Award', palette: amber },
  { label: 'Process efficiency', title: '+30%', detail: 'A360 automation workflows', palette: ocean },
  { label: 'Turnaround time', title: '−25%', detail: 'Camunda BPMN task routing', palette: crimson },
  { label: 'The dashboard', title: 'FPL Analytics', detail: '600+ players analysed • R Shiny', palette: amber },
  { label: 'Real-time', title: 'Stock Analytics', detail: 'RSI • MACD • Bollinger Bands', palette: ocean },
  { label: 'On the pitch', title: 'Haryana U-14', detail: 'National football player', palette: jade },
  { label: 'Gold medal', title: 'French Olympiad', detail: 'International French Olympiad', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · ECE',
    lines: ['MIT Manipal · Minor in Data Science', 'Graduating November 2026'],
    chips: ['CGPA 7.63/10'],
  },
  {
    kicker: 'Skills',
    title: 'Agents & Data.',
    lines: ['Generative AI · Agentic AI · LLM Applications', 'LangGraph · LangChain · FastAPI · PySpark · Kafka'],
    chips: ['Python', 'SQL', 'LangGraph', 'FastAPI', 'Docker', 'Power BI'],
  },
  {
    kicker: 'Experience',
    title: 'At Deloitte India',
    lines: ['Intelligent Automation & Agentic AI Analyst', 'January 2026 – Present', 'Automation Anywhere A360 · Camunda BPMN'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['Market Intelligence Engine — multi-agent consulting AI', 'FPL Analytics Dashboard — 600+ players analysed', 'Stock Price Analytics Platform — real-time indicators'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['10/10 GPA — 8th semester, MIT Manipal', "Director's Gold Medal — Grades 5th–12th", 'Gold Medalist — International French Olympiad'],
  },
  {
    kicker: 'Before the code',
    title: 'Engineering first.',
    lines: ['Project Intern · Bosch Chassis Pvt. Ltd. · Jun – Jul 2024', 'Redesigned an EV emergency stop circuit — +35% safety compliance'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Generative AI · Agentic AI · AWS · Data Engineering'],
  },
];

export type ProfileId = 'dhruv' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'dhruv',
    name: 'Dhruv',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: {
    nav: 'Moments',
    card: 'My Achievements',
    meta: certifications.length ? `${achievements.length} Moments • ${certifications.length} Certifications` : `${achievements.length} Moments`,
    palette: crimson,
  },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
