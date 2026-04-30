import styles from "./Resume.module.css";

interface SectionHeaderProps {
  header: string;
}

export const SectionHeader = ({ header }: SectionHeaderProps) => (
  <span className={styles.sectionHeader}>
    <span className={styles.sectionIcon}>■</span>
    {header}
  </span>
);
