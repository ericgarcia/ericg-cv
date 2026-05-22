import { resume } from "@/data/resume";
import ResumeHeader from "@/components/ResumeHeader";
import ResumeSection from "@/components/ResumeSection";
import ExperienceEntry from "@/components/ExperienceEntry";
import PrintButton from "@/components/PrintButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 print:bg-white print:py-0">
      <PrintButton />
      <main className="mx-auto max-w-[816px] bg-white shadow-md px-24 py-16 print:shadow-none print:max-w-none print:px-0 print:py-0">
        <ResumeHeader
          name={resume.name}
          title={resume.title}
          contact={resume.contact}
        />

        <hr className="my-4 border-gray-200" />

        <p className="text-sm text-gray-700 leading-relaxed">{resume.summary}</p>

        <ResumeSection title="Experience">
          {resume.experience.map((entry) => (
            <ExperienceEntry key={entry.company} entry={entry} />
          ))}
        </ResumeSection>

        <ResumeSection title="Education">
          {resume.education.map((edu) => (
            <div key={edu.institution} className="flex justify-between items-baseline mb-1.5">
              <div className="text-sm">
                <span className="font-semibold text-gray-900">{edu.institution}</span>
                <span className="text-gray-600"> — {edu.degree}</span>
              </div>
              <span className="text-gray-400 text-xs">{edu.year}</span>
            </div>
          ))}
        </ResumeSection>
      </main>
    </div>
  );
}
