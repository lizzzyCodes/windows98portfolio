import { socialLinks } from "@/src/data/data";
import styles from "./Resume.module.css";

export const ResumeHeader = () => {
  return (
    <div className={styles.textArea}>
      <div className={styles.headerContainer}>
        <div className={styles.desktopHeader}>
          <div className={styles.topBorder}>
            <span className={styles.asciiBorder}>
              ╔═══════════════════════════════════════════════════════════════════════════╗
            </span>
          </div>
          <div className={styles.middleLine}>
            <span className={styles.asciiBorder}>║</span>
            <span className={styles.textArea}>
              {socialLinks.name.toUpperCase()}
            </span>
            <span className={styles.asciiBorder}>║</span>
          </div>
          <div className={styles.bottomBorder}>
            <span className={styles.asciiBorder}>
              ╚═══════════════════════════════════════════════════════════════════════════╝
            </span>
          </div>
        </div>

        <div className={styles.mobileHeader}>
          <div className={styles.mobileName}>
            {socialLinks.name.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};
