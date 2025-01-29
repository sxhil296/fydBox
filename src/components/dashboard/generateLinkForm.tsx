import { generateLinkAction } from "@/app/actions";

import { Input } from "../ui/input";
import Form from "next/form";

import SubmitButton from "../general/submitButton";

export default function GenerateLinkForm() {
  return (
    <Form
      className="flex items-center gap-2 w-full max-w-3xl mx-auto"
      action={generateLinkAction}
    >
      <Input
        placeholder="Enter feedback name..."
        name="name"
        id="name"
        className="flex-1 w-full"
      />
      <SubmitButton title="Generate Link" />
    </Form>
  );
}
