import { submitFeedbackAction } from "@/app/actions";
import FeedbackNotFound from "@/components/feedback/feedbackNotFound";
import Container from "@/components/general/container";
import SubmitButton from "@/components/general/submitButton";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/db";
import { Feedbacks } from "@/db/schema";
import { cn } from "@/lib/utils";
import { eq } from "drizzle-orm";
import Link from "next/link";

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

  // console.log(">>>", result);
  if (feedbackId !== result[0]?.id || result[0].feedbackLink === null) {
    return <FeedbackNotFound />;
  }

  return (
    <div className="w-full">
      <Container>
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-4">
        <div className="text-xl font-semibold mt-6 sm:mt-8">
            <p className="mb-2">
              Send your feedback for :
              <span className="text-brand font-bold italic">
                &nbsp;{result[0]?.name}
              </span>
            </p>
            <p className="font-sm font-normal max-w-sm md:max-w-md ">{result[0]?.description}</p>
          </div>
          <div className="flex sm:items-center gap-2 flex-col sm:flex-row items-start">
            <Badge
              className={cn(
                "capitalize",
                result[0].privacy === "public" ? "bg-green-500" : "bg-red-500"
              )}
            >
              {result[0].privacy} Feedback
            </Badge>
            <div>
              {result[0].privacy === "public" && (
                <p>
                  {" "}
                  <Link
                    href={`/feedback/${feedbackId}/all-feedbacks`}
                    className="underline"
                  >
                    Click here
                  </Link>{" "}
                  to see others&apos; feedbacks
                </p>
              )}
              {result[0].privacy === "private" && (
                <p>Only Admin can see the feedbacks</p>
              )}
            </div>
          </div>
          <form
          action={submitFeedbackAction}
          className=" flex w-full flex-col gap-4"
        >
        
          <Input
            placeholder="Enter subject..."
            name="feedbackId"
            id="feedbackId"
            required
            type="hidden"
            value={feedbackId}
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
      
        
       

        <div className="max-w-2xl mx-auto  text-sm md:text-xl font-semibold mt-8">
          NOTE : Your feedback is completely anonymous and helps make things
          better. Be honest, be constructive, and share your thoughts freely.
        </div>
      </Container>
    </div>
  );
}
