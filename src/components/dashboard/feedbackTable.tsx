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
import { Copy, PlusCircle } from "lucide-react";
import type { Feedbacks } from "@/db/schema";
import { cn } from "@/lib/utils";
import Container from "@/components/general/container";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

interface FeedbackTableProps {
  feedbacks: (typeof Feedbacks.$inferSelect)[];
}

export default function FeedbackTable({ feedbacks }: FeedbackTableProps) {
  return (
    <div className="w-full">
      <Container className="flex-grow flex flex-col gap-6 md:gap-10">
        <div className="w-full justify-between flex items-baseline">
          <h2 className="text-2xl font-medium mb-4">Your feedbacks</h2>
          <Button variant={"ghost"}>
            <Link href={"/dashboard/create"} className="flex items-center gap-2">
              <PlusCircle className="w-4 h-auto" />
              Create
            </Link>
          </Button>
        </div>
        {feedbacks.length > 0 ? (
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
                    <TableCell className="font-medium p-2 md:p-4">
                      <Link
                        href={`/dashboard/chats/${feedback?.id}`}
                        className="block"
                      >
                        {feedback?.name}
                      </Link>
                    </TableCell>
                    <TableCell className="p-2 md:p-4 text-center">
                      <Link
                        href={`/dashboard/chats/${feedback?.id}`}
                        className="block"
                      >
                        124
                      </Link>
                    </TableCell>
                    <TableCell className="p-2 md:p-4 hidden md:table-cell text-center">
                      <div className="flex items-center justify-center gap-2 overflow-hidden ">
                        <Link
                          href={feedback?.feedbackLink}
                          className="block text-blue-500 max-w-[50ch] lg:max-w-full truncate"
                        >
                          {feedback?.feedbackLink}
                        </Link>
                        <Copy className="w-4 h-auto cursor-pointer flex-shrink-0" />
                      </div>
                    </TableCell>
                    <TableCell className="text-center p-2 md:p-4">
                      <Link
                        href={`/dashboard/chats/${feedback?.id}`}
                        className="block"
                      >
                        <Badge
                          className={cn(
                            "capitalize",
                            feedback?.status === "active"
                              ? "bg-green-500"
                              : "bg-red-500"
                          )}
                        >
                          {feedback?.status}
                        </Badge>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        ) : (
          <div className="text-center p-6 text-gray-500">No feedbacks yet.</div>
        )}
      </Container>
    </div>
  );
}
