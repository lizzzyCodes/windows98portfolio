import Window from "../Window/Window";
import MenuBar from "../MenuBar/MenuBar";

export default function ResumeWindow() {
  return (
    <Window title="Resume.txt - Notepad" width={500}>
      <MenuBar />
      <p>Resume Info here </p>
    </Window>
  );
}
