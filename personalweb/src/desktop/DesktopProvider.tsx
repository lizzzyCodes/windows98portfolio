"use client";
import React from "react";
import { WindowInstance } from "@/components/Window/Window";
import { DesktopContext } from "./DesktopContext";

export function DesktopProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = React.useState<WindowInstance[]>([]);
  const [topZIndex, setTopZIndex] = React.useState(1);

  const openWindow = (type: string) => {
    setTopZIndex((prev) => {
      const nextZIndex = prev + 1;
      setWindows((prevWindows) => {
        const existing = prevWindows.find((w) => w.type === type);
        if (existing) {
          return prevWindows.map((w) =>
            w.id === existing.id
              ? { ...w, zIndex: nextZIndex, minimized: false }
              : w,
          );
        }
        return [
          ...prevWindows,
          {
            id: crypto.randomUUID(),
            type,
            minimized: false,
            maximized: false,
            zIndex: nextZIndex,
            x: 120,
            y: 80,
          },
        ];
      });
      return nextZIndex;
    });
  };

  const focusWindow = (id: string) => {
    setTopZIndex((prev) => {
      const nextZIndex = prev + 1;

      setWindows((prevWindows) =>
        prevWindows.map((window) =>
          window.id === id
            ? {
                ...window,
                zIndex: nextZIndex,
              }
            : window,
        ),
      );

      return nextZIndex;
    });
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: !w.minimized } : w)),
    );
  };

  const maximizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, maximized: !w.maximized } : w)),
    );
  };

  return (
    <DesktopContext.Provider
      value={{
        windows,
        openWindow,
        focusWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
}
