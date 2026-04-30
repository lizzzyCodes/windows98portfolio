"use client";

import { useState, useEffect } from "react";

const TARGET_PERCENT = 100;
const INTERVAL_MS = 50;
const INCREMENT = 2;

export default function LoadingBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
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
