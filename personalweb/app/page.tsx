import DialogBox from "./src/components/dialogbox/DialogBox";
//import "98.css/style.css";
import "../98.css/style.css";
// if i just install it here on root it should apply everywhere
// Main Page

export default function Home() {
  return (
    <>
      <DialogBox width={300} dialogTitle="whoami" />
    </>
  );
}
