// import { Copy } from "lucide-react";
// import Link from "next/link";

// interface ShareLinkProps {
//   link: string;
//   feedbackName: string;
// }

// export default function ShareLink({ link, feedbackName }: ShareLinkProps) {
//   return (
//     <div className="border rounded-md p-4 shadow-md w-full max-w-[760px] h-auto flex flex-col gap-2">
//       <p className="text-lg font-medium">
//         Below is the link for your{" "}
//         <span className="font-bold text-blue-500">{feedbackName}</span> feedback
//       </p>

//       <div className="flex justify-center items-center gap-2 p-2">
//         <Link
//           href={link}
//         >
//           {link}
//         </Link>
//         <Copy className="w-4 h-auto" />
//       </div>
//     </div>
//   );
// }
import Link from "next/link";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  XIcon,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { Button } from "../ui/button";


interface ShareLinkProps {
  link: string;
  feedbackName: string;
}

export default function ShareLink({ link, feedbackName }: ShareLinkProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="border rounded-md p-4 shadow-md w-full max-w-[760px] mx-auto">
      <p className="text-lg font-medium mb-4">
        Below is the link and QR for your &nbsp;
        <span className="font-bold text-blue-500">{feedbackName}</span> feedback
      </p>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
        <div className="flex items-center justify-between gap-2 w-full sm:w-auto overflow-hidden">
          <Link
            href={link}
            target="_blank"
            className="text-blue-500 truncate max-w-[30ch] sm:max-w-[40ch]"
          >
            {link}
          </Link>

          <Button className="w-4 h-4" onClick={copyToClipboard} type="button">{copied? "Copied": "Copy"}</Button>
      
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="qr-code">
          <QRCodeSVG value={link} size={128} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg">Share the link directly on : </p>
          <div className="flex justify-center items-center gap-2">
            <WhatsappShareButton url={link}>
              <WhatsappIcon size={40} />
            </WhatsappShareButton>
            <FacebookShareButton url={link}>
              <FacebookIcon size={40} />
            </FacebookShareButton>
            <TwitterShareButton url={link}>
              <XIcon size={40} />
            </TwitterShareButton>
            <LinkedinShareButton url={link}>
              <LinkedinIcon size={40} />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    </div>
  );
}
