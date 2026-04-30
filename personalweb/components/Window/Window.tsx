interface WindowProps {
  title: string;
  width?: number;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
  children: React.ReactNode;
}

export default function Window({
  title,
  width,
  onMinimize,
  onMaximize,
  onClose,
  children,
}: WindowProps) {
  return (
    <div style={{ width }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={onMinimize} />
          <button aria-label="Maximize" onClick={onMaximize} />
          <button aria-label="Close" onClick={onClose} />
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}
