import { formatCurrency } from "@/common/utils/formatter";

interface Props {
  activeBalance: string;
  heldBalance: string;
}
export function EscrowInfo({ activeBalance, heldBalance }: Props) {
  return (
    <div className="flex flex-col border border-foreground/10">
      {/* Active Balance */}
      <div className="p-6 md:p-8 bg-foreground/5">
        <span className="block text-xs font-mono tracking-widest text-foreground/60 uppercase mb-2">
          Available Liquidity
        </span>
        <span className="block text-4xl md:text-5xl font-mono font-bold text-foreground tracking-tight">
          {formatCurrency(activeBalance)}
        </span>
      </div>
      {/* Escrow Balance */}
      <div className="p-6 md:p-8 border-t border-foreground/10 flex justify-between items-end">
        <div>
          <span className="block text-xs font-mono tracking-widest text-foreground/60 uppercase mb-1">
            Held in Escrow
          </span>
          <span className="block text-3xl font-mono font-semibold text-foreground">
            {formatCurrency(heldBalance)}
          </span>
        </div>
        <span className="text-[10px] font-mono tracking-[0.2em] text-amber-600 uppercase font-bold">
          Locked
        </span>
      </div>
    </div>
  );
}
