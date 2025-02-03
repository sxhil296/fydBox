import ChangeStatus from "@/components/dashboard/changeStatus";
import Container from "@/components/general/container";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { db } from "@/db";
import { Feedbacks } from "@/db/schema";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import Link from "next/link";

const MOCK_MESSAGES = [
  { text: "Thank you for your feedback!", time: "10:15 AM" },
  {
    text: "We appreciate your input. We appreciate your input.",
    time: "10:20 AM",
  },
  { text: "Your suggestions have been noted.", time: "10:25 AM" },
  { text: "We'll work on the improvements soon!", time: "10:30 AM" },
  { text: "Great suggestions! Keep them coming.", time: "10:35 AM" },
  { text: "This will help us refine our service.", time: "10:40 AM" },
  { text: "Your feedback means a lot!", time: "10:45 AM" },
  {
    text: "We'll keep you updated on the changes. We'll keep you updated on the changes.",
    time: "10:50 AM",
  },
  {
    text: "Thanks for taking the time to share your thoughts.",
    time: "10:55 AM",
  },
  { text: "We are committed to making this better.", time: "11:00 AM" },
];

export default async function FeedbackDetails({
  params,
}: {
  params: Promise<{ feedbackId: string }>;
}) {
  const feedbackId = (await params).feedbackId;
  const { userId } = await auth();
  if (!userId) return;

  const feedback = await db
    .select()
    .from(Feedbacks)
    .where(and(eq(Feedbacks.id, feedbackId), eq(Feedbacks.userId, userId)));

  console.log("FEEDBACK DETAILS >>>>> ", feedback);
  return (
    <div className="w-full my-10">
      <Container>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{feedback[0]?.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="w-full flex justify-between items-center my-4">
          <div className="flex items-center gap-4">
            <p className="text-2xl font-bold">{feedback[0]?.name}</p>
            <Badge
              className={cn(
                "capitalize",
                feedback[0]?.status === "active" ? "bg-green-500" : "bg-red-500"
              )}
            >
              {feedback[0].status}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <ChangeStatus  feedback={feedback[0]}/>
            other options
          </div>
        </div>

        {/* link */}
        <div className="flex justify-start items-center gap-2 mb-5">
          <Link
            href={feedback[0]?.feedbackLink || "#"}
            target="_blank"
            className="text-blue-500 text-sm"
          >
            {feedback[0]?.feedbackLink || "The link has been deactivated!"} 
          </Link>
          <Button variant={"ghost"}>Copy</Button>
        </div>

        {/* messages container */}
        <ScrollArea className="h-[550px] max-w-2xl">
          <div className="w-full flex flex-col gap-6">
            {MOCK_MESSAGES.map((msg, index) => (
              <div
                key={index}
                className="p-4 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg w-fit max-w-xl"
                style={{
                  backgroundColor: "hsl(31, 97%, 72%)",
                  color: "#fff",
                  boxShadow: "0 4px 8px hsla(31, 97%, 40%, 0.5)",
                }}
              >
                <p className="text-lg text-black">{msg.text}</p>
                <p className="text-xs text-zinc-600">{msg.time}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Container>
    </div>
  );
}
