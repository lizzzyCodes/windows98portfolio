import { useDesktop } from "@/app/src/data/desktop/useDesktop";
import styles from "./Window.module.css";

// TODO: fix the minimize and maximize.
export type WindowInstance = {
  id: string; // unique instance id
  type: string; // "about", "projects", etc
  minimized: boolean;
  maximized: boolean; // add the max boolean
  zIndex: number;
  x: number;
  y: number;
};

interface WindowProps {
  entry: WindowInstance;
  title: string;
  children: React.ReactNode;
  width?: number;
  position?: { x: number; y: number };
}

export default function Window({ entry, title, width, children }: WindowProps) {
  const { closeWindow, minimizeWindow, maximizeWindow, focusWindow } =
    useDesktop();
  // if (entry.minimized) return null;
  const style = {
    "--window-width": width ? `${width}px` : "auto",
    zIndex: entry.zIndex,
  } as React.CSSProperties;

  const windowClass = [
    "window",
    styles.desktopWindow,
    entry.maximized ? styles.maximized : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={windowClass}
      style={style}
      onMouseDown={() => focusWindow(entry.id)}
    >
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          {/* <button
            aria-label="Minimize"
            onClick={() => minimizeWindow(entry.id)}
          />
          <button
            aria-label="Maximize"
            onClick={() => maximizeWindow(entry.id)}
          /> */}
          <button
            aria-label="Close"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(entry.id);
            }}
          />
        </div>
      </div>
      <div className={`window-body ${styles.windowBody || ""}`}>{children}</div>
    </div>
  );
}
