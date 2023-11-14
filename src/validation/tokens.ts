import { z } from "zod";

export const EmailVerificationTokenSchema = z
  .object({
    token: z.string(),
    user_id: z.number().int(),
    created_at: z.coerce.date(),
    expires_at: z.coerce.date(),
  })
  .strict();

export const PasswordResetTokenSchema = z
  .object({
    token: z.string(),
    user_id: z.number().int(),
    created_at: z.coerce.date(),
    expires_at: z.coerce.date(),
  })
  .strict();
