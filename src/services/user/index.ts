import { appFetch } from "@/lib/fetch";
import { TResponseData } from "@/types/response";
import { TUser } from "./type";

export async function getMe(url: string) {
  const data = await appFetch<TResponseData<TUser>>({
    url,
    method: "GET",
  });
  return data;
}
