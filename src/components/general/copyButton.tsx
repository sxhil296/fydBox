"use client";
import React, { useState } from "react";
import { Copy, CheckCheck } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
  iconSize?: number;
}

const CopyButton = ({
  textToCopy,
  className = "text-sm text-zinc-500",
  iconSize = 16,
}: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button onClick={copyToClipboard} type="button" className={className}>
      {copied ? <CheckCheck size={iconSize} /> : <Copy size={iconSize} />}
    </button>
  );
};

export default CopyButton;
