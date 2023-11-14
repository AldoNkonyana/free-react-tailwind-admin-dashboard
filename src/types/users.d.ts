import { z } from "zod";
import {
  CreateUserSchema,
  UpdateUserPasswordSchema,
  UpdateUserSchema,
  UserFiltersSchema,UserSchema
} from "../validation/user";

export type User = z.infer<typeof UserSchema>;
export type CreateUser = z.infer<typeof CreateUserSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>;
export type UserFilters = z.infer<typeof UserFiltersSchema>;
export type UpdateUserPassword = z.infer<typeof UpdateUserPasswordSchema>;
