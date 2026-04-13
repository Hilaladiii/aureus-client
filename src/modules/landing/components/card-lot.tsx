import Image from "next/image";
import LandingImg from "@/assets/landing.jpg";

export default function CardLot() {
  return (
    <div className="w-full max-w-67">
      <div className="w-67 h-73 relative overflow-clip mb-2">
        <Image
          src={LandingImg}
          fill
          className="object-cover object-center"
          alt="test"
        />
      </div>
      <span className="text-secondary40 text-[10px] tracking-[0.15em] uppercase">
        Automotive // Supercar
      </span>
      <h1 className="font-mono text-xl font-medium tracking-tight text-foreground ">
        Mclaren 720s
      </h1>
      <div className="w-full flex justify-between items-end mt-2">
        <div>
          <span className="block text-xs uppercase tracking-widest text-foreground/50 mb-1">
            Current Bid
          </span>
          <span className="text-xl font-semibold text-foreground">
            $400,000.00
          </span>
        </div>
        <div className="flex items-center gap-2 px-2.5 py-1.5 border border-foreground/20 bg-foreground/5">
          <div className="w-1.5 h-1.5 bg-red-500" />
          <span className="font-mono text-xs font-bold tracking-widest text-foreground">
            00:42:34
          </span>
        </div>
      </div>
    </div>
  );
}
