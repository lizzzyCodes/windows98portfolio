import styles from "../AddressBar/AddressBar.module.css";
import Image from "next/image";

interface AddressBarProps {
  address: string;
}

export default function AddressBar({ address }: AddressBarProps) {
  return (
    <div className={styles.addressBar}>
      <p className={styles.label}>Address</p>

      <div
        className="field-border"
        style={{
          padding: "8px",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image src="/icon/computer.png" width={20} height={20} alt="computer" />
        {address}
      </div>
    </div>
  );
}
