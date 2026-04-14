interface Props {
  title: string;
  children: React.ReactNode;
}
export default function FormSectionLayout({ title, children }: Props) {
  return (
    <div className="space-y-6 mt-10">
      <h2 className="text-primary text-sm font-bold mb-4 font-mono tracking-widest">
        {title}
      </h2>
      {children}
    </div>
  );
}
