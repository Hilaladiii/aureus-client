interface Props {
  index: number;
  title: string;
  description: string;
}
export default function CardKeyValues({ index, title, description }: Props) {
  return (
    <div className="border border-border h-50 flex justify-between items-center px-10">
      <div className="text-3xl font-semibold flex gap-10 items-center">
        <span className="text-primary">00{index}</span>
        <h1 className="font-mono text-4xl uppercase">{title}</h1>
      </div>
      <div className="w-1/3 text-left uppercase text-secondary40">
        {description}
      </div>
    </div>
  );
}
