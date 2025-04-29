"use client";
import { generateLinkAction } from "@/app/actions";
import { Input } from "../ui/input";
import Form from "next/form";
import SubmitButton from "../general/submitButton";
import { useState } from "react";
import ShareLink from "./shareLink";
import Container from "../general/container";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function GenerateLinkForm() {
  const [feedBack, setFeedback] = useState<
    { name: string; description:string; id: string; link: string | null } | undefined
  >(undefined);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    privacy: "private"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      privacy: value
    }));
  };

  const formAction = async (formData: FormData) => {
     const name = formData.get("name")?.toString() || "";
     const description = formData.get("description")?.toString() || "";

     if (!name || name.trim().length < 4) {
        toast.error("Feedback Name must be at least 4 characters long.");
        return;
      } 
      if (name.trim().length > 40) {
        toast.error("Feedback Name must be less than 40 characters.");
        return;
      }
      if (!description || description.trim().length < 10) {
        toast.error("Feedback Description must be at least 10 characters long.");
        return;
      } 
      if (description.trim().length > 500) {
        toast.error("Feedback Description must be less than 500 characters.");
        return;
      }
    const result = await generateLinkAction(formData);
    setFeedback(result);
    toast.success("Feedback link generated successfully!")
    localStorage.setItem("result", JSON.stringify(result));
    // console.log("Generated Link Result:", result);
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
                value={formData.name}
                onChange={handleChange}
                className={cn("flex-1 w-full px-4 py-2", )}
              />
              <Textarea
                placeholder="Enter feedback description..."
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="flex-1 w-full px-4 py-2"
              />
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <Label htmlFor="privacy" className="text-lg font-medium">
                Choose who can see the feedbacks
              </Label>
              <RadioGroup id="privacy" name="privacy" defaultValue="private" value={formData.privacy}
                onValueChange={handleRadioChange}>
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
              feedbackDescription={feedBack.description}
              link={feedBack.link || ""}
            />
          </div>
        )}
      </Container>
    </div>
  );
}
