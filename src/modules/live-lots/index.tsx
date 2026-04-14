import { Button } from "@/components/ui/button";
import CardLot from "../landing/components/card-lot";
import PageLayout from "@/components/layouts/page-layout";

export default function Page() {
  return (
    <PageLayout
      title="LIVE AUCTIONS"
      description="Curated architectural fragments, brutalist artifacts, and modernist
            blueprints. Verifiable provenance for the digital age."
      action={<Button variant="outline">SORT BY NEWEST</Button>}
    >
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
    </PageLayout>
  );
}
