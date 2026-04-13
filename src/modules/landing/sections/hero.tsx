import { Button } from "@/components/ui/button";
import Image from "next/image";
import LandingImg from "@/assets/landing.jpg";

export default function Hero() {
  return (
    <div className="container_section pl-8">
      <WordSection />
      <TopAuction />
    </div>
  );
}

function WordSection() {
  return (
    <div className="w-1/2 space-y-6">
      <div className="inline-flex items-center gap-3 mb-8 px-3 py-1.5 border border-foreground/10 bg-foreground/5 rounded-none">
        <div className="w-2 h-2 bg-foreground" />
        <span className="text-xs font-mono font-semibold tracking-widest text-foreground/80 uppercase">
          AUREUS // CORE_ENGINE
        </span>
      </div>
      <h1 className="text-xl xl:text-7xl font-bold font-mono tracking-tight leading-[1.05] text-foreground uppercase">
        Realtime <br /> Precission Bidding.
      </h1>
      <p className="text-secondary40 pr-32 font-light text-lg leading-relaxed">
        Our high frequency architecture eleminate delay, ensuring every bid is
        accourated for with absolute mechanical accuracy.
      </p>
      <Button size="lg" className="tracking-wide font-semibold">
        EXPLORE LIVE AUCTIONS
      </Button>
    </div>
  );
}

function TopAuction() {
  return (
    <div className="relative w-1/2 h-screen overflow-clip">
      <Image
        src={LandingImg}
        alt="landing"
        priority
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

      <div className="absolute bottom-10 left-10 text-white flex flex-col">
        <span className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
          Top Auction
        </span>

        <h3 className="mb-1 font-mono text-2xl font-medium tracking-tight">
          Mclaren 720s
        </h3>

        <div className="flex items-end gap-4">
          <p className="text-3xl font-semibold">$800,000.00</p>
          <span className="mb-1 text-sm font-bold tracking-widest text-red-500">
            01:15:08
          </span>
        </div>
      </div>
    </div>
  );
}
