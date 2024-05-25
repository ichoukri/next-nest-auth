"use client";

import React from "react";
import { AuthHeader } from "./auth-header";
import { FormInput } from "./from-input";
import { AuthFotter } from "./auth-fotter";

export const SignupForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const signup = async (FormData: FormData) => {
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
        action={signup}
      >
        <FormInput id="email" placeholder="Name" type="email" name="name" />
        <FormInput id="email" placeholder="Email" type="email" name="email" />
        <FormInput
          id="password"
          placeholder="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <AuthFotter type="signup" />
      </form>
    </div>
  );
};
