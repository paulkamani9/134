"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";

const login = async (data: z.infer<typeof LoginSchema>) => {
  const validateData = LoginSchema.safeParse(data);

  if (!validateData.success) return { error: "Invalid Credentials" };

  return { success: "Login successful" };
};

export default login;
