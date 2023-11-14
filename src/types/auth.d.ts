import { z } from "zod";
import { SignInSchema, SignupSchema } from "../validation/auth";

export type Signup = z.infer<typeof SignupSchema>;
export type SignIn = z.infer<typeof SignInSchema>;
export type UsernameSignIn = Required<Pick<SignIn, "username" | "password">>;
export type EmailSignIn = Required<Pick<SignIn, "email" | "password">>;
export type PhoneNumberSignIn = Required<
  Pick<SignIn, "phone_number" | "password">
>;
