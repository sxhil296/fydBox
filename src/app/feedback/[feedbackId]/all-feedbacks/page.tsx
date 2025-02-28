import FeedbackNotFound from "@/components/feedback/feedbackNotFound";
import Container from "@/components/general/container";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { db } from "@/db";
import { Feedbacks } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function AllFeedbacksPage({
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

  if (result[0]?.privacy === "private") {
    return <FeedbackNotFound />;
  }
  if (feedbackId !== result[0]?.id || result[0].feedbackLink === null) {
    return <FeedbackNotFound />;
  }
  console.log(result[0].messages);
  return (
    <div className="w-full">
      <Container className="flex flex-col mt-6 sm:mt-8 gap-4">
        <div className="flex items-start flex-col gap-2 w-full max-w-2xl sm:flex-row justify-between sm:items-center">
          <span className="font-semibold italic text-brand">
            {result[0]?.name}
          </span>
          <Badge className={"capitalize bg-green-500"}>
            {result[0].privacy} Feedback
          </Badge>
        </div>
        <ScrollArea className="h-[500px] max-w-2xl">
          <div className="w-full flex flex-col gap-6">
            {result[0]?.messages.map((msg, index) => (
              <div
                key={index}
                className="p-2 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg w-fit max-w-xl"
                style={{
                  backgroundColor: "hsl(31, 97%, 72%)",
                  color: "#fff",
                  boxShadow: "0 4px 8px hsla(31, 97%, 40%, 0.5)",
                }}
              >
                <p className="text-lg text-black">{msg.message}</p>
                <p className="text-xs text-zinc-600">
                {new Date(msg.time).toLocaleString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true,
                      timeZone: 'Asia/Kolkata'
                    })}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Container>
    </div>
  );
}
