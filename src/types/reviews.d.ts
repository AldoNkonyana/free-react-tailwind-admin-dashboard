import { z } from "zod";
import {
  CreateReviewSchema,
  ReviewFiltersSchema,
  UpdateReviewSchema,
} from "../validation/reviews";

export type CreateReview = z.infer<typeof CreateReviewSchema>;
export type ReviewFilters = z.infer<typeof ReviewFiltersSchema>;
export type UpdateReview = z.infer<typeof UpdateReviewSchema>;
