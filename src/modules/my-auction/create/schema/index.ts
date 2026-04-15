import { z } from "zod";

export const auctionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "description is required"),
  startPrice: z.coerce.number().min(1, "Start price must be greater than 0"),
  bidIncrement: z.coerce
    .number()
    .min(1, "Bid increment must be greater than 0"),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
  categoryId: z.string().min(1, "category is required"),
  images: z.array(z.instanceof(File)),
});

export type AuctionForm = z.infer<typeof auctionSchema>;
