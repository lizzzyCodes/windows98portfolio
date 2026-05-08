import React from "react";
import styles from "./Resume.module.css";

interface TechStackItem {
  category: string;
  skills: string;
}

interface TechStackProps {
  data: TechStackItem[];
}

export const TechStack = ({ data }: TechStackProps) => (
  <div className={styles.techStack}>
    {data.map((item) => (
      <div key={item.category} className={styles.techRow}>
        <span className={styles.category}>{item.category}:</span>

        <span className={styles.skills}>{item.skills}</span>
      </div>
    ))}
  </div>
);
