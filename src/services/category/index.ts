import { appFetch } from "@/common/lib/fetch";
import { TResponsePaginate } from "@/common/types/response";
import { TCategory } from "./type";
import { TRequestParams } from "@/common/types/request";

export async function getCategories(url: string, params: TRequestParams) {
  const data = appFetch<TResponsePaginate<TCategory>>({
    url,
    params,
    method: "GET",
  });

  return data;
}
