import styles from "./Resume.module.css";
import MenuBar from "../MenuBar/MenuBar";
import { SectionHeader } from "./SectionHeader";
import { ResumeHeader } from "./ResumeHeader";
import { Dates } from "./Dates";
import { Experience } from "./Experience";
import { techStackData } from "@/app/src/data/data";
import { TechStack } from "./TechStack";
import { Divider } from "./Divider";
import { ContactInfo } from "./ContactInfo";
import { socialLinks, experience } from "@/app/src/data/data";
import StatusBar from "../StatusBar/StatusBar";
import Window from "../Window/Window";
import { ExperienceHeader } from "./ExperienceHeader";

//TODO: update the colors of the scroll bar, update the css and break up the components
const Resume = () => {
  return (
    <>
      <Window>
        <MenuBar />
        <div className={styles.textArea}>
          <span className={styles.resumeName}>
            {socialLinks.name.toUpperCase()}
          </span>
          <ContactInfo
            role={socialLinks.role.toUpperCase()}
            location={socialLinks.location}
            email={socialLinks.email}
            linkedIn={socialLinks.linkedIn}
            github={socialLinks.github}
          />
          <Divider variant="double" />
          <SectionHeader header="experience" />

          <ExperienceHeader header="Oracle" subHeading={socialLinks.role} />
          <Dates
            dates={experience.Oracle.dates}
            location={experience.Oracle.location}
          />
          <div>
            <Experience data={experience.Oracle.bullets} />
          </div>
          <Divider />
          <ExperienceHeader header="PayPal" subHeading={socialLinks.role} />
          <Dates
            dates={experience.PayPal.dates}
            location={experience.PayPal.location}
          />
          <Experience data={experience.PayPal.bullets} />
          <Divider />
          <ExperienceHeader header="PayPal" subHeading={socialLinks.role} />
          <Dates
            dates={experience.PayPalInternship.dates}
            location={experience.PayPalInternship.location}
          />
          <Experience data={experience.PayPalInternship.bullets} />
          <Divider variant="double" />
          <span className={styles.cursor}></span>
        </div>
        <StatusBar footerText="Line 58, Col 15" />
      </Window>
    </>
  );
};

export default Resume;
