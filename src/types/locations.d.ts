import { z } from "zod";
import {
  CreateLocationSchema,
  LocationFiltersSchema,
  LocationSchema,
  UpdateLocationSchema,
} from "../validation/locations";

export type Location = z.infer<typeof LocationSchema>;
export type CreateLocation = z.infer<typeof CreateLocationSchema>;
export type LocationFilters = z.infer<typeof LocationFiltersSchema>;
export type UpdateLocation = z.infer<typeof UpdateLocationSchema>;
