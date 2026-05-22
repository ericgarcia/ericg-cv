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
      <h1 className="font-serif text-[2rem] leading-tight text-gray-900 print:text-[22pt]">
        {name}
      </h1>
      <p className="text-gray-500 text-sm mt-0.5">{title}</p>
      <div className="flex flex-wrap gap-x-3 text-xs text-gray-500 mt-2">
        <a href={`mailto:${contact.email}`} className="hover:text-blue-700 transition-colors">
          {contact.email}
        </a>
        <span className="select-none">·</span>
        <span>{contact.phone}</span>
        <span className="select-none">·</span>
        <span>{contact.location}</span>
        <span className="select-none">·</span>
        <a href={contact.linkedin.url} className="hover:text-blue-700 transition-colors">
          {contact.linkedin.label}
        </a>
      </div>
    </header>
  );
}
