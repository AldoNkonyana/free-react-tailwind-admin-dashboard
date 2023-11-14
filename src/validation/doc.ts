import { z } from "zod";

export const DocSchema = z
  .object({
    loc: z.string().url(),
    driver_id: z.number().int(),
  })
  .strict();

export const CreateDocSchema = DocSchema;
export const DocFiltersSchema = DocSchema.partial();
