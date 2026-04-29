import "../98.css/style.css";
import Window from "./src/components/Window/Window";
import Footer from "./src/components/Footer/Footer";
import MusicWindow from "./src/components/MusicWindow/MusicWindow";

export default function Home() {
  return (
    <>
      <MusicWindow dialogTitle="CD Player" />
      <Window width={300} dialogTitle="whoami" />
      <Footer />
    </>
  );
}
