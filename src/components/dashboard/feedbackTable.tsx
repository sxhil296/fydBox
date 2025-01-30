import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function FeedbackTable() {
  const feedbackId = 3;
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="text-lg font-medium">Your feedbacks</div>

      <Table>
        <TableCaption>A list of your recent feedbacks.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className=" p-4">Feedback Name</TableHead>
            <TableHead className="p-4">Feedbacks Received</TableHead>
            <TableHead className="text-center p-4">Status</TableHead>
            <TableHead className=" p-4">Start Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-left p-0 ">
              <Link
                href={`/dashboard/chats/${feedbackId}`}
                className="p-4 block"
              >
                Feedback for food
              </Link>
            </TableCell>

            <TableCell className=" p-0">
              <Link
                href={`/dashboard/chats/${feedbackId}`}
                className="p-4 block"
              >
                678
              </Link>
            </TableCell>

            <TableCell className="text-center p-0">
              <Link
                href={`/dashboard/chats/${feedbackId}`}
                className="p-4 block"
              >
                <Badge>Open</Badge>
              </Link>
            </TableCell>
            <TableCell className=" p-0">
              <Link
                href={`/dashboard/chats/${feedbackId}`}
                className="p-4 block"
              >
                12/12/2024
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
