import "../98.css/style.css";
import Window from "./src/components/Window/Window";
import Footer from "./src/components/Footer/Footer";
import LoadingBar from "./src/components/Loading/Loading";

export default function Home() {
  return (
    <>
      <LoadingBar />
      <Window width={300} dialogTitle="whoami" />
      <Footer />
    </>
  );
}
