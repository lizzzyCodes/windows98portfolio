import "../98.css/style.css";
// import Window from "@/components/Window/Window";
import Footer from "@/components/Footer/Footer";
import MusicWindow from "@/components/MusicWindow/MusicWindow";
// import About from "@/components/About/About";
import SetupWindow from "@/components/Setup/SetupWindow";
import { folders } from "./src/data/data";
// import LoadingBar from "../components/Loading/Loading";

export default function Home() {
  return (
    <>
      <MusicWindow />
      <SetupWindow data={folders} />

      <Footer />
    </>
  );
}
