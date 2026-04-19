import { appFetch } from "@/common/lib/fetch";
import { TResponseData } from "@/common/types/response";
import { TWallet, TWalletTopUp } from "./type";
import { StripeForm } from "@/modules/wallet/schema";

export async function getCurrentBalance(url: string) {
  const data = await appFetch<TResponseData<TWallet>>({
    url,
    method: "GET",
  });

  return data;
}

export async function activateWallet(url: string) {
  const data = await appFetch<TResponseData<null>>({
    url,
    method: "POST",
  });

  return data;
}

export async function topUpBalance(url: string, { arg }: { arg: StripeForm }) {
  const data = await appFetch<TResponseData<TWalletTopUp>>({
    url,
    method: "POST",
    body: arg,
  });

  return data;
}
