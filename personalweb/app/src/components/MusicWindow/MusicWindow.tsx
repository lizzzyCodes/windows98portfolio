import "98.css/style.css";
interface MusicWindowProps {
  dialogTitle: string;
  width?: number;
}

export default function MusicWindow({ width, dialogTitle }: MusicWindowProps) {
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
          <div className="music-dropdown">
            <select>
              <option>5 - Incredible!</option>
              <option>4 - Great!</option>
              <option>3 - Pretty good</option>
              <option>2 - Not so great</option>
              <option>1 - Unfortunate</option>
            </select>
            <select>
              <option>5 - Incredible!</option>
              <option>4 - Great!</option>
              <option>3 - Pretty good</option>
              <option>2 - Not so great</option>
              <option>1 - Unfortunate</option>
            </select>
          </div>
        </div>
        <div className="field-row" style={{ width: "300px" }}>
          <label htmlFor="range22">Volume:</label>
          <label htmlFor="range23">Low</label>
          <input id="range23" type="range" min="1" max="11" value="5" />
          <label htmlFor="range24">High</label>
        </div>
        <div className="title-bar-controls"></div>
      </div>
    </div>
  );
}
