import "../98.css/style.css";

// import Window from "@/components/Window/Window";
import Footer from "@/components/Footer/Footer";
import MusicWindow from "@/components/MusicWindow/MusicWindow";
// import About from "@/components/About/About";
import SetupWindow from "@/components/Setup/SetupWindow";
import { folders } from "./src/data/data";
import DesktopItem from "@/components/DesktopIcons/DesktopItem";
// import LoadingBar from "../components/Loading/Loading";

export default function Home() {
  return (
    <>
      <DesktopItem
        icon={"/icon/text.jpg"}
        iconHeading="Resume"
        width={100}
        height={100}
      />

      <Footer />
    </>
  );
}

/**      <SetupWindow data={folders} /> */
