"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

const registration = async (data: z.infer<typeof RegisterSchema>) => {
  const validateData = RegisterSchema.safeParse(data);

  if (!validateData.success) return { error: "Invalid Credentials" };

  return { success: "Email sent to you. Please Verify your Email" };
};
export default registration;
