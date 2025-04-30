import ChangePrivacy from "@/components/dashboard/changePrivacy";
import ChangeStatus from "@/components/dashboard/changeStatus";
import MoreOptions from "@/components/dashboard/moreOptions";
import Container from "@/components/general/container";
import CopyButton from "@/components/general/copyButton";
import ReloadButton from "@/components/general/reloadButton";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { ScrollArea } from "@/components/ui/scroll-area";
import { db } from "@/db";
import { Feedbacks } from "@/db/schema";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";

import Link from "next/link";
import { notFound } from "next/navigation";

export default async function FeedbackDetails({
  params,
}: {
  params: Promise<{ feedbackId: string }>;
}) {
  const feedbackId = (await params).feedbackId;
  const { userId } = await auth();
  if (!userId) return;

  const feedbacks = await db
    .select()
    .from(Feedbacks)

    .where(and(eq(Feedbacks.id, feedbackId), eq(Feedbacks.userId, userId)));

  console.log("FEEDBACK DETAILS >>>> ", feedbacks[0].messages);
  if (!feedbacks.length || feedbackId !== feedbacks[0].id) {
    notFound();
  }

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
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0 my-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <p className="text-2xl font-bold">{feedbacks[0]?.name}</p>
              <Badge
                className={cn(
                  "capitalize",
                  feedbacks[0]?.status === "active"
                    ? "bg-yellow-500"
                    : "bg-gray-500"
                )}
              >
                {feedbacks[0]?.status}
              </Badge>
              <Badge
                className={cn(
                  "capitalize",
                  feedbacks[0]?.privacy === "public"
                    ? "bg-green-500"
                    : "bg-red-500"
                )}
              >
                {feedbacks[0]?.privacy}
              </Badge>
            </div>
            <p className="text-sm max-w-sm md:max-w-md font-normal">
              {feedbacks[0]?.description}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ChangePrivacy feedback={feedbacks[0]} />
            <ChangeStatus feedback={feedbacks[0]} />
            <MoreOptions feedbackId={feedbackId} />
          </div>
        </div>

        {/* Link Section */}
        <div className="flex justify-between items-center mb-5">
          <div className="flex justify-start items-center gap-2">
            <Link
              href={feedbacks[0]?.feedbackLink || "#"}
              target="_blank"
              className="text-blue-500 text-sm truncate max-w-[30ch] md:max-w-[120ch]"
            >
              {feedbacks[0]?.feedbackLink || "The link has been deactivated!"}
            </Link>
            <CopyButton textToCopy={feedbacks[0]?.feedbackLink || ""} />
          </div>
          <ReloadButton />
        </div>

        {/* Messages Container */}
        <ScrollArea className="h-[500px] max-w-2xl">
          <div className="w-full flex flex-col gap-6">
            {feedbacks[0]?.messages.map((msg, index) => (
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
                  {new Date(msg.time).toLocaleString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                    timeZone: "Asia/Kolkata",
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
