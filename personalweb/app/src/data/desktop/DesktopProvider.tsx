"use client";
import React from "react";
import { DesktopContext } from "./DesktopContext";

export function DesktopProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = React.useState([]);

  const openWindow = (type: string) => {
    console.log("working? [ec]");
    setWindows((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        type,
        minimized: false,
        isMaximized: false,
      },
    ]);
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: !w.minimized } : w))
    );
  };

  const maximizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMaximized: !w.isMaximized } : w))
    );
  };

  return (
    <DesktopContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
}
