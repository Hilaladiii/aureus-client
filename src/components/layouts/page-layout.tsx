interface Props {
  title: string;
  description: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}
export default function PageLayout({
  title,
  description,
  action,
  children,
}: Props) {
  return (
    <div className="mt-25 px-8">
      <div className="flex justify-between items-end">
        <div className="w-1/3">
          <h1 className="font-mono font-bold text-5xl tracking-tight">
            {title}
          </h1>
          <p className="text-sm text-secondary40">{description}</p>
        </div>
        <div>{action}</div>
      </div>
      {children}
    </div>
  );
}
