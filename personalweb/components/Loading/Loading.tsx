"use client";
import React from "react";
import styles from "./Loading.module.css";
import { TARGET_PERCENT, INCREMENT, INTERVAL_MS } from "./constants";
// TODO: pdate the styles
export default function LoadingBar() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= TARGET_PERCENT) {
          clearInterval(interval);
          return TARGET_PERCENT;
        }
        return prev + INCREMENT;
      });
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">welcome</div>
      </div>
      <div className="window-body">
        <h4>Loading...</h4>
        <div className="field-row">
          <div
            className="progress-indicator segmented"
            style={{ width: "100%" }}
          >
            <span
              className="progress-indicator-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
