import React from "react";
import StatusBar from "../StatusBar/StatusBar";
import Window from "../Window/Window";
import Image from "next/image";
import ButtonWithLogo from "../Buttons/ButtonWithLogo";
import styles from "./About.module.css";
import { socialLinks } from "@/app/src/data/data";
import { BackgroundTab } from "./BackgroundTab";
import { MentorshipTab } from "./MentorshipTab";
import AboutTab from "./AboutTab";

// TODO:
// update cover photo
// update color on text
// give it a fixed size but also responsive.
// update padding on the bottom of buttons
type Tab = "about" | "mentorship" | "background";

const TABS: { id: Tab; label: string }[] = [
  { id: "about", label: "About" },
  { id: "mentorship", label: "Mentorship" },
  { id: "background", label: "Background" },
];

const TAB_COMPONENTS: Record<Tab, React.ReactNode> = {
  about: <AboutTab />,
  mentorship: <MentorshipTab />,
  background: <BackgroundTab />,
};

export default function About() {
  const [activeTab, setActiveTab] = React.useState<Tab>("about");

  return (
    <Window title="whoami">
      <div className="window-body">
        <menu role="tablist">
          {TABS.map((tab) => (
            <li
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{ cursor: "pointer" }}
            >
              <a href="#tabs" onClick={(e) => e.preventDefault()}>
                {tab.label}
              </a>
            </li>
          ))}
        </menu>

        <div className="window" role="tabpanel">
          <div className="window-body">
            {activeTab === "about" && (
              <>
                <AboutTab />
              </>
            )}

            {activeTab === "mentorship" && <MentorshipTab />}

            {activeTab === "background" && <BackgroundTab />}
          </div>
        </div>
      </div>

      <StatusBar footerText={activeTab} />
    </Window>
  );
}

/* 


const TAB_COMPONENTS: Record<Tab, React.ReactNode> = {
  about: <AboutTab />,
  mentorship: <MentorshipTab />,
  background: <BackgroundTab />,
};

const [activeTab, setActiveTab] = React.useState<Tab>("about");

// render
<div>{TAB_COMPONENTS[activeTab]}</div>

*/
