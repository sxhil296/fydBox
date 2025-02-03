import { Ellipsis, Trash } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

import { deleteFeedbackAction } from "@/app/actions";

interface MoreOptionsProps {
  feedbackId: string;
}

export default function MoreOptions({ feedbackId }: MoreOptionsProps) {
  return (
    <>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"}>
              <span className="sr-only">More Options</span>
              <Ellipsis className="h-auto w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <DialogTrigger asChild>
                <button className="flex items-center justify-start gap-2 text-sm">
                  <Trash className="h-auto w-4" />
                  Delete Feedback
                </button>
              </DialogTrigger>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              feedback and remove the data from this account.
            </DialogDescription>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <form action={deleteFeedbackAction}>
                <input type="hidden" name="id" value={feedbackId} />

                <Button variant={"destructive"}>Delete Feedback</Button>
              </form>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
