"use client";
import { generateLinkAction } from "@/app/actions";
import { Input } from "../ui/input";
import Form from "next/form";
import SubmitButton from "../general/submitButton";
import { useState } from "react";
import ShareLink from "./shareLink";

export default function GenerateLinkForm() {
  const [feedBack, setFeedback] = useState<
    { name: string; id: string; link:string } | undefined
  >(undefined);
  const formAction = async (formData: FormData) => {
    const result = await generateLinkAction(formData);
    setFeedback(result);
    console.log("Generated Link Result:", result);
  };
  return (
    <>
      <Form
        className="flex items-center gap-2 w-full max-w-3xl mx-auto"
        action={formAction}
      >
        <Input
          placeholder="Enter feedback name..."
          name="name"
          id="name"
          className="flex-1 w-full"
        />
        <SubmitButton title="Generate Link" />
      </Form>
      {feedBack && <ShareLink feedbackName={feedBack.name} link={feedBack.link}/>}
    </>
  );
}
