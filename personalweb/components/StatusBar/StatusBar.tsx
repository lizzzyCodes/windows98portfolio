interface StatusBarProps {
  footerText: string;
}
export default function Status({ footerText }: StatusBarProps) {
  return (
    <>
      <div className="field-border" style={{ padding: "8px" }}>
        {footerText}
      </div>
    </>
  );
}
