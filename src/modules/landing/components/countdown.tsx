interface Props {
  time: string;
}
export default function Countdown({ time }: Props) {
  return (
    <div className="flex items-center gap-2 px-2.5 py-1.5 border border-foreground/20 bg-foreground/5">
      <div className="w-1.5 h-1.5 bg-red-500" />
      <span className="font-mono text-xs font-bold tracking-widest text-foreground">
        {time}
      </span>
    </div>
  );
}
