import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, Resolver, useForm } from "react-hook-form";
import { StripeForm, stripeSchema } from "../schema";
import { Field, FieldError } from "@/common/components/ui/field";

interface Props {
  onSubmit: (data: StripeForm) => void;
  isLoading: boolean;
}

export function FormTopUp({ onSubmit, isLoading }: Props) {
  const form = useForm<StripeForm>({
    resolver: zodResolver(stripeSchema) as unknown as Resolver<StripeForm>,
    defaultValues: {
      amount: 0,
    },
  });
  return (
    <div className="flex flex-col">
      <h3 className="text-sm font-mono font-bold tracking-widest uppercase border-b border-foreground/10 pb-4 mb-6">
        Initialize Deposit
      </h3>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <Controller
          name="amount"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input {...field} type="number" placeholder="USD $0.00" />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button
          size="lg"
          className="w-full h-14 rounded-none font-mono text-sm tracking-widest uppercase font-bold"
        >
          {isLoading ? "LOADING..." : "Proceed to Stripe"}
        </Button>
      </form>
    </div>
  );
}
