"use client";

import useSWRMutation from "swr/mutation";
import FormCreateAuction from "./components/form-create";
import { SWR_KEY } from "@/common/constants/swr-key";
import { createAuction } from "@/services/auction";
import { Toast } from "@/common/components/ui/sonner";
import { useRouter } from "next/navigation";
import { mutate } from "swr";

export default function Page() {
  const { push } = useRouter();
  const { trigger } = useSWRMutation(SWR_KEY.AUCTION.CREATE, createAuction);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="mt-25">
        <h1 className="font-mono text-5xl font-bold">
          NEW LISTING REGISTRATION
        </h1>
        <p className="text-left text-secondary40">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
          obcaecati?
        </p>
        <FormCreateAuction
          onSubmit={(data) => {
            trigger(data, {
              onSuccess: () => {
                Toast({
                  message: "Success listing your auction",
                  type: "success",
                });
                mutate(SWR_KEY.AUCTION.MY_AUCTIONS);
                push("/my-auctions");
              },
              onError: (err: Error) => {
                Toast({
                  message: err.message,
                  type: "error",
                });
              },
            });
          }}
        />
      </div>
    </div>
  );
}
