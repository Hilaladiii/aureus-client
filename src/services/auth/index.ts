import { TResponseData } from "@/types/response";
import { TRegisterRequest, TSignInRequest } from "./type";
import { appFetch } from "@/lib/fetch";

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
