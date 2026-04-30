import StatusBar from "../StatusBar/StatusBar";
import Window from "../Window/Window";
import Image from "next/image";
import ButtonWithLogo from "../Buttons/ButtonWithLogo";

export default function About() {
  return (
    <Window title="About Me">
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
      <h4>Elizabeth Castillo</h4>
      <div className="field-border" style={{ padding: "8px" }}>
        Hi, I'm Elizabeth. A software engineer with a background in data science
        (Python, ML) and a love for front-end development. I was born and raised
        in Des Moines, Washington, about 40 minutes south of Seattle. Outside of
        work, I dedicate much of my time to mentoring students at every stage of
        their journey from strengthening computer science fundamentals to mock
        interviews for selective programs and college applications. During my
        time at Oracle, I served as a panelist for IGNITE STEM, an event
        designed to inspire middle school girls to pursue careers in tech. I
        also participated in Oracle's Early Career Mentorship program, where I
        guided a college student one-on-one through college readiness, resume
        building, and professional development. On top of that, I volunteered at
        a resume workshop where I personally reviewed and gave feedback on over
        ~30 resumes for college students and interns. This work is personal to
        me. My own university journey started with advisors discouraging me from
        majoring in computer science, telling me the coursework would be too
        difficult. That experience shaped a deep commitment to uplifting others
        who face similar barriers especially those navigating
        capacity-constrained majors where the odds can feel stacked against you.
        I want to help build belonging and resilience in communities that need
        it most. When I'm not coding or mentoring, you can find me running,
        weightlifting, hunting for new coffee shops, or training for my first
        Spartan 5K on May 2.
      </div>
      <ButtonWithLogo src={"/icon/email.png"} buttonLabel="Lets Connect" />
      <ButtonWithLogo src={"/icon/folder.png"} buttonLabel="See Projects" />
      <StatusBar footerText={"Welcome"} />
    </Window>
  );
}
