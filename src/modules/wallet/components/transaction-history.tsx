interface Props {
  type: string;
  time: string;
  date: string;
  amount: string;
  status: string;
}
export default function TransactionHistory({
  type,
  time,
  date,
  amount,
  status,
}: Props) {
  return (
    <div className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-foreground/10 hover:bg-foreground/5 transition-colors px-2 -mx-2">
      <div className="flex flex-col gap-1 mb-2 sm:mb-0">
        <span className="font-medium text-foreground tracking-tight">
          {type}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-foreground/50">{time}</span>
          <span className="w-1 h-1 bg-foreground/20 rounded-full" />
          <span className="text-xs font-mono text-foreground/50">{date}</span>
        </div>
      </div>

      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto">
        <span
          className={`font-mono font-semibold text-lg ${amount.includes("-") ? "text-foreground" : "text-green-600"}`}
        >
          {amount}
        </span>
        <span className="text-[10px] font-mono tracking-[0.2em] text-foreground/60 uppercase">
          {status}
        </span>
      </div>
    </div>
  );
}
