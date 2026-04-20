import { env } from "@/common/lib/env";
import { TBidder } from "@/services/auction/type";
import useSWRSubscription, { SWRSubscriptionOptions } from "swr/subscription";

export function useAuctionLeaderboard(auctionId: string) {
  return useSWRSubscription(
    // bypass next proxy
    `${env.NEXT_PUBLIC_BASE_API_URL}auctions/${auctionId}/leaderboard/stream`,
    (key: string, { next }: SWRSubscriptionOptions<TBidder[], Error>) => {
      const eventSource = new EventSource(key, { withCredentials: true });

      eventSource.onmessage = (event) => {
        try {
          console.log("test", event.data);
          const newLeaderboardData: TBidder[] = JSON.parse(event.data);
          next(null, newLeaderboardData);
        } catch (error) {
          next(new Error("Failed fetch data"));
        }
      };

      eventSource.onerror = (event) => {
        eventSource.close();
        next(new Error("Koneksi real-time terputus"));
      };

      return () => {
        eventSource.close();
      };
    },
  );
}
