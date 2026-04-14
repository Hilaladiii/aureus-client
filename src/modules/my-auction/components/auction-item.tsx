import Image from "next/image";
import landingImg from "@/assets/landing.jpg";

export default function AuctionItem() {
  return (
    <div className="flex items-center gap-2">
      <div className="size-32 relative overflow-clip">
        <Image
          src={landingImg}
          fill
          className="object-cover object-center"
          alt="test"
        />
      </div>
      <div>
        <h1 className="text-xl font-bold uppercase font-mono">
          Mclaren 720S superfast
        </h1>
        <span className="block tracking-widest text-left text-secondary40 text-xs">
          AUTOMOTIVE // SUPERCAR
        </span>
      </div>
    </div>
  );
}
