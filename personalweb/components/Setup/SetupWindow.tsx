import Window from "../Window/Window";
import DesktopItem from "../DesktopIcon/DesktopIcon";

// TODO: extract in sep file
export const folders = [
  {
    folderName: "FrontEnd",
    items: "4 items",
    icon: "/icon/folder.png",
  },
  { folderName: "Backend", items: "4 items", icon: "/icon/folder.png" },
  { folderName: "Databases", items: "4 items", icon: "/icon/folder.png" },
  { folderName: "Cloud & DevOps", items: "4 items", icon: "/icon/folder.png" },
  { folderName: "Testing", items: "4 items", icon: "/icon/folder.png" },
  { folderName: "Observability", items: "4 items", icon: "/icon/folder.png" },
  { folderName: "Practices", items: "4 items", icon: "/icon/folder.png" },
];

interface SetupWindowInterface {
  footerText: string;
  data: Record<string, string>[];
}

export default function SetupWindow({
  footerText,
  data,
}: SetupWindowInterface) {
  return (
    <Window title={"My Setup"} width={500}>
      <div>
        <div>
          <p>Address</p>
          <div className="field-border" style={{ padding: "8px" }}>
            random path for now
          </div>
        </div>
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
      <div className="field-border" style={{ padding: "8px" }}>
        {footerText}
      </div>
    </Window>
  );
}
