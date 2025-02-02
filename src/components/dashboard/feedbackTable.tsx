import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Copy } from "lucide-react";
import { Feedbacks } from "@/db/schema";
import { cn } from "@/lib/utils";
import Container from "../general/container";

interface FeedbackTableProps {
  feedbacks: (typeof Feedbacks.$inferSelect)[];
}

export default function FeedbackTable({ feedbacks }: FeedbackTableProps) {
  return (
    <div className="w-full">
      <Container>
        <div className="text-lg font-medium">Your feedbacks</div>
        {feedbacks.length > 0 ? (
          <div className="overflow-x-auto overflow-y-auto max-h-[500px]">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="p-4">Date</TableHead>
                  <TableHead className="p-4">Feedbacks Name</TableHead>
                  <TableHead className="p-4">Feedbacks Recieved</TableHead>
                  <TableHead className="p-4">Feedback Link</TableHead>
                  <TableHead className="text-center p-4">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feedbacks.map((feedback) => (
                  <TableRow key={feedback?.id}>
                    <TableCell className="font-medium text-left p-0">
                      <Link
                        href={`/dashboard/chats/${feedback?.id}`}
                        className="p-4 block"
                      >
                        {new Date(String(feedback.createTs)).toLocaleDateString()}
                      </Link>
                    </TableCell>

                    <TableCell className="font-medium p-0">
                      <Link
                        href={`/dashboard/chats/${feedback?.id}`}
                        className="p-4 block"
                      >
                        {feedback?.name}
                      </Link>
                    </TableCell>

                    <TableCell className="p-0">
                      <Link
                        href={`/dashboard/chats/${feedback?.id}`}
                        className="p-4 block"
                      >
                        124
                      </Link>
                    </TableCell>
                    <TableCell className="p-4 gap-1 flex items-center overflow-hidden">
                      <Link
                        href={feedback?.feedbackLink}
                        className="block text-blue-500 max-w-[30ch] truncate"
                      >
                        {feedback?.feedbackLink}
                      </Link>
                      <Copy className="w-4 h-auto cursor-pointer" />
                    </TableCell>
                    <TableCell className="text-center p-0">
                      <Link
                        href={`/dashboard/chats/${feedback?.id}`}
                        className="p-4 block"
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
          <div className="text-center p-6 text-gray-500">
            No feedbacks found.
          </div>
        )}
      </Container>
    </div>
  );
}
