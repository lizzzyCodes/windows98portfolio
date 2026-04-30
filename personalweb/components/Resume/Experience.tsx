import React from "react";
import styles from "./Resume.module.css";

interface ExperienceProps {
  data: string[]; // TODO: make sure you update this any
  bulletStyle?: string;
}

export const Experience = ({ data, bulletStyle = "-" }: ExperienceProps) => (
  <>
    {data.map((bullet, index) => (
      <React.Fragment key={index}>
        <span className={styles.bullet}>{bulletStyle}</span> {bullet}
        {"\n"}
      </React.Fragment>
    ))}
  </>
);
