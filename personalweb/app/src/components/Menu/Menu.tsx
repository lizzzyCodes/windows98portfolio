import Image from "next/image";
import styles from "../Menu/Menu.module.css";

interface MenuItem {
  label: string;
  icon?: string;
}

const MENU_ITEMS: MenuItem[] = [
  { label: "Resume", icon: "/icon/Resume.jpg" },
  { label: "Projects", icon: "/icon/Resume.jpg" },
  { label: "About Me", icon: "/icon/Resume.jpg" },
  { label: "Music", icon: "/icon/Resume.jpg" },
];

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.header} role="heading" aria-level={2}>
        Menu
      </div>
      <div style={{ borderBottom: "1px solid #f5a8d0" }}></div>
      <div className={styles.items}>
        {MENU_ITEMS.map(({ label, icon }) => (
          <button key={label} className={styles.menuItem}>
            {icon && <Image src={icon} width={20} height={20} alt={label} />}
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
