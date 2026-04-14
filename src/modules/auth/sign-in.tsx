"use client";

import useSWRMutation from "swr/mutation";
import FormSignIn from "./components/form-sign-in";
import { signIn } from "@/services/auth";
import { Toast } from "@/components/ui/sonner";
import { useRouter } from "next/navigation";
import { mutate } from "swr";
import { SWR_KEY } from "@/constants/swr-key";

export default function Page() {
  const { push } = useRouter();
  const { trigger, isMutating } = useSWRMutation(SWR_KEY.AUTH.SIGN_IN, signIn);
  return (
    <div className="flex items-center justify-center h-screen">
      <FormSignIn
        onSubmit={(payload) =>
          trigger(payload, {
            onSuccess: () => {
              push("/live-auctions");
              mutate(SWR_KEY.USER.ME);
            },
            onError: (err: Error) => {
              Toast({ message: err.message, type: "error" });
            },
            throwOnError: false,
          })
        }
        isLoading={isMutating}
      />
    </div>
  );
}
