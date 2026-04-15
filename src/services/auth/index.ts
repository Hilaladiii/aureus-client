import { TResponseData } from "@/common/types/response";
import { TRegisterRequest, TSignInRequest } from "./type";
import { appFetch } from "@/common/lib/fetch";

export async function signIn(url: string, { arg }: { arg: TSignInRequest }) {
  const data = await appFetch<TResponseData<null>>({
    url,
    body: arg,
    method: "POST",
  });

  return data;
}

export async function register(
  url: string,
  { arg }: { arg: TRegisterRequest },
): TResponseData<null> {
  const data = await appFetch<TResponseData<null>>({
    url,
    body: arg,
    method: "POST",
  });

  return data;
}

export async function signOut(url: string) {
  const data = await appFetch<TResponseData<null>>({ url, method: "POST" });
  return data;
}
