import { z } from "zod";
import { UserSchema } from "./user";

export const SignupSchema = UserSchema.omit({
  id: true,
  role: true,
  email_verified: true,
}).partial({ dob: true, gender: true, image: true });

export const SignInSchema = UserSchema.pick({
  username: true,
  email: true,
  phone_number: true,
  password: true,
})
  .partial({ username: true, email: true, phone_number: true })
  .strict()
  .refine(
    (data) => !!data.username || !!data.email || !!data.phone_number,
    "At least one of 'username', 'email' or 'phone_number' is required"
  );

export const ForgotPasswordSchema = z
  .object({
    email: z.string().email().toLowerCase(),
  })
  .strict();

export const ResetPasswordSchema = z
  .object({
    token: z.string().uuid(),
  })
  .strict();
