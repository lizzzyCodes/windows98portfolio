import "../98.css/style.css";
// import Window from "@/components/Window/Window";
import Footer from "@/components/Footer/Footer";
import MusicWindow from "@/components/MusicWindow/MusicWindow";
// import About from "@/components/About/About";
import SetupWindow, { folders } from "@/components/Setup/SetupWindow";
// import LoadingBar from "../components/Loading/Loading";

export default function Home() {
  return (
    <>
      <MusicWindow />
      <SetupWindow data={folders} footerText={folders.length + "folder(s)"} />

      <Footer />
    </>
  );
}
