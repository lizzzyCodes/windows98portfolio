import styles from "./Resume.module.css";
interface ContactInfoProps {
  location: string;
  email: string;
  linkedIn: string;
  github: string;
  role: string;
}

export function ContactInfo({
  location,
  email,
  linkedIn,
  github,
  role,
}: ContactInfoProps) {
  return (
    <>
      <div className={styles.contactInfoRole}>{role}</div>
      <div>
        {location} | {email} | LinkedIn: {linkedIn}| GitHub: @{github}
      </div>
    </>
  );
}
