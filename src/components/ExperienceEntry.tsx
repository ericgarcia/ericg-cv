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
              className="font-semibold text-sm text-gray-900 hover:text-blue-700 transition-colors"
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

      {entry.bullets.length === 1 ? (
        <p className="text-sm text-gray-700 mt-0.5 leading-snug">{entry.bullets[0]}</p>
      ) : (
        <ul className="mt-0.5 space-y-0.5">
          {entry.bullets.map((bullet, i) => (
            <li key={i} className="text-sm text-gray-700 leading-snug flex gap-2">
              <span className="text-gray-300 shrink-0 select-none mt-px">·</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
