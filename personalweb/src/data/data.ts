export const folders = [
  {
    folderName: "FrontEnd",
    items: "4 items",
    icon: "/icon/folder.png",
  },
  { folderName: "Backend", items: "4 items", icon: "/icon/folder.png" },
  { folderName: "Databases", items: "4 items", icon: "/icon/folder.png" },
  { folderName: "Cloud & DevOps", items: "4 items", icon: "/icon/folder.png" },
  { folderName: "Testing", items: "4 items", icon: "/icon/folder.png" },
  { folderName: "Observability", items: "4 items", icon: "/icon/folder.png" },
  { folderName: "Practices", items: "4 items", icon: "/icon/folder.png" },
];

export const desktopIcons = [
  {
    folderName: "About",
    icon: "/icon/Resume.png",
    type: "about",
  },
  //TODO: for now commented because small tweaks not there yet
  /*{
    folderName: "My Computer",
    type: "mycomputer",
    icon: "/icon/mycomputer.jpg",
  }, */
  { folderName: "Resume", type: "resume", icon: "/icon/text.png" },
  // { folderName: "Music", type: "music", icon: "/icon/cd.png" },
  { folderName: "Outlook", type: "connect", icon: "/icon/email.png" },
];

export const aboutData = {
  about:
    "Climate-focused software engineer specializing in frontend/mobile systems, energy platforms, and spatial/data-driven applications.",
};

export const techStackData = [
  {
    category: "Languages",
    skills: "TypeScript, JavaScript (ES6+), Python, SQL, Java",
  },
  {
    category: "Frontend",
    skills: "React, Next.js, Redux, Tailwind CSS, MUI, BluePrintJS, CSS, HTML",
  },
  {
    category: "Backend & APIs",
    skills: "Node.js, REST APIs, GraphQL",
  },
  {
    category: "Data & Spatial Systems",
    skills:
      "GIS, Mapbox, Pandas, NumPy, Spatial Data Analysis, Data Visualization",
  },
  {
    category: "Testing",
    skills:
      "Jest, Mocha, React Testing Library, WebdriverIO, BrowserStack, TDD",
  },
  {
    category: "Cloud & Infra",
    skills: "OCI, CI/CD, Jenkins, Grafana, Splunk",
  },
  {
    category: "Developer Tools",
    skills: "Git, Version Control, Webpack, ESLint, Prettier, Yarn",
  },
  {
    category: "AI Tooling & Productivity",
    skills: "Claude, Codex, Cline"
  }
];

export const socialLinks = {
  github: "lizzzyCodes",
  linkedIn: "https://www.linkedin.com/in/elizabeth-castillo-",
  calendly: "https://calendly.com/ecastillooo/coffee-chat",
  email: "castieelizabeth896@gmail.com",
  location: "New York, NY",
  name: "Elizabeth Castillo",
  role: "Software Engineer",
};

export const connectLinks = [
  {
    label: "LinkedIn",
    icon: "/icon/email.png",
    href: socialLinks.linkedIn,
    description: "Let's connect professionally",
  },
  {
    label: "GitHub",
    icon: "/icon/github.png",
    href: socialLinks.github,
    description: "See my code",
  },
  {
    label: "Coffee Chat",
    icon: "/icon/coffee.png",
    href: socialLinks.calendly,
    description: "Calendly link",
  },
];

type JobEntry = {
  dates: string;
  role?: string;
  bullets?: string[];
  location?: string;
};

export const experience: Record<string, JobEntry> = {
  Oracle: {
    role: "Software Engineer",
    location: "Seattle, WA",
    dates: "January 2025 - Current",
    bullets: [
      "Co-owned 3 core repositories including the DevOps Portal UI serving ~30,000 internal users. ",
      "Rebuilt a legacy log viewer handling ~800 daily builds replacing legacy implementation with a virtualized table reducing load times from 5 minutes to ~2 seconds using React/TypeScript. Shipped under strict TDD with Jest and React Testing Library.",
      "Built and shipped a reusable CSV/JSON export component for DevOps component library adopted across the OCI engineering org. Designed a V2 with polling logic for backend-paginated datasets. Authored Storybook documentation and added unit test coverage with Jest.",
      "Independently migrated the Source Control Management team from a monolithic repo to an independent plugin, migrating ~50 files and creating Terraform infrastructure for sandbox and production environments.",
      "Implemented a feature flag to transition ~2,000 users off a legacy API. Collaborated cross-functionally with the CI/CD validating behavior in staging and deployment. ",
      "Accelerated feature delivery by applying AI assisted development tools including Cline and OpenAI Codex in day-to-day work.",
      "Owned on-call responsibilities including production deployments, Terraform bucket creation(s), Grafana monitoring, and Jira triage; hosted office hours to support plugin development teams and managed team Slack channels.",
    ],
  },
  PayPal: {
    role: "Software Engineer",
    location: "Chicago, IL",
    dates: "September 2022 – March 2024",
    bullets: [
      "Implemented a new eligibility and redirection feature in the router layer using JavaScript and SSR, reducing checkout latency by ~3 seconds for 45% of checkout to enhance the checkout platform, covered by a full test suite.",
      "Developed a proof of concept using the Apollo Server  plugin to cache GraphQL responses within the mid-tier layer using JavaScript.",
      "Increased test coverage by 90% using Mocha and test-driven development ensuring the functionality and accuracy of new product features to meet Q1 goals.",
      "Developed and maintained over 15+ observability dashboards using Splunk to detect and investigate root cause of problems in production quickly.",
      "Designed, developed and maintained automated test suites with over 20 tests for a new checkout route using Object-Oriented Design Principles, BrowserStack, and WebdriverIO. This effort increased code coverage and automation metrics as part of Q2 goals.",
      "Collaborated with the external BrowserStack team to develop the first iOS automated test with Apple Pay wallet integration kickstarting Apple Pay testing to ensure seamless functionality on mobile platforms and increasing our automation testing as part of Q2 goals.",
      "Experienced in an Agile environment, contributing to daily scrum meetings, providing technical input on planning, design and requirements for new features, reviewing and providing feedback on PRs, maintaining detailed documentation, providing estimates during story grooming sessions, and leading retrospectives.",
    ],
  },
  PayPalInternship: {
    role: "Software Engineer",
    location: "Hybrid",
    dates: "June 2021 – September 2021",
    bullets: [
      "Conducted comprehensive research on SharpR, analyzing click rates and benchmarking against industry competitors.",
      "Designed UX prototypes to enhance button click rates based on research data using Figma.",
      "Communicated and collaborated with designers and product manager to iterate on existing designs, get feedback on designs and define new features.",
      "Developed button designs using React and documented code changes on Confluence in order to use in upcoming A/B experiments.",
    ],
  },
  Education: {
    role: "Bachelor of Arts, Geographic Information Systems with Data Science",
    location: "University of Washington",
    dates: "June 2022",
  },
};


export const Mentorship = [
  {
    header: 'What I Do',
    bullets: [
      "At Oracle, I've served as a panelist for over 30 girls through  IGNITE STEM, an event designed to inspire middle school girls to pursue careers in tech",
      "Represented Oracle at the Virtual Open House (~200 attendees), where I shared interview process insights and preparation strategies to support early-career candidates.",
      "Participated in Oracle's Early Career Mentorship program, guiding a college student one-on-one through college readiness, resume building, and professional development.",
      "Volunteered at a Oracle's resume workshop where I personally reviewed and gave feedback on ~30 resumes for college students and interns.",
      "Through SHPE, I mentored a student through interview prep spending 1:1s on mock interviews and showing up for support every step of the way. She now works at Nintendo."
    ],
  },
  {
    header: 'Programs',
    bullets: [
      "Oracle IGNITE STEM",
      "Oracle Early Career Mentorship",
      "SHPE"
    ],
  }
]