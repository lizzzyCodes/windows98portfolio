import "../98.css/style.css";
import Window from "./src/components/Window/Window";
import Footer from "./src/components/Footer/Footer";
export default function Home() {
  return (
    <>
      <Window width={300} dialogTitle="whoami" />
      <Footer />
    </>
  );
}
