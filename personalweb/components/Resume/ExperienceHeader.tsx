import styles from "./Resume.module.css";
import { Divider } from "./Divider";
interface ExperienceHeaderProps {
  header: string;
  subHeading?: string;
}

/* export const ExperienceHeader = ({
  header,
  subHeading,
}: ExperienceHeaderProps) => (
  <div>
    <span aria-hidden="true" />
    <Divider variant="dashed" />
    <span className={styles.experienceRole}>
      {header.toUpperCase()} | {subHeading}
    </span>
  </div>
);
*/

export const ExperienceHeader = ({
  header,
  subHeading,
}: ExperienceHeaderProps) => (
  <div className={styles.experienceHeader}>
    <span className={styles.dashFill} aria-hidden="true" />
    <span className={styles.experienceRole}>
      {header.toUpperCase()} | {subHeading}
    </span>
  </div>
);
