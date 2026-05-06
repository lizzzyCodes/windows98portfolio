import styles from "../About/About.module.css";
interface FieldsetProps {
  text: string;
  legend?: string;
}
// TODO: fix the body text to match the css for fieldset and remove it from the About css
export default function Fieldset({ text, legend }: FieldsetProps) {
  return (
    <div className={styles.bodyText}>
      <fieldset>
        <legend>{legend}</legend>
        {text}
      </fieldset>
    </div>
  );
}
