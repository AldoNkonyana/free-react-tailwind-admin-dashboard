import { z } from "zod";
import {
  CarFiltersSchema,
  CreateCarSchema,
  UpdateCarSchema,
} from "../validation/car";

export type CreateCar = z.infer<typeof CreateCarSchema>;
export type CarFilters = z.infer<typeof CarFiltersSchema>;
export type UpdateCar = z.infer<typeof UpdateCarSchema>;
