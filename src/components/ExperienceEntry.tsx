interface Entry {
  company: string;
  url: string | null;
  role: string;
  period: string;
  bullets: string[];
}

interface Props {
  entry: Entry;
}

export default function ExperienceEntry({ entry }: Props) {
  return (
    <div className="mb-2.5 last:mb-0">
      <div className="flex justify-between items-baseline gap-4">
        <div className="flex items-baseline gap-1.5 flex-wrap min-w-0">
          {entry.url ? (
            <a
              href={entry.url}
              className="font-semibold text-sm text-teal-700 hover:text-teal-900 transition-colors"
            >
              {entry.company}
            </a>
          ) : (
            <span className="font-semibold text-sm text-gray-900">{entry.company}</span>
          )}
          <span className="text-gray-300 text-xs select-none">·</span>
          <span className="text-sm text-gray-600">{entry.role}</span>
        </div>
        <span className="text-gray-400 text-xs whitespace-nowrap shrink-0">{entry.period}</span>
      </div>

      <div className="mt-0.5 space-y-0.5">
        {entry.bullets.map((bullet, i) => (
          <p key={i} className="text-sm text-gray-700 leading-snug">{bullet}</p>
        ))}
      </div>
    </div>
  );
}
