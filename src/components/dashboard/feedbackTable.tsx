"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CheckCheckIcon, Copy, PlusCircle } from "lucide-react";
import type { Feedbacks } from "@/db/schema";
import { cn } from "@/lib/utils";
import Container from "@/components/general/container";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

interface FeedbackTableProps {
  feedbacks: (typeof Feedbacks.$inferSelect)[];
}

export default function FeedbackTable({ feedbacks }: FeedbackTableProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <Container className="flex-grow flex flex-col gap-6 md:gap-10">
        <div className="w-full justify-between flex items-baseline">
          <h2 className="text-2xl font-medium mb-4">Your feedbacks</h2>
          <Button variant={"ghost"}>
            <Link
              href={"/dashboard/create"}
              className="flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-auto" />
              Create
            </Link>
          </Button>
        </div>
        {loading && (
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className=" flex items-center justify-between px-4 py-2 rounded-md"
              >
                <Skeleton className="h-8 bg-zinc-600 rounded w-full"></Skeleton>

              </div>
            ))}
          </div>
        )}
        {feedbacks.length > 0 && !loading && (
          <ScrollArea className="h-[500px] w-full">
            <Table>
              <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                  <TableHead className="p-2 md:p-4">Date</TableHead>
                  <TableHead className="p-2 md:p-4">Name</TableHead>
                  <TableHead className="p-2 md:p-4 text-center">
                    Received
                  </TableHead>
                  <TableHead className="p-2 md:p-4 hidden md:table-cell text-center">
                    Link
                  </TableHead>
                  <TableHead className="p-2 md:p-4 text-center">
                    Status
                  </TableHead>
                  <TableHead className="p-2 md:p-4 text-center">
                    Privacy
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feedbacks.map((feedback) => (
                  <TableRow key={feedback?.id}>
                    <TableCell className="font-medium text-left p-2 md:p-4">
                      <Link
                        href={`/dashboard/chats/${feedback?.id}`}
                        className="block"
                      >
                        <span className="sm:hidden">
                          {new Date(
                            String(feedback.createTs)
                          ).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="hidden sm:inline">
                          {new Date(
                            String(feedback.createTs)
                          ).toLocaleDateString()}
                        </span>
                      </Link>
                    </TableCell>
                    <TableCell className="font-medium p-0">
                      <Link
                        href={`/dashboard/chats/${feedback?.id}`}
                        className="block p-2 md:p-4 capitalize"
                      >
                        {feedback?.name}
                      </Link>
                    </TableCell>
                    <TableCell className="p-0 text-center">
                      <Link
                        href={`/dashboard/chats/${feedback?.id}`}
                        className="block p-2 md:p-4"
                      >
                        {feedback?.messages?.length}
                      </Link>
                    </TableCell>
                    <TableCell className="p-0 hidden md:table-cell text-center">
                      <div className="flex items-center justify-center gap-1 overflow-hidden">
                        <Link
                          href={feedback?.feedbackLink || "#"}
                          className={`block p-2 md:p-4 ${
                            feedback?.feedbackLink
                              ? "text-blue-500"
                              : "text-gray-500"
                          } max-w-[60ch] truncate`}
                        >
                          {feedback?.feedbackLink ||
                            "You have closed this feedback. Change status to Active to see the feedback link."}
                        </Link>
                        {feedback?.feedbackLink && (
                          <button
                            onClick={() => {
                              navigator.clipboard
                                .writeText(feedback.feedbackLink || "")
                                .then(() => {
                                  setCopied(feedback.id);
                                  setTimeout(() => setCopied(null), 2000);
                                });
                            }}
                            className="cursor-pointer"
                          >
                            {copied === feedback.id ? (
                              <CheckCheckIcon className="w-4 h-auto flex-shrink-0" />
                            ) : (
                              <Copy className="w-4 h-auto flex-shrink-0" />
                            )}
                          </button>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-center p-0">
                      <Link
                        href={`/dashboard/chats/${feedback?.id}`}
                        className="block p-2 md:p-4"
                      >
                        <Badge
                          className={cn(
                            "capitalize",
                            feedback?.status === "active"
                              ? "bg-yellow-500"
                              : "bg-gray-500"
                          )}
                        >
                          {feedback?.status}
                        </Badge>
                      </Link>
                    </TableCell>
                    <TableCell className="text-center p-0">
                      <Link
                        href={`/dashboard/chats/${feedback?.id}`}
                        className="block p-2 md:p-4"
                      >
                        <Badge
                          className={cn(
                            "capitalize",
                            feedback?.privacy === "public"
                              ? "bg-green-500"
                              : "bg-red-500"
                          )}
                        >
                          {feedback?.privacy}
                        </Badge>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        )}
        {!loading && feedbacks.length === 0 && (
          <div className="text-center p-6 text-gray-500">
            No feedbacks yet. Click the Create button above to create new
            feedback.
          </div>
        )}
      </Container>
    </div>
  );
}
