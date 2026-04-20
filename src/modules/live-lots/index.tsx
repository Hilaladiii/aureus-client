"use client";

import { Button } from "@/common/components/ui/button";
import CardLot from "../landing/components/card-lot";
import PageLayout from "@/common/components/layouts/page-layout";
import useSWR from "swr";
import { SWR_KEY } from "@/common/constants/swr-key";
import { getLiveAuctions } from "@/services/auction";
import { env } from "@/common/lib/env";

export default function Page() {
  const { data } = useSWR(SWR_KEY.AUCTION.LIVE_AUCTION, getLiveAuctions);
  const auctions = data?.data.items || [];
  return (
    <PageLayout
      title="LIVE AUCTIONS"
      description="Curated architectural fragments, brutalist artifacts, and modernist
            blueprints. Verifiable provenance for the digital age."
      action={<Button variant="outline">SORT BY NEWEST</Button>}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
        {auctions.map((auction) => (
          <CardLot
            id={auction.id}
            key={auction.id}
            name={auction.name}
            category={auction.category.name}
            currentBid={auction.currentPrice.toString()}
            endTime={auction.endTime.toString()}
            imageKey={auction.images[0].key}
          />
        ))}
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
