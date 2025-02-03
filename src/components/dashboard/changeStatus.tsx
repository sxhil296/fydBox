import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { Feedbacks } from "@/db/schema";
import { changeStatusAction } from "@/app/actions";

const STATUS_OPTIONS = [
  {
    id: "Active",
    name: "active",
  },
  {
    id: "inactive",
    name: "inactive",
  },
];

interface ChangeStatusProps {
//   action: (formData: FormData) => Promise<void>;
  feedback: typeof Feedbacks.$inferSelect;
}

export default function ChangeStatus({ feedback }: ChangeStatusProps) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            className="flex items-center gap-2 justify-center"
          >
            Change Status
            <ChevronDown className="w-4 h-auto" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {STATUS_OPTIONS.map((status) => (
            <DropdownMenuItem key={status.id}>
              <form action={changeStatusAction}>
                <input type="hidden" name="id" value={feedback.id} />
                <input type="hidden" name="status" value={status.name} />
                <button className="capitalize">{status.name}</button>
              </form>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
