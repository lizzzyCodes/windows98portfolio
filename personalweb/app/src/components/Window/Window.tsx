import "98.css/style.css";
interface WindowProps {
  dialogTitle: string;
  width?: number;
  windowBody?: string;
}

export default function Window({
  width,
  dialogTitle,
  windowBody,
}: WindowProps) {
  return (
    <div style={{ width: width }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">{dialogTitle}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        <div className="field-row" style={{ justifyContent: "center" }}>
          <p> {windowBody}</p>
        </div>
      </div>
    </div>
  );
}
