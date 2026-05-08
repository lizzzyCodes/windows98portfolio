import styles from "./Resume.module.css";
// TODO: fix this so it only wraps through the container only!
type DividerVariant = "double" | "dashed" | "single";

const CHAR_MAP: Record<DividerVariant, string> = {
  double: "═",
  dashed: "-",
  single: "─",
};

interface DividerProps {
  variant?: DividerVariant;
  className?: string;
}

export function Divider({ variant = "single", className }: DividerProps) {
  return (
    <span className={styles.dashes} aria-hidden="true">
      {CHAR_MAP[variant].repeat(200)}
    </span>
  );
}
