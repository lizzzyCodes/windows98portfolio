"use client";
import { folders } from "@/app/src/data/data";
import MusicWindow from "../MusicWindow/MusicWindow";
import About from "../About/About";
import ResumeWindow from "../Resume/ResumeWindow";
import SetupWindow from "../MyComputer/SetupWindow";
import ConnectWindow from "../Connect/ConnectWindow";

type WindowRegistryEntry = {
  title: string;
  width?: number;
  component: React.ReactNode;
};

export const windowRegistry: Record<string, WindowRegistryEntry> = {
  about: { title: "whoami", component: <About /> },
  music: { title: "CD Player", width: 500, component: <MusicWindow /> },
  mycomputer: {
    title: "My Setup",
    component: <SetupWindow data={folders} />,
    width: 500,
  },
  resume: {
    title: "Resume.txt - Notepad",
    width: 800,
    component: <ResumeWindow />,
  },
  connect: { title: "Let's Connect", component: <ConnectWindow /> },
};
