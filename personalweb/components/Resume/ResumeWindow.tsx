// TODO: to be deleted
import MenuBar from "../WindowMenuBar/MenuBar";
import styles from "../Resume/Resume.module.css";
import { SectionHeader } from "./SectionHeader";
import { ExperienceHeader } from "./ExperienceHeader";
import { Dates } from "./Dates";
import { Experience } from "./Experience";
import { techStackData } from "@/app/src/data/data";
import { TechStack } from "./TechStack";
import { Divider } from "./Divider";
import { ContactInfo } from "./ContactInfo";
import ResumeSection from "./ResumeSection";
import { socialLinks } from "@/app/src/data/data";
import StatusBar from "../StatusBar/StatusBar";

//TODO: update the colors of the scroll bar, update the css and break up the components
const ResumeWindow = () => {
  return (
    <>
      <MenuBar />
      <div className={`window-body ${styles.windowBody}`}>
        <div className={styles.textArea}>
          <div className={styles.headerBox}>
            <span className={styles.asciiBorder}>
              ╔═══════════════════════════════════════════════════════════════════════════╗
            </span>
            {"\n"}

            <span className={styles.name}>
              {socialLinks.name.toUpperCase()}
            </span>

            {"\n"}
            <span className={styles.asciiBorder}>
              ╚═══════════════════════════════════════════════════════════════════════════╝
            </span>
          </div>
          <div className="Contact Info Container">
            <div className={styles.contactInfoContainer}>
              <span className={styles.title}>{socialLinks.role} </span>
              <ContactInfo
                location={socialLinks.location}
                email={socialLinks.email}
                linkedIn={socialLinks.linkedIn}
                github={socialLinks.github}
              />
            </div>
          </div>
          <ResumeSection header="EXPERIENCE">
            <ExperienceHeader header="Oracle" subHeading="Software Engineer" />
            <Dates dates="January 2025 - Current" location="Hybrid" />
            <Experience
              data={[
                "Co-owned 3 core repositories including the DevOps Portal UI serving ~30,000 internal users. ",
                "Rebuilt a legacy log viewer handling ~800 daily builds replacing legacy implementation with a virtualized table reducing load times from 5 minutes to ~2 seconds using React/TypeScript. Shipped under strict TDD with Jest and React Testing Library.",
                "Built and shipped a reusable CSV/JSON export component for DevOps component library adopted across the OCI engineering org. Designed a V2 with polling logic for backend-paginated datasets. Authored Storybook documentation and added unit test coverage with Jest.",
                "Developed a proof of concept using Cucumber to enable AI agent-driven integration testing. Validated the end-to-end approach using a stub HTML page laying groundwork for automated test infrastructure.",
                "Independently migrated the Source Control Management team from a monolithic repo to an independent plugin, migrating ~50 files and creating Terraform infrastructure for sandbox and production environments.",
                "Implemented a feature flag to transition ~2,000 users off a legacy API. Collaborated cross-functionally with the CI/CD validating behavior in staging and deployment. ",
                "Accelerated feature delivery by applying AI assisted development tools including Cline and OpenAI Codex in day-to-day work.",
                "Owned on-call responsibilities including production deployments, Terraform bucket creation(s), Grafana monitoring, and Jira triage; hosted office hours to support plugin development teams and managed team Slack channels.",
              ]}
            />
          </ResumeSection>

          <ResumeSection>
            <ExperienceHeader header="PayPal" subHeading="Software Engineer" />
            <Dates dates="January 2022 - March 2023" location="Hybrid" />
            <Experience
              data={[
                " Implemented a new eligibility and redirection feature in the router layer using JavaScript and SSR, reducing checkout latency by ~3 seconds for 45% of checkout to enhance the checkout platform, covered by a full test suite.",
                "Developed a proof of concept using the Apollo Server  plugin to cache GraphQL responses within the mid-tier using JavaScript.",
                "Increased test coverage by 90% using Mocha and test-driven development ensuring the functionality and accuracy of new product features to meet Q1 goals.",
                " Developed and maintained over 15+ observability dashboards using Splunk to detect and investigate root cause of problems in production quickly.",
                " Designed, developed and maintained automated test suites with over 20 tests for a new checkout route using Object-Oriented Design Principles, BrowserStack, and WebdriverIO. This effort increased code coverage and automation metrics as part of Q2 goals.",
                "  Collaborated with the external BrowserStack team to develop the first iOS automated test with Apple Pay wallet integration kickstarting Apple Pay testing to ensure seamless functionality on mobile platforms and increasing our automation testing as part of Q2 goals.",
                " Experienced in an Agile environment, contributing to daily scrum meetings, providing technical input on planning, design and requirements for new features, reviewing and providing feedback on PRs, maintaining detailed documentation, providing estimates during story grooming sessions, and leading retrospectives.",
              ]}
            />
          </ResumeSection>

          <Divider variant="single" />
          <SectionHeader header="EDUCATION" />
          <Divider variant="dashed" />
          <ExperienceHeader
            header="UNIVERSITY OF WASHINGTON "
            subHeading="Bachelor of Arts, Data Science"
          />
          <Dates dates="September 2027 - June 2022" location="Seattle, WA" />
          <Experience
            data={[
              "Utilized PayPal's internal tracking and analytics system to capture and log web traffic to be accessed on Looker using JavaScript",
              "Implemented a proactive approach to software quality by integrating unit test(s) using Jest or Mocha into every pull request creation",
              "Created and ramped A/B experiments utilizing in-house experimentation platform",
              "Performed rigorous accessibility testing on new integrations, utilizing WAVE, Lighthouse, and Screen Readers to ensure an inclusive user experience",
            ]}
          />
          <Divider variant="single" />
          <SectionHeader header="TECH STACK" />
          <Divider variant="dashed" />
          <TechStack data={techStackData} />
          <Divider variant="single" />
          <SectionHeader header="PROJECTS" />
          <Divider variant="dashed" />
          <ExperienceHeader header="BUDGET TRACKER WEB APP" />
          <Experience
            bulletStyle="•"
            data={[
              "Utilized PayPal's internal tracking and analytics system to capture and log web traffic to be accessed on Looker using JavaScript",
              "Implemented a proactive approach to software quality by integrating unit test(s) using Jest or Mocha into every pull request creation",
              "Created and ramped A/B experiments utilizing in-house experimentation platform",
              "Performed rigorous accessibility testing on new integrations, utilizing WAVE, Lighthouse, and Screen Readers to ensure an inclusive user experience",
            ]}
          />
          <Divider variant="double" />
          <span className={styles.cursor}></span>
        </div>
      </div>
      <StatusBar footerText="Line 58, Col 15" />
    </>
  );
};

export default ResumeWindow;
