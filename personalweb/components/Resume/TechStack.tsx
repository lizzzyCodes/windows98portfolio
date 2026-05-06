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
  <>
    {data.map((item, index) => (
      <React.Fragment key={index}>
        <span className={styles.category}>{item.category}:</span>
        <span>{item.skills}</span>
        {"\n"}
      </React.Fragment>
    ))}
  </>
);
