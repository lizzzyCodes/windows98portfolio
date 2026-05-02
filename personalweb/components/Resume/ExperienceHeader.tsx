import styles from "./Resume.module.css";

interface ResumeSectionHeaderProps {
  header?: string;
  subHeading?: string;
}

export const ResumeHeader = ({
  header,
  subHeading,
}: ResumeSectionHeaderProps) => (
  <span className={styles.jobHeader}>
    {header} | {subHeading}
  </span>
);
