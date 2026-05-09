import styles from "./TabBar.module.css";
const DOWNLOAD_PDF = "Download PDF";
const TAB_ITEMS = ["File", "Edit", "Format", "Help", DOWNLOAD_PDF];

// TODO: fine for now if more tabs get real behavior later, consider a data-driven approach
export const TabBar = () => {
  const handleDownload = () => {
    const pdf = "/Elizabeth_Castillo_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "ElizabethCastillo_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.items}>
      {TAB_ITEMS.map((label) => {
        const isDownload = label === DOWNLOAD_PDF;
        return (
          <button
            key={label}
            className={isDownload ? styles.menuItemActive : styles.menuItem}
            disabled={!isDownload}
            onClick={isDownload ? handleDownload : undefined}
          >
            <span style={{ textDecoration: "underline" }}>{label[0]}</span>
            {label.slice(1)}
          </button>
        );
      })}
    </div>
  );
};
