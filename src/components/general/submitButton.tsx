"use client";
import { LoaderCircle } from "lucide-react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { twMerge } from "tailwind-merge";

export default function SubmitButton({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const { pending } = useFormStatus();
  // console.log("PENDING>>", pending);
  return (
    <Button
      className={twMerge(
        "relative w-full font-semibold cursor-pointer",
        className
      )}
      disabled={pending}
    >
      <span className={pending ? "text-transparent" : ""}>{title}</span>
      {pending && (
        <span className="flex justify-center items-center absolute w-full h-full text-slate-400">
          <LoaderCircle className="animate-spin" />
        </span>
      )}
    </Button>
  );
}
