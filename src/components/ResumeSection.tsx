interface Props {
  title: string;
  children: React.ReactNode;
}

export default function ResumeSection({ title, children }: Props) {
  return (
    <section className="mt-5">
      <h2 className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gray-400 border-b border-gray-200 pb-1 mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
