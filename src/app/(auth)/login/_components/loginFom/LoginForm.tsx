"use client";

import styles from "./LoginForm.module.css";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "@/app/(auth)/_components/errorMessage/ErrorMessage";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import login from "@/app/(auth)/_actions/login";

const LoginForm = () => {
  const [success, setSuccess] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [pending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(data).then((value) => {
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
        placeholder="Email"
        disabled={pending}
      />
      <ErrorMessage message={errors.email?.message} />
      <input
        {...register("password")}
        type="password"
        name="password"
        placeholder="Password"
        disabled={pending}
      />
      <ErrorMessage message={errors.password?.message} />
      <button disabled={pending}>{pending ? "Submitting" : "Submit"}</button>
    </form>
  );
};

export default LoginForm;
