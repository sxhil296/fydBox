'use client'
import Container from "@/components/general/container";
import { Button } from "@/components/ui/button";
import { CheckCheckIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SendPage() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <div className="w-full">
      <Container className="flex justify-center items-center min-h-[80dvh]">
        <div className="flex flex-col gap-4 items-center justify-center">
            <CheckCheckIcon className="w-8 h-auto"/>
          <p className="text-xl font-medium text-center">
            Your feedback has been sent successfully and{" "}
            <strong>anonmously</strong>!
          </p>
          <div className="flex justify-center items-center flex-col md:flex-row gap-4">
            <Button asChild>
              <Link href={"/"}>Generate Your Feedback Link</Link>
            </Button>
            <Button variant={"outline"} onClick={goBack}>
              Send Another Message
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
