"use client";

import { useParams } from "next/navigation";
import TableAuctionLog from "./components/table-auction-log";
import FormIncrementBid from "./components/form-increment-bid";
import Galery from "./components/galery";
import GeneralInfo from "./components/general-info";
import AuctionInfo from "./components/auction-info";
import useSWR from "swr";
import { SWR_KEY } from "@/common/constants/swr-key";
import { bidAuction, getLiveAuction } from "@/services/auction";
import { formatCurrency } from "@/common/utils/formatter";
import useSWRMutation from "swr/mutation";
import { Toast } from "@/common/components/ui/sonner";
import dayjs from "dayjs";
import { useAuctionLeaderboard } from "./hooks/use-auction-leaderboard";
import Skeleton from "./components/skeleton";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const { trigger } = useSWRMutation(SWR_KEY.AUCTION.BID(id), bidAuction);
  const { data, isLoading } = useSWR(
    SWR_KEY.AUCTION.DETAIL(id),
    getLiveAuction,
  );
  const auction = data?.data;
  const { data: leaderboard } = useAuctionLeaderboard(id);

  if (isLoading || !auction) return <Skeleton />;

  return (
    <div className="flex">
      <Galery data={auction.images} />
      <div className="w-1/2 mt-30 px-8">
        <GeneralInfo
          category={auction.category.name}
          title={auction.name}
          description={auction.description}
        >
          <div className="mt-10"></div>
          <AuctionInfo
            title="START PRICE"
            value={formatCurrency(auction.startPrice)}
          />
          <AuctionInfo
            title="START TIME"
            value={dayjs(auction.startTime).format("DD MMMM YYYY hh:mm")}
          />
          <AuctionInfo
            title="END TIME"
            value={dayjs(auction.endTime).format("DD MMMM YYYY hh:mm")}
          />
        </GeneralInfo>
        <FormIncrementBid
          currentPrice={auction.currentPrice}
          minBid={auction.bidIncrement}
          onSubmitBid={(amount) => {
            trigger(
              { amount },
              {
                onSuccess: () => {
                  Toast({
                    type: "success",
                    message: "Bid Successfully",
                  });
                },
                onError: (error: Error) => {
                  Toast({
                    type: "error",
                    message: error.message,
                  });
                },
                throwOnError: false,
              },
            );
          }}
        />
        <TableAuctionLog data={leaderboard || []} />
      </div>
    </div>
  );
}
