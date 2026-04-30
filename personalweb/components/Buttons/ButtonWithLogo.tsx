import Image from "next/image";

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
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={src ?? "TODO replace"}
            width={16}
            height={16}
            alt={alt ?? "TODO replace"}
          />
          {buttonLabel}
        </div>
      </button>
      ;
    </>
  );
}
