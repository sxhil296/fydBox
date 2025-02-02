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
import { Copy } from "lucide-react";
import type { Feedbacks } from "@/db/schema";
import { cn } from "@/lib/utils";
import Container from "@/components/general/container";

interface FeedbackTableProps {
  feedbacks: (typeof Feedbacks.$inferSelect)[];
}

export default function FeedbackTable({ feedbacks }: FeedbackTableProps) {
  return (
    <div className="w-full">
      <Container className="flex-grow flex flex-col">
        <h2 className="text-lg font-medium mb-4">Your feedbacks</h2>
        {feedbacks.length > 0 ? (
          <div className="md:max-h-[500px] overflow-y-auto relative">
            <Table >
              <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                  <TableHead className="p-2 md:p-4">Date</TableHead>
                  <TableHead className="p-2 md:p-4">Name</TableHead>
                  <TableHead className="p-2 md:p-4">Received</TableHead>
                  <TableHead className="p-2 md:p-4 hidden md:table-cell">
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
                    <TableCell className="p-2 md:p-4 hidden md:table-cell">
                      <div className="flex items-center gap-1 overflow-hidden">
                        <Link
                          href={feedback?.feedbackLink}
                          className="block text-blue-500 max-w-[20ch] lg:max-w-[30ch] truncate"
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
          </div>
        ) : (
          <div className="text-center p-6 text-gray-500">No feedbacks yet.</div>
        )}
      </Container>
    </div>
  );
}
