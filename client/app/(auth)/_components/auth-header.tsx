"use client";

import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

export const AuthHeader = () => {
  return (
    <div className="flex flex-col w-full gap-4 pt-3">
      <div className="text-[#313140] text-2xl font-medium  ">
        Welcome to Next Nest Auth 🔐
      </div>
      <div className="text-[#9c9cac]">
        By logging in or creating an account, you agree to our{" "}
        <Link
          target="_blank"
          href="http://localhost:3000/tos"
          className="text-[#4D4D4D] underline"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          target="_blank"
          href={"http://localhost:3000/privacy"}
          className="text-[#4D4D4D] underline"
        >
          Privacy Policy.
        </Link>
      </div>
      <Button
        variant="outline"
        className="text-base py-6 flex justify-center border gap-5"
        onClick={() => {}}
      >
        {/* <FcGoogle className="h-6 w-6" /> */}
        Continue With Google
      </Button>
      <div className="relative my-3">
        <div className="border-t border-solid border-[#f5f6f9] border-b-0"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[#cbced1] px-2">
          or
        </div>
      </div>
    </div>
  );
};
