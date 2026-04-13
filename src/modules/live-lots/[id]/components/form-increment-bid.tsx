import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormIncrementBid() {
  return (
    <div className="mt-10">
      <span className="text-secondary40">CURRENT BID</span>
      <span className="text-5xl font-mono block mt-4 font-bold">
        $420,000.00
      </span>

      <div className="mt-10">
        <Label className="mb-2 tracking-[0.15em]">YOUR BID AMOUNT</Label>
        <Input placeholder="$420,000.00" className="text-lg" />
        <Button className="w-full font-bold mt-5" size="lg">
          PLACE BID
        </Button>
        <span className="text-xs tracking-tighter text-center block text-secondary40 mt-3">
          INCREMENTS MUST BE AT LEAST $50,000.00
        </span>
      </div>
    </div>
  );
}
