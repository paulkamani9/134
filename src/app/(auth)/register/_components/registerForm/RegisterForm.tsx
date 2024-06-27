"use client";
import styles from "./RegisterForm.module.css";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "@/app/(auth)/_components/errorMessage/ErrorMessage";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import registration from "@/app/(auth)/_actions/register";

const RegisterForm = () => {
  const [success, setSuccess] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [pending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      registration(data).then((value) => {
        setSuccess(value.success);
        setError(value.error);
      });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <span>or</span>
      <input
        {...register("email")}
        type="email"
        name="email"
        placeholder="Enter Email"
        disabled={pending}
      />
      <ErrorMessage message={errors.email?.message} />
      <input
        {...register("name")}
        type="text"
        name="name"
        placeholder="Enter Name"
        disabled={pending}
      />
      <ErrorMessage message={errors.name?.message} />
      <input
        {...register("password")}
        type="password"
        name="password"
        placeholder="Create Password"
        disabled={pending}
      />
      <ErrorMessage message={errors.password?.message} />
      <input
        {...register("confirmPassword")}
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        disabled={pending}
      />
      <ErrorMessage message={errors.confirmPassword?.message} />
      <button disabled={pending}>{pending ? "Submitting" : "Submit"}</button>
    </form>
  );
};

export default RegisterForm;
