import { z } from "zod";
import { CreateDocSchema, DocFiltersSchema } from "../validation/doc";

export type CreateDoc = z.infer<typeof CreateDocSchema>;
export type DocFilters = z.infer<typeof DocFiltersSchema>;
