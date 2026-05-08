import { useDesktop } from "@/app/src/data/desktop/useDesktop";

export type WindowInstance = {
  id: string; // unique instance id
  type: string; // "about", "projects", etc
  minimized: boolean;
  zIndex: number;
};

interface WindowProps {
  entry: WindowInstance;
  title: string;
  children: React.ReactNode;
  width?: number;
}

export default function Window({ entry, title, width, children }: WindowProps) {
  const { closeWindow, minimizeWindow, maximizeWindow } = useDesktop();
  // if (entry.minimized) return null;
  return (
    <div style={{ width }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button
            aria-label="Minimize"
            onClick={() => minimizeWindow(entry.id)}
          />
          <button
            aria-label="Maximize"
            onClick={() => maximizeWindow(entry.id)}
          />
          <button aria-label="Close" onClick={() => closeWindow(entry.id)} />
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}
