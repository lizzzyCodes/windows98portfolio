"use client";
import { folders } from "@/app/src/data/data";
import MusicWindow from "../MusicWindow/MusicWindow";
import About from "../About/About";
import ResumeWindow from "../Resume/ResumeWindow";
import SetupWindow from "../MyComputer/SetupWindow";
import ConnectWindow from "../Connect/ConnectWindow";

export const windowRegistry: Record<string, React.ReactNode> = {
  about: <About />,
  music: <MusicWindow />,
  mycomputer: <SetupWindow data={folders} />,
  resume: <ResumeWindow />,
  connect: <ConnectWindow />,
};
