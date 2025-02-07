import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { Feedbacks } from "@/db/schema";
import { changePrivacyAction } from "@/app/actions";

const PRIVACY_OPTIONS = [
  {
    id: "public",
    name: "Public",
  },
  {
    id: "private",
    name: "Private",
  },
];

interface ChangePrivacyProps {
  feedback: typeof Feedbacks.$inferSelect;
}

export default function ChangePrivacy({ feedback }: ChangePrivacyProps) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            className="flex items-center gap-2 justify-center"
          >
            Change Privacy
            <ChevronDown className="w-4 h-auto" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {PRIVACY_OPTIONS.map((privacy) => (
            <DropdownMenuItem key={privacy.id}>
              <form action={changePrivacyAction}>
                <input type="hidden" name="id" value={feedback.id} />
                <input type="hidden" name="privacy" value={privacy.id} />
                <button className="capitalize">{privacy.name}</button>
              </form>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
