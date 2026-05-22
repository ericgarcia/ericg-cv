interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: { label: string; url: string };
}

interface Props {
  name: string;
  title: string;
  contact: Contact;
}

export default function ResumeHeader({ name, title, contact }: Props) {
  return (
    <header>
      <h1 className="[font-family:var(--font-raleway)] text-[2rem] leading-tight text-white print:text-[22pt] print:text-gray-900">
        {name}
      </h1>
      <p className="text-white/80 text-sm mt-0.5 print:text-gray-500">{title}</p>
      <div className="flex flex-col gap-0.5 mt-2">
        <div className="flex flex-wrap gap-x-3 text-xs text-white/70 print:text-gray-500">
          <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors print:text-gray-500">
            {contact.email}
          </a>
          <span className="select-none text-white/40">·</span>
          <span>{contact.phone}</span>
          <span className="select-none text-white/40">·</span>
          <span>{contact.location}</span>
        </div>
        <div>
          <a href={contact.linkedin.url} className="text-xs text-white/70 hover:text-white transition-colors print:text-gray-500">
            {contact.linkedin.label}
          </a>
        </div>
      </div>
    </header>
  );
}
