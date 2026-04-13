import { Button } from "@/components/ui/button";
import CardLot from "../landing/components/card-lot";

export default function Page() {
  return (
    <div className="mt-25 px-8">
      <div className="flex justify-between items-end">
        <div className="w-1/3">
          <h1 className="font-mono font-bold text-5xl tracking-tight">
            LIVE AUCTIONS
          </h1>
          <p className="text-sm text-secondary40">
            Curated architectural fragments, brutalist artifacts, and modernist
            blueprints. Verifiable provenance for the digital age.
          </p>
        </div>
        <div>
          <Button variant="outline">SORT BY NEWEST</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
        <CardLot />
        <CardLot />
        <CardLot />
        <CardLot />
        <CardLot />
        <CardLot />
      </div>

      <div className="mt-20 flex flex-col items-center gap-2">
        <span className="block text-xs font-mono text-secondary40">
          DISPLAYING 8 OF 142 LOTS
        </span>
        <Button className="px-10" variant="secondary" size="lg">
          LOAD REMAINING CATALOG
        </Button>
      </div>
    </div>
  );
}
