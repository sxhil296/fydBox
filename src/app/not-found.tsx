import React from "react";
import Link from "next/link";
import Container from "@/components/general/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="w-full">
      <Container className="flex justify-center items-center min-h-[60dvh]">
        <h1 className="text-6xl font-bold ">404</h1>
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
