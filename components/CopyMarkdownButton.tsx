"use client";

import { useState } from "react";
import { ClipboardCopy, Check } from "lucide-react";

interface CopyMarkdownButtonProps {
  markdown: string;
}

export default function CopyMarkdownButton({ markdown }: CopyMarkdownButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = markdown;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <button
      onClick={handleCopy}
      title="Copy project as Markdown"
      className="flex items-center gap-1.5 border border-[#d7d1c5] px-3 py-2 text-xs font-semibold text-[#716d65] transition-all hover:border-[#f06432] hover:text-[#f06432]"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-[#f06432]" />
          <span className="text-[#f06432]">Copied!</span>
        </>
      ) : (
        <>
          <ClipboardCopy className="h-3.5 w-3.5" />
          <span>Copy MD</span>
        </>
      )}
    </button>
  );
}
