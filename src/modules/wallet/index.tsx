"use client";

import { SWR_KEY } from "@/common/constants/swr-key";
import InactiveWallet from "./components/inactive-wallet";
import MyWallet from "./components/my-wallet";
import {
  activateWallet,
  getCurrentBalance,
  topUpBalance,
} from "@/services/wallet";
import useSWR, { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import { redirect } from "next/navigation";

export default function Page() {
  const { data, error } = useSWR(
    SWR_KEY.WALLET.GET_CURRENT_BALANCE,
    getCurrentBalance,
  );

  const wallet = data?.data;

  const { trigger, isMutating } = useSWRMutation(
    SWR_KEY.WALLET.ACTIVATE,
    activateWallet,
  );

  const { trigger: topUp, isMutating: loadingTopUp } = useSWRMutation(
    SWR_KEY.WALLET.TOP_UP,
    topUpBalance,
  );

  if (error?.message === "wallet not found")
    return (
      <InactiveWallet
        onActivate={() => {
          trigger(null, {
            onSuccess: () => {
              mutate(SWR_KEY.WALLET.GET_CURRENT_BALANCE);
            },
          });
        }}
        isLoading={isMutating}
      />
    );
  return (
    <div>
      <MyWallet
        activeBalance={wallet?.activeBalance || "0"}
        heldBalance={wallet?.heldBalance || "0"}
        onTopUp={(data) => {
          topUp(data, {
            onSuccess: (response) => {
              window.location.href = response.data.url;
            },
            onError: (error) => {
              console.log(error);
            },
          });
        }}
      />
    </div>
  );
}
