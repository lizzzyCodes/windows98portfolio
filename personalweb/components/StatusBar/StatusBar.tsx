interface StatusBarProps {
  footerText: string;
}

const StatusBar = ({ footerText }: StatusBarProps) => {
  return (
    <div className="field-border" style={{ padding: "8px" }}>
      {footerText}
    </div>
  );
};

export default StatusBar;
