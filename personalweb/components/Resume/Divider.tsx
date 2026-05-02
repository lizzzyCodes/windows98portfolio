import styles from "./Resume.module.css";

type DividerVariant = "double" | "dashed" | "single";

const CHAR_MAP: Record<DividerVariant, string> = {
  double: "═",
  dashed: "-",
  single: "─",
};

const REPEAT_COUNT = 200;

interface DividerProps {
  variant?: DividerVariant;
  className?: string;
}

export function Divider({ variant = "single", className }: DividerProps) {
  return (
    <span className={`${styles.divider} ${className ?? ""}`} aria-hidden="true">
      {CHAR_MAP[variant].repeat(REPEAT_COUNT)}
    </span>
  );
}
