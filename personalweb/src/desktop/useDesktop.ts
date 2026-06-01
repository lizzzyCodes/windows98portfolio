"use client";
import React from "react";
import { DesktopContext } from "./DesktopContext";

export function useDesktop() {
  const context = React.useContext(DesktopContext);
  if (!context) {
    throw new Error("useDesktop must be used within DesktopProvider");
  }
  return context;
}
