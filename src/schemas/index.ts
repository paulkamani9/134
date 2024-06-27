import { z } from "zod";

export const RegisterSchema = z
  .object({
    email: z.string().email({
      message: "Email is required",
    }),

    name: z.string().min(1, {
      message: "Name is required",
    }),

    password: z.string().min(6, {
      message: "Password must be up to 6 characters",
    }),

    confirmPassword: z.string().min(6, { message: "Please confirm password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });

  
export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Please Enter Password",
  }),
});
