import { z } from "zod";

export const UserSchema = z
  .object({
    id: z.number().int(),
    username: z.string(),
    email: z.string().email(),
    first_name: z.string(),
    last_name: z.string(),
    phone_number: z.string().regex(/^[56]\d{7}$/, "Invalid phone number"),
    gender: z.enum(["m", "f"]),
    dob: z.coerce.date(),
    email_verified: z.coerce.date(),
    password: z.string(),
    role: z.array(z.enum(["user", "driver", "admin", "super_admin"])),
    image: z.string().url(),
  })
  .strict();

export const CreateUserSchema = UserSchema.omit({
  id: true,
  role: true,
  email_verified: true,
}).partial({ dob: true, gender: true, image: true });
export const UserFiltersSchema = UserSchema.omit({ role: true }).partial();
export const UpdateUserSchema = UserSchema.omit({
  id: true,
  role: true,
  email_verified: true,
  password: true,
}).partial();
export const UpdateUserPasswordSchema = z.object({
  old_password: z.string(),
  new_password: z.string(),
});
