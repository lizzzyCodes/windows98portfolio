import DesktopItem from "@/components/Desktop/DesktopItem";
import { desktopIcons } from "@/app/src/data/data";
import styles from "./Desktop.module.css";

export default function DesktopLayout() {
  return (
    <>
      <div className={styles.desktop}>
        {desktopIcons.map((icon) => (
          <DesktopItem
            key={icon.folderName}
            icon={icon.icon}
            iconHeading={`${icon.folderName}`}
          />
        ))}
      </div>
    </>
  );
}
