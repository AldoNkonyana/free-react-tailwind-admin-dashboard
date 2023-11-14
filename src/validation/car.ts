import { z } from "zod";

export const CarSchema = z
  .object({
    id: z.number().int(),
    driver_id: z.number().int(),
    brand: z.string(),
    model: z.string(),
    year: z.coerce.date().optional(),
    type: z.string(),
    color: z.string(),
    vin: z.string().length(17).toUpperCase(),
    images: z.array(z.string().url()),
  })
  .strict();

export const CreateCarSchema = CarSchema.omit({ id: true });
export const CarFiltersSchema = CarSchema.omit({ images: true }).partial();
export const UpdateCarSchema = CarSchema.omit({
  id: true,
  driver_id: true,
}).partial();
