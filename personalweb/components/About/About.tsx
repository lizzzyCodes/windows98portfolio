import React from "react";
import StatusBar from "../StatusBar/StatusBar";
import { BackgroundTab } from "./BackgroundTab";
import MentorshipTab from "./MentorshipTab";
import AboutTab from "./AboutTab";

// TODO:
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
    <>
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
            {TAB_COMPONENTS[activeTab]}
          </div>
        </div>
      </div>

      <StatusBar
        footerText={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      />
    </>
  );
}
