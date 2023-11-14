import { z } from "zod";
import {
  CreateDriverSchema,
  DriverFiltersSchema,
  UpdateDriverSchema,
} from "../validation/driver";

export type CreateDriver = z.infer<typeof CreateDriverSchema>;
export type UpdateDriver = z.infer<typeof UpdateDriverSchema>;
export type DriverFilters = z.infer<typeof DriverFiltersSchema>;
