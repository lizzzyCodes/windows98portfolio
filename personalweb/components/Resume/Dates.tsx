import styles from "./Resume.module.css";

interface DateProps {
  dates: string;
  location?: string;
}

export const Dates = ({ dates, location }: DateProps) => (
  <span className={styles.jobDate}>
    {dates} | {location}
  </span>
);
