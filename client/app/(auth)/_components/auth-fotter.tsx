import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface AuthFotterProps {
  type: "login" | "signup";
}

export const AuthFotter = ({ type = "login" }: AuthFotterProps) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-y-4",
        type === "signup" && "mt-4"
      )}
    >
      {type === "login" && (
        <Link
          href="/resetpassword"
          className="ml-auto font-semibold text-[#9c9cac]"
        >
          Forgot Password?
        </Link>
      )}

      <Button
        type="submit"
        className="text-base py-6 flex justify-center relative disabled:opacity-80"
      >
        {type === "login" ? "Login" : "Sign up"}
      </Button>
      <div className="flex items-center justify-center gap-3 pb-3 text-[#9c9cac]">
        <span className="text-base">
          {type === "login"
            ? `Don't have an account?`
            : `Already have an account?`}
        </span>
        <Link
          href={type === "login" ? "/signup" : "/login"}
          className="ml-0 text-base font-semibold text-[#4D4D4D] "
        >
          {type === "login" ? "Sign up" : "Login"}
        </Link>
      </div>
    </div>
  );
};
