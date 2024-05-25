"use client";

import React from "react";
import { AuthHeader } from "./auth-header";
import { AuthFotter } from "../_components/auth-fotter";
import { FormInput } from "./from-input";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const login = async (FormData: FormData) => {
    const name = FormData.get("name");
    const email = FormData.get("email");
    const password = FormData.get("password");
    console.log({ name, email, password });
  };

  return (
    <div className="flex flex-col gap-5 p-8 w-full max-w-lg bg-white rounded-lg">
      <AuthHeader />
      <form
        id="login"
        className="flex flex-col gap-4"
        noValidate
        action={login}
      >
        <FormInput id="email" placeholder="Email" type="email" name="email" />
        <FormInput
          id="password"
          placeholder="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <AuthFotter type="login" />
      </form>
    </div>
  );
};
