import { z } from "zod";
import {
  CreateRideSchema,
  RideFiltersSchema,
  UpdateRideSchema,
} from "../validation/ride";

export type CreateRide = z.infer<typeof CreateRideSchema>;
export type RideFilters = z.infer<typeof RideFiltersSchema>;
export type UpdateRide = z.infer<typeof UpdateRideSchema>;
