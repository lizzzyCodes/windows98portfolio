import Image from "next/image";
import styles from "./About.module.css";
import ButtonWithLogo from "../Buttons/ButtonWithLogo";
import { socialLinks } from "@/app/src/data/data";

const AboutTab = () => {
  return (
    <div className="window" role="tabpanel">
      <div className="window-body">
        <div className={styles.image}>
          <Image src="/images/deftones.jpg" fill alt="deftones album cover" />
        </div>

        <p className={styles.heading}>{socialLinks.name}</p>
        <p>
          I'm a software engineer with a background in data science (Python, ML)
          and love front-end development.
        </p>
        <a
          href={socialLinks.linkedIn}
          target="_blank"
          rel="noreferrer"
          className={styles.linkRow}
        >
          <ButtonWithLogo src={"/icon/email.png"} buttonLabel="Lets Connect" />
        </a>
      </div>
    </div>
  );
};

export default AboutTab;
