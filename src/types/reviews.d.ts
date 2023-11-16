import { z } from "zod";
import { z } from "zod";
import {
  ReviewSchema,
  CreateReviewSchema,
  ReviewFiltersSchema,
  UpdateReviewSchema,
} from "../validation/reviews";

export type Review = z.infer<typeof ReviewSchema>;
export type CreateReview = z.infer<typeof CreateReviewSchema>;
export type ReviewFilters = z.infer<typeof ReviewFiltersSchema>;
export type UpdateReview = z.infer<typeof UpdateReviewSchema>;
