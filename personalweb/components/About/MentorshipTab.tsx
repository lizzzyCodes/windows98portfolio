import styles from "./About.module.css";
import { Mentorship } from "@/app/src/data/data";

const MentorshipTab = () => {
  return (
    <div>
      <ul className="tree-view">
        {Mentorship.map((section) => (
          <li key={section.header}>
            <section className={styles.heading}>{section.header}</section>
            <ul>
              {section.bullets.map((bullet, index) => (
                <li key={index} className={styles.bodyText}>
                  <section className={styles.bullet}>
                    {bullet}
                  </section>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorshipTab;
