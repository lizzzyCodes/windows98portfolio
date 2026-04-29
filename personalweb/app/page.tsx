import "../98.css/style.css";
import Window from "../components/Window/Window";
import Footer from "../components/Footer/Footer";
import MusicWindow from "../components/MusicWindow/MusicWindow";
import LoadingBar from "../components/Loading/Loading";

export default function Home() {
  return (
    <>
      <LoadingBar />
      <MusicWindow dialogTitle="CD Player" />
      <Window width={300} dialogTitle="whoami" />
      <Footer />
    </>
  );
}
