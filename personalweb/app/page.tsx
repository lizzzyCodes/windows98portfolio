"use client";
import React from "react";
import { DesktopProvider } from "../src/desktop/DesktopProvider";
import DesktopLayout from "@/components/Desktop/Desktop";
import Footer from "@/components/Footer/Footer";
import Loading from "@/components/Loading/Loading";

export default function Home() {
  const [isBooting, setIsBooting] = React.useState(true);

  // TODO: here for now but user needs to interact
  const handleBootComplete = () => {
    const twinkle = new Audio("/sounds/twinkle.mp3");
    /* twinkle.play().catch((err) => {
      console.error(err);
    }); */
    setIsBooting(false);
  };

  if (isBooting) {
    return <Loading onComplete={handleBootComplete} />;
  }

  return (
    <DesktopProvider>
      <DesktopLayout />
      <Footer />
    </DesktopProvider>
  );
}
