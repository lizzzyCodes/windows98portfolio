import styles from "./Resume.module.css";
type DividerVariant = "double" | "dashed" | "single";

const CHAR_MAP: Record<DividerVariant, string> = {
  double: "═",
  dashed: "-",
  single: "─",
};

interface DividerProps {
  variant?: DividerVariant;
}

export function Divider({ variant = "single" }: DividerProps) {
  return (
    <span className={styles.divider} aria-hidden="true">
      {CHAR_MAP[variant].repeat(200)}
    </span>
  );
}
