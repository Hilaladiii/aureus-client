import { z } from "zod";
export const stripeSchema = z.object({
  amount: z.coerce.number().min(1, "Amount must greater than 0"),
});

export type StripeForm = z.infer<typeof stripeSchema>;
