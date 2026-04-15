import { cn } from "@/common/lib/utils";
import { formatCurrency } from "@/common/utils/formatter";
import { useMemo } from "react";

interface Props {
  type: "ACTIVE" | "ENDING SOON" | "SOLD";
  bids?: number;
  endingTime?: string;
  soldTime?: string;
  amount: number;
}

export default function HighestBid({
  type,
  bids,
  endingTime,
  soldTime,
  amount,
}: Props) {
  const contentBid = useMemo(() => {
    if (type === "ACTIVE") return `${bids} ACTIVE BIDS`;
    if (type === "ENDING SOON") return `ENDING IN ${endingTime}`;
    if (type === "SOLD") return `SETTELD ${soldTime}`;
  }, [type]);
  return (
    <div>
      <span
        className={cn(
          "text-xl font-bold font-mono block",
          type === "ACTIVE" && "text-foreground",
          type === "ENDING SOON" && "text-tertiary",
          type === "SOLD" && "text-secondary40",
        )}
      >
        {formatCurrency(amount)}
      </span>
      <span
        className={cn(
          "text-xs font-bold",
          type === "ACTIVE" && "text-primary",
          type === "ENDING SOON" && "text-tertiary",
          type === "SOLD" && "text-secondary40",
        )}
      >
        {contentBid}
      </span>
    </div>
  );
}
