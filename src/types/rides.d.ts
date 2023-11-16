import { z } from "zod";
import {
  CreateRideSchema,
  RideFiltersSchema,
  RideSchema,
  UpdateRideSchema,
} from "../validation/ride";

export type Ride = z.infer<typeof RideSchema>;
export type CreateRide = z.infer<typeof CreateRideSchema>;
export type RideFilters = z.infer<typeof RideFiltersSchema>;
export type UpdateRide = z.infer<typeof UpdateRideSchema>;
