import { z } from "zod";

export const ReviewSchema = z
  .object({
    id: z.number().int(),
    reviewer_id: z.number().int(),
    ride_id: z.number().int(),
    reviewee_id: z.number().int(),
    driver_id: z.number().int(),
    rating: z.number().min(0).max(5),
    comment: z.string(),
  })
  .strict();

export const CreateReviewSchema = ReviewSchema.omit({ id: true });
export const ReviewFiltersSchema = ReviewSchema.partial();
export const UpdateReviewSchema = ReviewSchema.omit({
  id: true,
  driver_id: true,
  reviewee_id: true,
  reviewer_id: true,
  ride_id: true,
}).partial();
