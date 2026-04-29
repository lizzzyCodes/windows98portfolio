export default function LoadingBar() {
  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">{"welcome"}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
        </div>
      </div>

      <div className="window-body">
        <div className="field-row">
          <div className="progress-indicator segmented">
            <span className="progress-indicator-bar" style={{ width: "40%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
