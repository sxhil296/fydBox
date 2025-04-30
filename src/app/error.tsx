"use client";

import Container from "@/components/general/container";

import NextError from "next/error";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <Container >
      <div className="flex h-screen w-screen max-w-md px-4 mx-auto items-center justify-center">
      {/* <h1 className="text-3xl font-semibold">Error : {error.message}</h1> */}
      <NextError statusCode={500} title={error.message} />
    </div>
    </Container>
  );
}
