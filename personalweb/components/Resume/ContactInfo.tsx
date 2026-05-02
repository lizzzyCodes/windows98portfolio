interface ContactInfoProps {
  location: string;
  email: string;
  linkedIn: string;
  github: string;
}

export function ContactInfo({
  location,
  email,
  linkedIn,
  github,
}: ContactInfoProps) {
  return (
    <>
      <div className="Contact Info">
        {location} | {email} | LinkedIn: {linkedIn}| GitHub: @{github}
      </div>
    </>
  );
}
