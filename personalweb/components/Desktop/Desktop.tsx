"use client";
import DesktopItem from "@/components/Desktop/DesktopItem";
import { desktopIcons } from "@/src/data/data";
import styles from "./Desktop.module.css";
import { useDesktop } from "@/src/desktop/useDesktop";
import Window from "../Window/Window";
import { windowRegistry } from "./WindowRegistry";
// displays the icons on the desktop page ...
export default function DesktopLayout() {
  const { windows, openWindow } = useDesktop();
  return (
    <>
      <main className={styles.desktop}>
        <section className={styles.iconGrid}>
          {desktopIcons.map(({ type, folderName, icon }) => (
            <DesktopItem
              key={folderName}
              icon={icon}
              iconHeading={`${folderName}`}
              onClick={() => {
                openWindow(type);
              }}
            />
          ))}
        </section>

        {/* Open windows — type is the key into windowRegistry */}
        <section className={styles.windowLayer}>
          {windows.map((entry) => {
            const registered = windowRegistry[entry.type];
            if (!registered) return null;

            return (
              <Window
                key={entry.id}
                entry={entry}
                title={registered.title}
                width={registered.width}
              >
                {registered.component}
              </Window>
            );
          })}
        </section>
      </main>
    </>
  );
}
