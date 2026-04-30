import "../98.css/style.css";

// import Window from "@/components/Window/Window";
import Footer from "@/components/Footer/Footer";
import MusicWindow from "@/components/MusicWindow/MusicWindow";
// import About from "@/components/About/About";
import SetupWindow from "@/components/Setup/SetupWindow";
import { folders } from "./src/data/data";
import DesktopItem from "@/components/Desktop/DesktopItem";
// import LoadingBar from "../components/Loading/Loading";
//         icon={"/icon/text.jpg"}
import { desktopIcons } from "./src/data/data";
import About from "@/components/About/About";

export default function Home() {
  return (
    <>
      <div>
        <About />
        {desktopIcons.map((icon) => (
          <DesktopItem
            key={icon.folderName}
            icon={icon.icon}
            iconHeading={`${icon.folderName}`}
            // onClick={() => setPath(folder.name)} // temp so far
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

/**      <SetupWindow data={folders} /> */
