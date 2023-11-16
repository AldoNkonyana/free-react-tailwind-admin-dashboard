import { z } from "zod";
import {
  DriverSchema,
  CreateDriverSchema,
  DriverFiltersSchema,
  UpdateDriverSchema,
} from "../validation/driver";

export type DriverSchema = z.infer<typeof DriverSchema>;
export type CreateDriver = z.infer<typeof CreateDriverSchema>;
export type UpdateDriver = z.infer<typeof UpdateDriverSchema>;
export type DriverFilters = z.infer<typeof DriverFiltersSchema>;
