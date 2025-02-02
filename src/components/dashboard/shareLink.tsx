import { Copy } from "lucide-react";
import Link from "next/link";

interface ShareLinkProps {
  link: string;
  feedbackName: string;
}

export default function ShareLink({ link, feedbackName }: ShareLinkProps) {
  return (
    <div className="border rounded-md p-4 shadow-md w-full max-w-[760px] h-auto flex flex-col gap-2">
      <p className="text-lg font-medium">
        Below is the link for your{" "}
        <span className="font-bold text-blue-500">{feedbackName}</span> feedback
      </p>

      <div className="flex justify-center items-center gap-2 p-2">
        <Link
          href={link}
        >
          {link}
        </Link>
        <Copy className="w-4 h-auto" />
      </div>
    </div>
  );
}
