"use client";
import DesktopItem from "@/components/Desktop/DesktopItem";
import { desktopIcons } from "@/app/src/data/data";
import styles from "./Desktop.module.css";
import { useDesktop } from "@/app/src/data/desktop/useDesktop";
import Window from "../Window/Window";
import { windowRegistry } from "./WindowRegistry";
// displays the icons on the desktop page ...
export default function DesktopLayout() {
  const { windows, openWindow } = useDesktop();
  return (
    <>
      <div className={styles.desktop}>
        {desktopIcons.map((icon) => (
          <DesktopItem
            key={icon.folderName}
            icon={icon.icon}
            iconHeading={`${icon.folderName}`}
            //   onClick={() => openWindow(icon.folderName)}
            onClick={() => {
              console.log("windows", windows);
              console.log("registry keys", Object.keys(windowRegistry));
              console.log("icon clicked working", icon.folderName);
              openWindow(icon.type);
            }}
          />
        ))}
      </div>
      {/* Open windows — type is the key into windowRegistry */}
      {windows.map((entry) => {
        const content = windowRegistry[entry.type];
        if (!content) return null; // unknown type, skip silently

        return (
          <Window key={entry.id} entry={entry} title={entry.type}>
            {content}
          </Window>
        );
      })}
    </>
  );
}
