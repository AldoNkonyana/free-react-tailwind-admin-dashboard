import { z } from "zod";

export const LocationSchema = z
  .object({
    id: z.number().int(),
    user_id: z.number().int(),
    driver_id: z.number().int(),
    owner_id: z.number().int(),
    type: z.enum([
      "origin",
      "destination",
      "user_location",
      "saved_place",
      "home_address",
    ]),
    alias: z.string(),
    address: z.string(),
    lat: z.number(),
    lng: z.number(),
  })
  .strict();

export const CreateLocationSchema = LocationSchema.omit({
  id: true,
  driver_id: true,
  owner_id: true,
  user_id: true,
});
export const LocationFiltersSchema = LocationSchema.partial();
export const UpdateLocationSchema = LocationSchema.omit({
  id: true,
  driver_id: true,
  owner_id: true,
  user_id: true,
}).partial();
