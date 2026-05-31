import styles from './About.module.css'

export const BackgroundTab = () => {
  return (
    <>
      <div className={`field-border ${styles.bodyText}`} style={{ padding: "8px" }}>
        This work is personal to me. My own university journey started with
        advisors discouraging me from majoring in computer science, telling me
        the coursework would be too difficult. That experience shaped a deep
        commitment to uplifting others who face similar barriers especially
        those navigating capacity-constrained majors where the odds can feel
        stacked against you. I want to help build belonging and resilience in
        communities that need it most. When I'm not coding or mentoring, you can
        find me running, weightlifting, hunting for new coffee shops, or
        training for my next run.
      </div >
    </>
  );
};
