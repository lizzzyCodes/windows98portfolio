import Image from "next/image";
import styles from "../Menu/Menu.module.css";
import { desktopIcons } from "@/app/src/data/data";
import { useDesktop } from "@/app/src/data/desktop/useDesktop";

export default function Menu() {
  const { openWindow } = useDesktop();
  return (
    <div className={styles.menu}>
      <div className={styles.header} role="heading" aria-level={2}>
        Menu
      </div>
      <div className={styles.divider}></div>
      <div className={styles.items}>
        {desktopIcons.map(({ folderName, icon, type }) => (
          <button
            key={type}
            className={styles.menuItem}
            onClick={() => {
              openWindow(type);
            }}
          >
            {icon && (
              <Image src={icon} width={20} height={20} alt={folderName} />
            )}

            {folderName}
          </button>
        ))}
      </div>
    </div>
  );
}
