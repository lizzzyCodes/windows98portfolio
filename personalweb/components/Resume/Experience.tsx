import React from "react";
import styles from "./Resume.module.css";
import { ExperienceHeader } from "./ExperienceHeader";
import { Dates } from "./Dates";
import { socialLinks, experience } from "@/app/src/data/data";

interface ExperienceProps {
  data: string[];
  bulletStyle?: string;
}

export const Experience = ({ data, bulletStyle = "•" }: ExperienceProps) => (
  <>
    {data.map((bullet, index) => (
      <React.Fragment key={index}>
        <span className={styles.bullet}>{bulletStyle}</span> {bullet}
        {"\n"}
      </React.Fragment>
    ))}
  </>
);
