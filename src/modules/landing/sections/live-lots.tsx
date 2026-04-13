import Link from "next/link";
import CardLot from "../components/card-lot";

export default function LiveLots() {
  return (
    <div className="w-full px-8 mt-20">
      <div className="flex justify-between items-center">
        <h1 className="font-mono text-3xl font-semibold">LIVE_LOTS</h1>
        <Link href="/" className="hover:underline">
          SEE ALL LOTS
        </Link>
      </div>

      <div className="flex flex-wrap justify-between mt-10">
        <CardLot />
        <CardLot />
        <CardLot />
        <CardLot />
      </div>
    </div>
  );
}
