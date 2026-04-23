import React from "react";
import "98.css/style.css";

interface DialogBoxProps {
  width?: number;
  dialogTitle: string;
}
// export default function ImageLink({ src, alt, link, label }: ImageProps) {
export default function DialogBox({ width, dialogTitle }: DialogBoxProps) {
  return (
    <div style={{ width: width }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">{dialogTitle}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        <div className="field-row" style={{ justifyContent: "center" }}>
          <p> hello my name is elizabeth welcome </p>
        </div>
      </div>
    </div>
  );
}
