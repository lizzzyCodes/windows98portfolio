import Image from "next/image";
import styles from "./Buttons.module.css";
interface ButtonWithLogoProps {
  buttonLabel: string;
  src?: string;
  alt?: string;
}
export default function ButtonWithLogo({
  buttonLabel,
  src,
  alt,
}: ButtonWithLogoProps) {
  return (
    <>
      <button>
        <div className={styles.buttonLabel}>
          <div className={styles.icon}>
            <Image
              src={src ?? "TODO replace"}
              width={16}
              height={16}
              alt={alt ?? "TODO replace"}
            />
          </div>
          {buttonLabel}
        </div>
      </button>
    </>
  );
}
