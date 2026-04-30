import "../98.css/style.css";

// import Window from "@/components/Window/Window";
import Footer from "@/components/Footer/Footer";
import MusicWindow from "@/components/MusicWindow/MusicWindow";
// import About from "@/components/About/About";
import SetupWindow from "@/components/Setup/SetupWindow";
import { folders } from "./src/data/data";
import DesktopItem from "@/components/DesktopIcons/DesktopItem";
// import LoadingBar from "../components/Loading/Loading";
//         icon={"/icon/text.jpg"}
import { desktopIcons } from "./src/data/data";
export default function Home() {
  return (
    <>
      {desktopIcons.map((icon) => (
        <DesktopItem
          key={icon.folderName}
          icon={icon.icon}
          iconHeading={`${icon.folderName}`}
          // onClick={() => setPath(folder.name)} // temp so far
        />
      ))}
      <Footer />
    </>
  );
}

/**      <SetupWindow data={folders} /> */
