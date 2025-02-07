"use client";
import { generateLinkAction } from "@/app/actions";
import { Input } from "../ui/input";
import Form from "next/form";
import SubmitButton from "../general/submitButton";
import { useState } from "react";
import ShareLink from "./shareLink";
import Container from "../general/container";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function GenerateLinkForm() {
  const [feedBack, setFeedback] = useState<
    { name: string; id: string; link: string | null } | undefined
  >(undefined);

  const formAction = async (formData: FormData) => {
    const result = await generateLinkAction(formData);
    setFeedback(result);
    localStorage.setItem("result", JSON.stringify(result));
    console.log("Generated Link Result:", result);
  };

  return (
    <div className="w-full py-8">
      <Container>
        {!feedBack && (
          <Form
            className="flex flex-col justify-start items-start gap-4 sm:gap-6 w-full max-w-xl mx-auto"
            action={formAction}
          >
            <div className="flex flex-col items-start gap-2 w-full">
              <Label htmlFor="name" className="text-lg font-medium">
                Feedback Name
              </Label>
              <Input
                placeholder="Enter feedback name..."
                name="name"
                id="name"
                className="flex-1 w-full px-4 py-2"
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <Label htmlFor="privacy" className="text-lg font-medium">Choose who can see the feedbacks</Label>
              <RadioGroup id="privacy" name="privacy" defaultValue="private">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="private" id="r1" />
                  <Label htmlFor="r1">Only Me</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="public" id="r2" />
                  <Label htmlFor="r2">Anyone with the feedback link</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="w-full">
              <SubmitButton title="Generate Link" className="w-full" />
            </div>
          </Form>
        )}
        {feedBack && (
          <div className="mt-8">
            <ShareLink
              feedbackName={feedBack.name}
              link={feedBack.link || ""}
            />
          </div>
        )}
      </Container>
    </div>
  );
}
