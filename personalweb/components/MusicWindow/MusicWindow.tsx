import Image from "next/image";
import styles from "./Music.module.css";
/* export default function MusicWindow() {
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
          minWidth: 0,
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
} */

export default function MusicWindow() {
  return (
    <div style={{ display: "flex" }}>
      <Image
        src="/images/deftones.jpg"
        width={100}
        height={100}
        alt="deftones album cover"
      />
      <div className={styles.dropdownContainer}>
        <div className="field-row">
          <label className={styles.label}>Artist:</label>
          <select className={styles.dropdownSelect}>
            <option>Deftones</option>
          </select>
        </div>

        <div className="field-row">
          <label className={styles.label}>Track:</label>
          <select className={styles.dropdownSelect}>
            <option>Be Quiet And Drive(Far Away)</option>
          </select>
        </div>

        <div className={styles.volumeContainer}>
          <input type="range" min="0" max="100" value="25" />
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttons}>
            <button aria-label="Rewind" disabled>
              ◀◀
            </button>
            <button aria-label="Play">▶</button>
            <button aria-label="Stop">⏹</button>
            <button aria-label="Fast Forward" disabled>
              ▶▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
