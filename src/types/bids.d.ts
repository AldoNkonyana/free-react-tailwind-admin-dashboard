import { z } from "zod";
import {
  BidFiltersSchema,
  CreateBidSchema,
  UpdateBidSchema,
} from "../validation/bids";

export type CreateBid = z.infer<typeof CreateBidSchema>;
export type BidFilters = z.infer<typeof BidFiltersSchema>;
export type UpdateBid = z.infer<typeof UpdateBidSchema>;
