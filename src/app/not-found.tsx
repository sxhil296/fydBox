import React from "react";
import Link from "next/link";
import Container from "@/components/general/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="w-full">
      <Container className="flex flex-col gap-4 justify-center max-w-md mx-auto min-h-[60dvh]">
        <h1 className="text-6xl font-bold text-center">404</h1>
        <p className="mt-4 text-xl">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button asChild>
          <Link href="/">Go back to Home</Link>
        </Button>
      </Container>
    </div>
  );
}
