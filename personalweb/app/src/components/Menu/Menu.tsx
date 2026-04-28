export default function Menu() {
  return (
    <div style={{ zIndex: "-1" }}>
      <div className="window">
        <div className="window-body">
          <ul className="tree-view">
            <li>Programs</li>
            <li>Documents</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
