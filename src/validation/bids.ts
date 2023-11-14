import { z } from "zod";

export const BidSchema = z
  .object({
    id: z.number().int(),
    driver_id: z.number().int(),
    ride_id: z.number().int(),
    status: z.enum([
      "not_selected",
      "selected",
      "declined",
      "winning",
      "cancelled",
    ]),
    amount: z.number().min(0),
  })
  .strict();

export const CreateBidSchema = BidSchema.omit({ id: true });
export const BidFiltersSchema = BidSchema.partial();
export const UpdateBidSchema = BidSchema.pick({
  amount: true,
}).partial();
