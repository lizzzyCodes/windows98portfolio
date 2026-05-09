import styles from "./Resume.module.css";
import { TabBar } from "../WindowMenuBar/MenuBar";
import { SectionHeader } from "./SectionHeader";
import { Dates } from "./Dates";
import { Experience } from "./Experience";
import { techStackData } from "@/app/src/data/data";
import { TechStack } from "./TechStack";
import { Divider } from "./Divider";
import { ContactInfo } from "./ContactInfo";
import { socialLinks, experience } from "@/app/src/data/data";
import StatusBar from "../StatusBar/StatusBar";
import { ExperienceHeader } from "./ExperienceHeader";

//TODO: update the colors of the scroll bar, update the css and break up the components
const Resume = () => {
  return (
    <>
      <TabBar />
      <div className={styles.textArea}>
        <div className={styles.resumeNameContainer}>
          <span className={styles.resumeName}>
            {socialLinks.name.toUpperCase()}
          </span>
        </div>
        <div className={styles.contactInfoBox}>
          <ContactInfo
            role={socialLinks.role.toUpperCase()}
            location={socialLinks.location}
            email={socialLinks.email}
            linkedIn={socialLinks.linkedIn}
            github={socialLinks.github}
          />
        </div>

        <Divider variant="double" />

        <TechStack data={techStackData} />
        <Divider />
        <SectionHeader header="experience" />
        {/**  Experience 1 */}
        <ExperienceHeader header="Oracle" subHeading={socialLinks.role} />
        <Dates
          dates={experience.Oracle.dates}
          location={experience.Oracle.location}
        />
        <div>
          <Experience data={experience.Oracle.bullets} />
        </div>
        <Divider />
        {/**  Experience 2 */}
        <ExperienceHeader header="PayPal" subHeading={socialLinks.role} />
        <Dates
          dates={experience.PayPal.dates}
          location={experience.PayPal.location}
        />
        <div>
          <Experience data={experience.PayPal.bullets} />
        </div>
        <Divider />
        {/**  Experience 3 */}
        <ExperienceHeader header="PayPal" subHeading={socialLinks.role} />
        <Dates
          dates={experience.PayPalInternship.dates}
          location={experience.PayPalInternship.location}
        />
        <div>
          <Experience data={experience.PayPalInternship.bullets} />
        </div>
        <Divider />
        <SectionHeader header="Education" />
        {/**  Experience 1 */}
        <ExperienceHeader header={experience.Education.location} />
        <Dates
          dates={experience.Education.dates}
          location={experience.Education.role}
        />
        <span className={styles.cursor}></span>
      </div>
      <div className={styles.styleBar}>
        <StatusBar footerText="Line 58, Col 15" />
        <div className={styles.statusSection}>
          <StatusBar footerText="100%" />
          <StatusBar footerText="Windows (CRLF)" />
          <StatusBar footerText="UTF-8" />
        </div>
      </div>
    </>
  );
};

export default Resume;
