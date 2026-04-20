import Image from "next/image";
import { useCountdown } from "@/common/hooks/use-countdown";
import Countdown from "./countdown";
import { formatCurrency } from "@/common/utils/formatter";
import Link from "next/link";
import { getImageObject } from "@/common/utils/image";

interface Props {
  id: string;
  imageKey: string;
  category: string;
  name: string;
  currentBid: string;
  endTime: string;
}

export default function CardLot({
  id,
  imageKey,
  category,
  name,
  currentBid,
  endTime,
}: Props) {
  const timer = useCountdown(endTime);
  return (
    <div className="w-fit">
      <div className="w-67 h-73 relative overflow-clip mb-2">
        <Link href={`/live-auctions/${id}`}>
          <Image
            src={getImageObject(imageKey)}
            fill
            className="object-cover object-center hover:scale-110 transition-transform duration-500 ease-in-out"
            alt="test"
            unoptimized
          />
        </Link>
      </div>
      <span className="text-secondary40 text-[10px] tracking-[0.15em] uppercase">
        {category}
      </span>
      <h1 className="font-mono text-xl font-medium tracking-tight text-foreground ">
        {name}
      </h1>
      <div className="w-full flex justify-between items-end mt-2">
        <div>
          <span className="block text-xs uppercase tracking-widest text-foreground/50 mb-1">
            Current Bid
          </span>
          <span className="text-xl font-semibold text-foreground">
            {formatCurrency(currentBid)}
          </span>
        </div>
        <Countdown time={timer} />
      </div>
    </div>
  );
}
