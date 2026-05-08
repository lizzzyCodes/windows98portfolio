import Window from "../Window/Window";
import Image from "next/image";

export default function MusicWindow() {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <div style={{ flexShrink: 0 }}>
        <Image
          src="/images/deftones.jpg"
          width={100}
          height={100}
          alt="deftones album cover"
        />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <div className="field-row">
          <label>Artist:</label>
          <select style={{ flex: 1 }}>
            <option>Deftones</option>
          </select>
        </div>

        <div className="field-row">
          <label>Track:</label>
          <select style={{ flex: 1 }}>
            <option>Be Quiet And Drive(Far Away)</option>
          </select>
        </div>

        <input type="range" min="0" max="100" value="25" />

        <div style={{ display: "flex", gap: "4px" }}>
          <button aria-label="Rewind">⏪</button>
          <button aria-label="Fast Forward">⏩</button>
          <button aria-label="Play">▶</button>
          <button aria-label="Stop">⏹</button>
        </div>
      </div>
    </div>
  );
}
