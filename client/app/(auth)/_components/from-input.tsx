"use client";

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type idType = "email" | "password";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: idType;
  placeholder: string;
  type?: string;
  disabled?: boolean;
  showPassword?: boolean;
  setShowPassword?: (value: boolean) => void;
}

export const FormInput = ({
  id,
  placeholder,
  type = "text",
  disabled,
  showPassword,
  setShowPassword,
  ...props
}: FormInputProps) => {
  return (
    <>
      <Label className="flex flex-col relative">
        <Input
          id={id}
          placeholder={placeholder}
          type={type}
          className="py-6 outline-none font-medium text-base text-[#515164] focus:border-[#9c9cac] rounded-lg px-4"
          disabled={disabled}
          {...props}
        />
        {id === "password" &&
          setShowPassword &&
          (showPassword ? (
            <Eye
              className="h-6 w-6 cursor-pointer absolute top-3 right-3"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <EyeOff
              className="h-6 w-6 cursor-pointer absolute top-3 right-3"
              onClick={() => setShowPassword(true)}
            />
          ))}
      </Label>
    </>
  );
};
