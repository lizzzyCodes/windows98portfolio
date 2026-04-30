import StatusBar from "../StatusBar/StatusBar";
import Window from "../Window/Window";
import Image from "next/image";
import ButtonWithLogo from "../Buttons/ButtonWithLogo";
import styles from "./About.module.css";
import Fieldset from "../Fieldset/Fieldset";

export default function About() {
  return (
    <Window title="whoami">
      <div style={{ display: "flex", gap: "12px" }}>
        <div style={{ width: "100%", position: "relative", height: "200px" }}>
          <Image
            src="/images/deftones.jpg"
            fill
            alt="deftones album cover"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <p className={styles.heading}>Elizabeth Castillo</p>
      <Fieldset
        legend="About"
        text="I'm a software engineer with a background in data science (Python, ML)
          and love front-end development. I was born and raised in Des
          Moines, Washington, about 40 minutes south of Seattle."
      />
      <Fieldset
        legend="Mentorship"
        text="Outside of work, I dedicate much of my time to mentoring students at
          every stage of their journey from strengthening computer science
          fundamentals to mock interviews for selective programs and college
          applications. At Oracle, I've served as a panelist for IGNITE STEM, an
          event designed to inspire middle school girls to pursue careers in
          tech, and participated in Oracle's Early Career Mentorship program,
          guiding a college student one-on-one through college readiness, resume
          building, and professional development. Ive also volunteered at a
          resume workshop where I personally reviewed and gave feedback on over
          ~30 resumes for college students and interns. Through SHPE, I mentored
          a student through interview prep we spent hours on mock interviews and
          I was there for support every step of the way."
      />
      <Fieldset
        legend="Background"
        text="This work is personal to me. My own university journey started with
          advisors discouraging me from majoring in computer science, telling me
          the coursework would be too difficult. That experience shaped a deep
          commitment to uplifting others who face similar barriers especially
          those navigating capacity-constrained majors where the odds can feel
          stacked against you. I want to help build belonging and resilience in
          communities that need it most. When I'm not coding or mentoring, you
          can find me running, weightlifting, hunting for new coffee shops, or
          training for my first Spartan 5K on May 2."
      />
      <ButtonWithLogo src={"/icon/email.png"} buttonLabel="Lets Connect" />
      <ButtonWithLogo src={"/icon/folder.png"} buttonLabel="See Projects" />
      <StatusBar footerText={"Welcome"} />
    </Window>
  );
}
