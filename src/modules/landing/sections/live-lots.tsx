"use client";

import Link from "next/link";
import CardLot from "../components/card-lot";
import useSWR from "swr";
import { SWR_KEY } from "@/common/constants/swr-key";
import { getLiveAuctions } from "@/services/auction";
import { env } from "@/common/lib/env";

export default function LiveLots() {
  const { data } = useSWR(SWR_KEY.AUCTION.LIVE_AUCTION, (url) =>
    getLiveAuctions(url, {
      perPage: 5,
    }),
  );
  const auctions = data?.data.items || [];
  return (
    <div className="w-full px-8 mt-20">
      <div className="flex justify-between items-center">
        <h1 className="font-mono text-3xl font-semibold">LIVE_LOTS</h1>
        <Link href="/live-auctions" className="hover:underline">
          SEE ALL LOTS
        </Link>
      </div>

      <div className="flex flex-wrap justify-between mt-10">
        {auctions.map((auction) => (
          <CardLot
            key={auction.id}
            id={auction.id}
            name={auction.name}
            category={auction.category.name}
            currentBid={auction.currentPrice.toString()}
            endTime={auction.endTime.toString()}
            imageUrl={`${env.NEXT_PUBLIC_STORAGE_URL}${auction.images[0].imageUrl}`}
          />
        ))}
      </div>
    </div>
  );
}
