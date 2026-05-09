import { useDesktop } from "@/app/src/data/desktop/useDesktop";
import styles from "./Window.module.css";

// TODO: fix the minimize and maximize.
export type WindowInstance = {
  id: string; // unique instance id
  type: string; // "about", "projects", etc
  minimized: boolean;
  maximized: boolean; // add the max boolean
  zIndex: number;
};

interface WindowProps {
  entry: WindowInstance;
  title: string;
  children: React.ReactNode;
  width?: number;
  position?: { x: number; y: number };
}

export default function Window({ entry, title, width, children }: WindowProps) {
  const { closeWindow, minimizeWindow, maximizeWindow } = useDesktop();
  // if (entry.minimized) return null;
  const style: React.CSSProperties &
    Record<string, string | number | undefined> = {
    "--window-width": width ? `${width}px` : undefined,
  };

  const windowClass = [
    "window",
    styles.desktopWindow,
    entry.maximized ? styles.maximized : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div style={style} className={`window ${styles.desktopWindow}`}>
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
          <button aria-label="Close" onClick={() => closeWindow(entry.id)} />
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}
