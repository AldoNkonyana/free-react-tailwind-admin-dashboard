import { z } from "zod";

export const PackageSchema = z
  .object({
    id: z.number().int(),
    ride_id: z.number().int(),
    name: z.string(),
    quantity: z.number().int(),
    weight: z.number(),
    images: z.array(z.string().url()),
  })
  .strict();

export const CreatePackageSchema = PackageSchema.omit({
  id: true,
});
export const PackageFiltersSchema = PackageSchema.omit({
  images: true,
}).partial();
export const UpdatePackageSchema = PackageSchema.omit({
  id: true,
  ride_id: true,
  images: true,
}).partial();
