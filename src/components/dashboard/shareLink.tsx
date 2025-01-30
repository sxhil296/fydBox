import { Copy } from "lucide-react";

interface ShareLinkProps {
  link?: string;
}

export default function ShareLink({ link }: ShareLinkProps) {
  return (
    <div className="border rounded-md p-4 shadow-md w-full max-w-[760px] h-auto flex flex-col gap-2">
      <p className="text-lg font-medium">
        Share the link below with your target audience
      </p>

      <div className="flex justify-center items-center gap-2 p-2">
        <input
          type="url"
          className="border-none outline-none bg-transparent"
          value={"alskdfjhghsjaklsdjfh"}
          disabled
        />
        <Copy className="w-4 h-auto" />
      </div>
    </div>
  );
}
