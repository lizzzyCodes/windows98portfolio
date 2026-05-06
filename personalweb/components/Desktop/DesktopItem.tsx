"use client";
import Image from "next/image";
import styles from "./Desktop.module.css";

interface DesktopItemProps {
  icon: string | undefined;
  iconHeading: string;
  iconSubHeading?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
}

export default function DesktopItem({
  icon,
  onClick,
  iconHeading,
  iconSubHeading,
  width = 50,
  height = 50,
}: DesktopItemProps) {
  return (
    <>
      <div key={iconHeading} className={styles.folder} onClick={onClick}>
        <Image
          src={icon ?? "fallback"} // TODO: replace fallback
          width={width}
          height={height}
          alt="folder"
        />
        <p className={styles.iconHeading}>{iconHeading}</p>
        <p className={styles.iconSub}>{iconSubHeading}</p>
      </div>
    </>
  );
}
