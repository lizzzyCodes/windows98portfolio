import Window from "../Window/Window";
import MenuBar from "../MenuBar/MenuBar";
import styles from "../Resume/Resume.module.css";
import { SectionHeader } from "./SectionHeader";
import { ResumeHeader } from "./ExperienceHeader";
import { Dates } from "./Dates";
import { Experience } from "./Experience";
import { techStackData } from "@/app/src/data/data";
import { TechStack } from "./TechStack";

export default function ResumeWindow() {
  return (
    <Window title="Resume.txt - Notepad" width={800}>
      <MenuBar />
      <div className={`window-body ${styles.windowBody}`}>
        <div className={styles.textArea}>
          <div className={styles.headerBox}>
            <span className={styles.asciiBorder}>
              ╔═══════════════════════════════════════════════════════════════════════════╗
            </span>
            {"\n"}
            {"                   "}
            <span className={styles.name}>ELIZABETH CASTILLO</span>
            {"                    "}
            {"\n"}
            <span className={styles.asciiBorder}>
              ╚═══════════════════════════════════════════════════════════════════════════╝
            </span>
          </div>
          <div className="Contact Info Container">
            <span className={styles.title}>SOFTWARE ENGINEER</span>
            <div className="Contact Info">
              New York, NY | castieelizabeth896@gmail.com | LinkedIn:
              www.linkedin.com/in/elizabeth-castillo- | GitHub: @lizzzyCodes
            </div>
          </div>
          <SectionHeader header="EXPERIENCE" />
          <span className={styles.sectionDivider}>
            -------------------------------------------------------------------------------
          </span>
          <ResumeHeader
            header="PAYPAL"
            subHeading="Software Engineer Intern, Checkout"
          />
          <Dates dates="September 2022 - January 2024" location="Remote" />
          <Experience
            data={[
              "Utilized PayPal's internal tracking and analytics system to capture and log web traffic to be accessed on Looker using JavaScript",
              "Implemented a proactive approach to software quality by integrating unit test(s) using Jest or Mocha into every pull request creation",
              "Created and ramped A/B experiments utilizing in-house experimentation platform",
              "Performed rigorous accessibility testing on new integrations, utilizing WAVE, Lighthouse, and Screen Readers to ensure an inclusive user experience",
            ]}
          />
          <span className={styles.sectionDivider}>
            ───────────────────────────────────────────────────────────────────────────────
          </span>
          <SectionHeader header="EDUCATION" />
          <span className={styles.sectionDivider}>
            -------------------------------------------------------------------------------
          </span>
          <ResumeHeader
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
          <span className={styles.sectionDivider}>
            ───────────────────────────────────────────────────────────────────────────────
          </span>
          <SectionHeader header="TECH STACK" />
          <TechStack data={techStackData} />
          <span className={styles.sectionDivider}>
            ───────────────────────────────────────────────────────────────────────────────
          </span>
          <SectionHeader header="PROJECTS" />
          <span className={styles.sectionDivider}>
            -------------------------------------------------------------------------------
          </span>
          {"\n\n"}
          <ResumeHeader header="BUDGET TRACKER WEB APP" />
          <Experience
            bulletStyle="•"
            data={[
              "Utilized PayPal's internal tracking and analytics system to capture and log web traffic to be accessed on Looker using JavaScript",
              "Implemented a proactive approach to software quality by integrating unit test(s) using Jest or Mocha into every pull request creation",
              "Created and ramped A/B experiments utilizing in-house experimentation platform",
              "Performed rigorous accessibility testing on new integrations, utilizing WAVE, Lighthouse, and Screen Readers to ensure an inclusive user experience",
            ]}
          />
          <ResumeHeader header="RECIPE FINDER<" />

          <Experience
            bulletStyle="•"
            data={[
              "Utilized PayPal's internal tracking and analytics system to capture and log web traffic to be accessed on Looker using JavaScript",
              "Implemented a proactive approach to software quality by integrating unit test(s) using Jest or Mocha into every pull request creation",
              "Created and ramped A/B experiments utilizing in-house experimentation platform",
              "Performed rigorous accessibility testing on new integrations, utilizing WAVE, Lighthouse, and Screen Readers to ensure an inclusive user experience",
            ]}
          />
          <span className={styles.sectionDivider}>
            ═══════════════════════════════════════════════════════════════════════════════
          </span>
          <span className={styles.cursor}></span>
        </div>
      </div>
    </Window>
  );
}
