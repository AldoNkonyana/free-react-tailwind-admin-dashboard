import { z } from "zod";
import { LocationSchema } from "./locations";
import { PackageSchema } from "./packages";

export const RideSchema = z
  .object({
    id: z.number().int(),
    customer_id: z.number().int(),
    origin_id: z.number().int(),
    destination_id: z.number().int(),
    driver_id: z.number().int().optional(),
    category: z.enum(["ride", "delivery", "moving"]),
    seats: z.number().int().min(0),
    status: z.enum([
      "awaiting_bids",
      "picking_up",
      "dropping_off",
      "awaiting_confirmation",
      "complete",
      "cancelled",
    ]),
    extra_info: z.string().optional(),
    scheduled_date_time: z.coerce.date(),
    cost: z.number().optional(),
    is_complete: z.boolean(),
    pickup: z.coerce.date().optional(),
    dropoff: z.coerce.date().optional(),
    created_at: z.coerce.date(),
    updated_at: z.coerce.date(),
    origin: LocationSchema.omit({
      id: true,
      user_id: true,
      owner_id: true,
      driver_id: true,
    }),
    destination: LocationSchema.omit({
      id: true,
      user_id: true,
      owner_id: true,
      driver_id: true,
    }),
    packages: z
      .array(PackageSchema.omit({ id: true, ride_id: true }))
      .optional(),
  })
  .strict();

export const CreateRideSchema = RideSchema.omit({
  id: true,
  origin_id: true,
  destination_id: true,
  driver_id: true,
  package_id: true,
  status: true,
  cost: true,
  pickup: true,
  dropoff: true,
  is_complete: true,
  created_at: true,
  updated_at: true,
});
export const RideFiltersSchema = RideSchema.omit({
  origin: true,
  destination: true,
  packages: true,
}).partial();
export const UpdateRideSchema = CreateRideSchema.omit({
  customer_id: true,
  origin: true,
  destination: true,
  packages: true,
  category: true,
}).partial();
