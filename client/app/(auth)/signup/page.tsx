import React from "react";
import { SignupForm } from "../_components/signup-form";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-500">
      <SignupForm />
    </main>
  );
};

export default page;
