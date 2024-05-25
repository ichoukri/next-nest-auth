import React from "react";
import { LoginForm } from "../_components/login-form";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-500">
      <LoginForm />
    </main>
  );
};

export default page;
