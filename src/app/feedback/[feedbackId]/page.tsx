import { submitFeedbackAction } from "@/app/actions";
import FeedbackNotFound from "@/components/feedback/feedbackNotFound";
import SubmitButton from "@/components/general/submitButton";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/db";
import { Feedbacks } from "@/db/schema";
import { eq } from "drizzle-orm";


export default async function Feedback({
  params,
}: {
  params: Promise<{ feedbackId: string }>;
}) {
  const feedbackId = (await params).feedbackId;

  const result = await db
    .select()
    .from(Feedbacks)
    .where(eq(Feedbacks.id, feedbackId))
    .limit(1);

  if (feedbackId !== result[0]?.id) {
    return <FeedbackNotFound />;
  }

  return (
    <div className="max-w-container mx-auto my-20 flex flex-col gap-6 items-start">
      <form
        action={submitFeedbackAction}
        className="max-w-2xl mx-auto flex w-full flex-col gap-4"
      >
        <div className="text-xl font-semibold mt-10">
          Send your feedback for : {result[0]?.name}
        </div>
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

      <div className="max-w-2xl mx-auto  text-xl font-semibold mt-10">
        NOTE : Your feedback is completely anonymous and helps make things
        better. Be honest, be constructive, and share your thoughts freely.
      </div>
    </div>
  );
}
