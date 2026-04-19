import { appFetch } from "@/common/lib/fetch";
import { TRequestParams } from "@/common/types/request";
import { TResponseData, TResponsePaginate } from "@/common/types/response";
import { AuctionForm } from "@/modules/my-auction/create/schema";
import { TAuction } from "./type";

export async function createAuction(
  url: string,
  { arg }: { arg: AuctionForm },
) {
  const formData = new FormData();
  formData.append("name", arg.name);
  formData.append("description", arg.description);
  formData.append("categoryId", arg.categoryId);
  formData.append("startPrice", String(arg.startPrice));
  formData.append("bidIncrement", String(arg.bidIncrement));
  formData.append("startTime", new Date(arg.startTime).toISOString());
  formData.append("endTime", new Date(arg.endTime).toISOString());

  arg.images.map((img) => formData.append("images", img));

  const data = await appFetch<TResponseData<null>>({
    url,
    body: formData,
    method: "POST",
  });

  return data;
}

export async function getMyAuctions(url: string, params?: TRequestParams) {
  const data = await appFetch<TResponsePaginate<TAuction>>({
    url,
    method: "GET",
    params,
  });
  return data;
}
