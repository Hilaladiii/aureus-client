import { appFetch } from "@/common/lib/fetch";
import { TResponseData } from "@/common/types/response";
import { TUser } from "./type";

export async function getMe(url: string) {
  const data = await appFetch<TResponseData<TUser>>({
    url,
    method: "GET",
  });
  return data;
}
