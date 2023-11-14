import { z } from "zod";

export const IdSchema = z.coerce.number();

export const UuidSchema = z.object({ token: z.string().uuid() }).strict();
