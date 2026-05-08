interface StatusBarProps {
  footerText: string;
  width?: number;
}

const StatusBar = ({ footerText, width }: StatusBarProps) => {
  return (
    <div className="field-border" style={{ padding: "8px", width: width }}>
      {footerText}
    </div>
  );
};

export default StatusBar;
