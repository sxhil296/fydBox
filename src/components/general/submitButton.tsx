"use client";
import { LoaderCircle } from "lucide-react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ title }: { title: string }) {
  const { pending } = useFormStatus();
  console.log("PENDING>>", pending);
  return (
    <Button className="relative w-60 font-semibold">
      <span className={pending ? "text-transparent" : ""}>{title}</span>
      {pending && (
        <span className="flex justify-center items-center absolute w-full h-full text-slate-400">
          <LoaderCircle className="animate-spin" />
        </span>
      )}
    </Button>
  );
}
