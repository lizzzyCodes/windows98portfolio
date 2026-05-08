"use client";

import "../98.css/style.css";
import { DesktopProvider } from "./src/data/desktop/DesktopProvider";
import DesktopLayout from "@/components/Desktop/Desktop";
import Footer from "@/components/Footer/Footer";
import Resume from "@/components/Resume/Resume";

export default function Home() {
  return (
    <DesktopProvider>
      <DesktopLayout />
      <Resume />
      <Footer />
    </DesktopProvider>
  );
}
