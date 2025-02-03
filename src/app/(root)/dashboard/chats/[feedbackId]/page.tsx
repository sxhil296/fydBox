import ChangeStatus from "@/components/dashboard/changeStatus";
import MoreOptions from "@/components/dashboard/moreOptions";
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
import { Feedbacks, Messages } from "@/db/schema";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import Link from "next/link";

export default async function FeedbackDetails({
  params,
}: {
  params: Promise<{ feedbackId: string }>;
}) {
  const feedbackId = (await params).feedbackId;
  const { userId } = await auth();
  if (!userId) return;

  const results = await db
    .select()
    .from(Feedbacks)
    .innerJoin(Messages, eq(Feedbacks.id, Messages.feedbackId))
    .where(and(eq(Feedbacks.id, feedbackId), eq(Feedbacks.userId, userId)));

  const feedbacks = results.map((result) => {
    return {
      ...result.feedbacks,
      messages: Array.isArray(result.messages)
        ? result.messages
        : [result.messages],
    };
  });

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
              <BreadcrumbPage>{feedbacks[0]?.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="w-full flex justify-between items-center my-4">
          <div className="flex items-center gap-4">
            <p className="text-2xl font-bold">{feedbacks[0]?.name}</p>
            <Badge
              className={cn(
                "capitalize",
                feedbacks[0]?.status === "active"
                  ? "bg-green-500"
                  : "bg-red-500"
              )}
            >
              {feedbacks[0].status}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <ChangeStatus feedback={feedbacks[0]} />
            <MoreOptions feedbackId={feedbackId}/>
          </div>
        </div>

        {/* link */}
        <div className="flex justify-start items-center gap-2 mb-5">
          <Link
            href={feedbacks[0]?.feedbackLink || "#"}
            target="_blank"
            className="text-blue-500 text-sm"
          >
            {feedbacks[0]?.feedbackLink || "The link has been deactivated!"}
          </Link>
          <Button variant={"ghost"}>Copy</Button>
        </div>

        {/* messages container */}
        <ScrollArea className="h-[500px] max-w-2xl">
          <div className="w-full flex flex-col gap-6">
            {feedbacks
              .flatMap((feedback) => feedback.messages)
              .map((msg, index) => (
                <div
                  key={index}
                  className="p-4 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg w-fit max-w-xl"
                  style={{
                    backgroundColor: "hsl(31, 97%, 72%)",
                    color: "#fff",
                    boxShadow: "0 4px 8px hsla(31, 97%, 40%, 0.5)",
                  }}
                >
                  <p className="text-lg text-black">{msg.message}</p>
                  <p className="text-xs text-zinc-600">
                    {new Date(String(msg.createTs)).toLocaleDateString()}
                  </p>
                </div>
              ))}
          </div>
        </ScrollArea>
      </Container>
    </div>
  );
}
