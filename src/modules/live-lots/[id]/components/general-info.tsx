interface Props {
  category: string;
  title: string;
  description: string;
  children: React.ReactNode;
}
export default function GeneralInfo({
  children,
  title,
  description,
  category,
}: Props) {
  return (
    <>
      <span className="tracking-[0.15em] uppercase text-xs">{category}</span>
      <h1 className="text-5xl font-mono font-bold mt-2">{title}</h1>
      <p className="text-secondary40 text-xs mt-5">{description}</p>
      {children}
    </>
  );
}
