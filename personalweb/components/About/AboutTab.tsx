import Image from "next/image";
import styles from "./About.module.css";
import ButtonWithLogo from "../Buttons/ButtonWithLogo";
import { socialLinks, aboutData } from "@/app/src/data/data";

const AboutTab = () => {
  return (
    <div className="window" role="tabpanel">
      <div className="window-body">
        <div className={styles.image}>
          <Image
            src="/images/ComputerHeadshot.jpg"
            fill
            alt="headshot"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p className={styles.heading}>{socialLinks.name}</p>
        <p className={styles.bodyText}>{aboutData.about}</p>

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
