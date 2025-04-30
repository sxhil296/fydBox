"use client";
import { RefreshCcw } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function ReloadButton() {
  const router = useRouter();
  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      title="Refresh Page"
      onClick={router.refresh}
      className="cursor-pointer"
    >
      <span className="sr-only">Refresh Page</span>
      <RefreshCcw size={20}/>
    </Button>
  );
}
