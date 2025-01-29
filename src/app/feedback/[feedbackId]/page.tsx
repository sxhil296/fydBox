import { submitFeedbackAction } from "@/app/actions";
import SubmitButton from "@/components/general/submitButton";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Feedback() {
  return (
    <div className="max-w-container mx-auto my-20 flex flex-col gap-6 items-start">
      <div className="max-w-2xl mx-auto  text-xl font-semibold">
        Your feedback is completely anonymous and helps make things better. Be
        honest, be constructive, and share your thoughts freely.
      </div>
      <form
        action={submitFeedbackAction}
        className="max-w-2xl mx-auto flex w-full flex-col gap-4"
      >
        <Input
          placeholder="Enter subject..."
          name="subject"
          id="subject"
          required
        />
        <Textarea
          placeholder="Enter feedback..."
          name="feedback"
          id="feedback"
          required
          rows={5}
        />
        <SubmitButton title="Send Feedback" />
      </form>
    </div>
  );
}
