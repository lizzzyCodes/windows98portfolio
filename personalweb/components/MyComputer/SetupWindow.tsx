import DesktopItem from "../Desktop/DesktopItem";
import AddressBar from "../AddressBar/AddressBar";
import StatusBar from "../StatusBar/StatusBar";

interface SetupWindowInterface {
  data: Record<string, string>[];
}

export default function SetupWindow({ data }: SetupWindowInterface) {
  return (
    <>
      <div>
        <AddressBar address="My Computer" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {data.map(({ folderName, items, icon }) => (
            <DesktopItem
              key={folderName}
              icon={icon}
              iconHeading={`${folderName}`}
              iconSubHeading={items}
            />
          ))}
        </div>
      </div>
      <p>Tip: open a folder, then click any tech icon to see how I use it.</p>
      <StatusBar footerText={data.length + "folder(s)"} />
    </>
  );
}
