import Image from "next/image";
import styles from "../DesktopIcon/DesktopIcon.module.css";

interface DesktopItemProps {
  icon: string | undefined;
  iconHeading: string;
  iconSubHeading?: string;
  onClick?: () => void;
}

export default function DesktopItem({
  icon,
  iconHeading,
  iconSubHeading,
  onClick,
}: DesktopItemProps) {
  return (
    <>
      <div key={iconHeading} className={styles.folder}>
        <Image src={icon} width={50} height={50} alt="folder" />

        <p className={styles.iconheading}>{iconHeading}/</p>

        <p className={styles.iconSubheading}>{iconSubHeading}</p>
      </div>
    </>
  );
}
