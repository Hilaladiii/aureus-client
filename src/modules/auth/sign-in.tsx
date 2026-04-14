"use client";

import useSWRMutation from "swr/mutation";
import FormSignIn from "./components/form-sign-in";
import { signIn } from "@/services/auth";
import { Toast } from "@/components/ui/sonner";
import { useRouter } from "next/navigation";

export default function Page() {
  const { push } = useRouter();
  const { trigger, isMutating } = useSWRMutation("users/login", signIn);
  return (
    <div className="flex items-center justify-center h-screen">
      <FormSignIn
        onSubmit={(payload) =>
          trigger(payload, {
            onSuccess: () => {
              push("/live-auctions");
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
