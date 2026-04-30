import styles from "../MenuBar/MenuBar.module.css";

const TAB_ITEMS = ["File", "Edit", "Format", "Help", "Download PDF"];

export default function MenuBar() {
  return (
    <div className={styles.items}>
      {TAB_ITEMS.map((label) => (
        <button key={label} className={styles.menuItem}>
          <span style={{ textDecoration: "underline" }}>{label[0]}</span>
          {label.slice(1)}
        </button>
      ))}
    </div>
  );
}
