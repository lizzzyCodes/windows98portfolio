import styles from "./Resume.module.css";
interface SectionHeaderProps {
  header: string;
}

export const SectionHeader = ({ header }: SectionHeaderProps) => (
  <div className={styles.experienceHeading}>
    <span>■</span> {header.toUpperCase()}
  </div>
);
