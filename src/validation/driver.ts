import { z } from "zod";

export const DriverSchema = z
  .object({
    id: z.number().int(),
    user_id: z.number().int(),
    license_number: z.string(),
    license_issue: z.coerce.date(),
    license_exp: z.coerce.date(),
    status: z.enum(["unavailable", "available", "busy"]),
    is_booked: z.boolean(),
    is_online: z.boolean(),
    is_verified: z.boolean(),
    balance: z.number(),
  })
  .strict();

export const CreateDriverSchema = DriverSchema.pick({
  user_id: true,
  license_number: true,
  license_issue: true,
  license_exp: true,
});
export const DriverFiltersSchema = DriverSchema.partial();
export const UpdateDriverSchema = DriverSchema.pick({
  license_number: true,
  license_issue: true,
  license_exp: true,
}).partial();
