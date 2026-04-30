import Window from "../Window/Window";
import DesktopItem from "../DesktopIcons/DesktopItem";
import AddressBar from "../AddressBar/AddressBar";
import StatusBar from "../StatusBar/StatusBar";

interface SetupWindowInterface {
  data: Record<string, string>[];
}

export default function SetupWindow({ data }: SetupWindowInterface) {
  return (
    <Window title={"My Setup"} width={500}>
      <div>
        <AddressBar address="My Computer" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {data.map((folder) => (
            <DesktopItem
              key={folder.folderName}
              icon={folder.icon}
              iconHeading={`${folder.folderName}`}
              iconSubHeading={folder.items}
              // onClick={() => setPath(folder.name)} // temp so far
            />
          ))}
        </div>
      </div>
      <p>Tip: open a folder, then click any tech icon to see how I use it.</p>
      <StatusBar footerText={data.length + "folder(s)"} />
    </Window>
  );
}
