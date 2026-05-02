import { Divider } from "./Divider";
import { SectionHeader } from "./SectionHeader";

interface ResumeSectionProps {
  header?: string;
  children: React.ReactNode;
}

export function ResumeSection({ header, children }: ResumeSectionProps) {
  return (
    <>
      {header && (
        <>
          <Divider variant="single" />
          <SectionHeader header={header} />
          <Divider variant="dashed" />
        </>
      )}
      {children}
    </>
  );
}
