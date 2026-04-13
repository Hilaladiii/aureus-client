import { Button } from "@/components/ui/button";
import Image from "next/image";
import LandingImg from "@/assets/landing.jpg";

export default function Hero() {
  return (
    <div className="container_section">
      <WordSection />
      <TopAuction />
    </div>
  );
}

function WordSection() {
  return (
    <div className="w-1/2 space-y-6">
      <h1 className="text-xl xl:text-7xl font-bold font-mono ">
        Realtime Precission Bidding
      </h1>
      <p className="text-secondary40 font-light text-lg">
        Our high frequency architecture eleminate delay, ensuring every bid is
        accourated for with absolute mechanical accuracy.
      </p>
      <Button size="lg">EXPLORE LIVE AUCTIONS</Button>
    </div>
  );
}

function TopAuction() {
  return (
    <div className="relative w-1/2 h-125 overflow-clip">
      <Image
        src={LandingImg}
        alt="landing"
        priority
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

      <div className="absolute bottom-10 left-10 text-white flex flex-col">
        <span className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
          Top Auction
        </span>

        <h3 className="mb-1 text-2xl font-medium tracking-tight">
          Mclaren 720s
        </h3>

        <div className="flex items-end gap-4">
          <p className="font-mono text-3xl font-semibold">$8,200.00</p>
          <span className="mb-1 text-sm font-bold tracking-widest text-red-500">
            01:15:08
          </span>
        </div>
      </div>
    </div>
  );
}
