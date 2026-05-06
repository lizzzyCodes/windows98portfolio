"use client";
import { createContext } from "react";
import { WindowInstance } from "@/components/Window/Window";

interface DesktopContextType {
  windows: WindowInstance[];
  openWindow: (type: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
}

export const DesktopContext = createContext<DesktopContextType | null>(null);
