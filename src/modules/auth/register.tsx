"use client";

import { register } from "@/services/auth";
import FormRegister from "./components/form-register";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { Toast } from "@/components/ui/sonner";
import { SWR_KEY } from "@/constants/swr-key";

export default function Page() {
  const { trigger, isMutating } = useSWRMutation(
    SWR_KEY.USER.REGISTER,
    register,
  );
  const { push } = useRouter();
  return (
    <div className="flex items-center justify-center h-screen">
      <FormRegister
        onSubmit={(payload) => {
          trigger(payload, {
            onSuccess: () => {
              push("/sign-in");
            },
            onError: (err: Error) => {
              Toast({
                type: "error",
                message: err.message,
              });
            },
            throwOnError: false,
          });
        }}
        isLoading={isMutating}
      />
    </div>
  );
}
