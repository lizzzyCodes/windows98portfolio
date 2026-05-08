import React from "react";
import styles from "./Resume.module.css";
interface ExperienceProps {
  data?: string[];
  bulletStyle?: string;
}

export const Experience = ({ data, bulletStyle = "•" }: ExperienceProps) => (
  <>
    {data &&
      data.map((bullet, index) => (
        <React.Fragment key={index}>
          <span className={styles.bullet}>{bulletStyle}</span> {bullet}
          {"\n"}
        </React.Fragment>
      ))}
  </>
);
