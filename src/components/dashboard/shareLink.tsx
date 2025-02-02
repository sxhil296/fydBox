import Link from "next/link";
import { useState, useRef } from "react";
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
import * as htmlToImage from "html-to-image";

interface ShareLinkProps {
  link: string;
  feedbackName: string;
}

export default function ShareLink({ link, feedbackName }: ShareLinkProps) {
  const [copied, setCopied] = useState(false);
  const qrCodeRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const downloadQRCode = () => {
    if (qrCodeRef.current) {
      htmlToImage
        .toPng(qrCodeRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `${feedbackName}FeedbackQR.png`;
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error("Error generating QR code image:", error);
        });
    }
  };

  return (
    <div className="relative border border-brand rounded-md p-4 w-full sm:max-w-3xl mx-auto flex flex-col gap-2 md:gap-4">
      <div className="text-lg font-medium text-center">
        Below is the link and QR for your{" "}
        <span className="font-bold text-blue-500">{feedbackName}</span> feedback
      </div>

      <div className="flex items-center justify-center gap-2 w-full sm:w-auto overflow-hidden">
        <Link
          href={link}
          target="_blank"
          className="text-blue-500 truncate max-w-[30ch] sm:max-w-[40ch]"
        >
          {link}
        </Link>

        <button onClick={copyToClipboard} type="button" className="text-sm">
          {copied ? "Copied" : "Copy"}
        </button>
      </div>



      <div className="flex flex-col gap-2 items-center mb-2">
        <p className="text-sm">Share the link directly on : </p>
        <div className="flex justify-center items-center gap-2">
          <WhatsappShareButton url={link}>
            <WhatsappIcon size={24} className="rounded-sm" />
          </WhatsappShareButton>
          <FacebookShareButton url={link}>
            <FacebookIcon size={24} className="rounded-sm" />
          </FacebookShareButton>
          <TwitterShareButton url={link}>
            <XIcon size={24} className="rounded-sm" />
          </TwitterShareButton>
          <LinkedinShareButton url={link}>
            <LinkedinIcon size={24} className="rounded-sm" />
          </LinkedinShareButton>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div
          ref={qrCodeRef}
          className="qr-code bg-white p-4 rounded-md w-56 h-auto flex justify-center items-center flex-col gap-4"
        >
          <h3 className="text-lg  mb-2 text-black text-center">
            Scan the QR Code below to give your anonymous feedback on &nbsp;
            <span className="text-blue-500 text-xl font-semibold">
              {feedbackName}
            </span>
          </h3>
          <QRCodeSVG value={link} size={128} />
        </div>
        <Button onClick={downloadQRCode} variant="outline">
          Download QR Code
        </Button>
      </div>
    </div>
  );
}
