import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import { Label } from "@/common/components/ui/label";
import { Toast } from "@/common/components/ui/sonner";
import { formatCurrency } from "@/common/utils/formatter";
import { SyntheticEvent, useRef } from "react";

interface Props {
  currentPrice: number;
  minBid: number;
  onSubmitBid: (bidAmount: number) => void;
}
export default function FormIncrementBid({
  currentPrice,
  minBid,
  onSubmitBid,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const bidValue = Number(inputRef.current?.value);
    const minimumBidAmount = currentPrice + minBid;

    if (bidValue < minimumBidAmount) {
      Toast({
        type: "error",
        message: `Bid amount must be at least ${formatCurrency(minimumBidAmount)}`,
      });
      return;
    }

    onSubmitBid(bidValue);

    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="mt-10">
      <span className="text-secondary40">CURRENT BID</span>
      <span className="text-5xl font-mono block mt-4 font-bold">
        {formatCurrency(currentPrice)}
      </span>

      <form onSubmit={handleSubmit} className="mt-10">
        <Label className="mb-2 tracking-[0.15em]">YOUR BID AMOUNT</Label>
        <Input
          placeholder="$00.00"
          className="text-lg"
          required
          type="number"
          min={currentPrice + minBid}
          ref={inputRef}
        />
        <Button className="w-full font-bold mt-5" size="lg">
          PLACE BID
        </Button>
        <span className="text-xs tracking-tighter text-center block text-secondary40 mt-3">
          INCREMENTS MUST BE AT LEAST {formatCurrency(minBid)}
        </span>
      </form>
    </div>
  );
}
