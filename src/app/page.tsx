import { resume } from "@/data/resume";
import ResumeHeader from "@/components/ResumeHeader";
import ResumeSection from "@/components/ResumeSection";
import ExperienceEntry from "@/components/ExperienceEntry";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 print:bg-white print:py-0">
      <main className="mx-auto max-w-[816px] min-h-[1056px] bg-white shadow-md print:shadow-none print:max-w-none">
        <div className="header-gradient px-24 pt-10 pb-5 print:px-0 print:pt-0 print:pb-4">
          <ResumeHeader
            name={resume.name}
            title={resume.title}
            contact={resume.contact}
          />
        </div>

        <div className="px-24 pt-5 pb-16 print:px-0 print:pt-3 print:pb-0">
          <p className="text-sm text-gray-700 leading-relaxed">{resume.summary}</p>

        <ResumeSection title="Experience">
          {resume.experience.map((entry) => (
            <ExperienceEntry key={entry.company} entry={entry} />
          ))}
        </ResumeSection>

        <ResumeSection title="Education">
          {resume.education.map((edu) => (
            <div key={edu.degree} className="flex justify-between items-baseline mb-1.5">
              <div className="text-sm">
                <span className="font-semibold text-gray-900">{edu.institution}</span>
                <span className="text-gray-300 text-xs select-none mx-1.5">·</span>
                <span className="text-gray-600">{edu.degree}</span>
              </div>
              <span className="text-gray-400 text-xs">{edu.year}</span>
            </div>
          ))}
        </ResumeSection>
        </div>
      </main>
    </div>
  );
}
