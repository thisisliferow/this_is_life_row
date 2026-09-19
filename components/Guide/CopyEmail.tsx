"use client";

import { useEffect, useRef, useState } from "react";
import { CopyIcon } from "@/components/Guide/icons";

async function writeEmail(email: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(email);
      return true;
    } catch {
      // Fall through to the textarea path.
    }
  }

  try {
    const field = document.createElement("textarea");
    field.value = email;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.focus();
    field.select();
    field.setSelectionRange(0, email.length);
    const ok = document.execCommand("copy");
    document.body.removeChild(field);
    return ok;
  } catch {
    return false;
  }
}

export function CopyEmail({
  email,
  label = "Contact us.",
  className,
}: {
  email: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>(0);

  useEffect(() => {
    return () => window.clearTimeout(timer.current);
  }, []);

  async function copy() {
    const ok = await writeEmail(email);
    if (!ok) return;

    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex max-w-full min-w-0 cursor-pointer items-baseline gap-1 border-0 bg-transparent p-0 font-[inherit] align-baseline text-[var(--accent)] underline decoration-current underline-offset-2 transition-opacity hover:opacity-70 ${className ?? ""}`}
      aria-label={copied ? "Copied." : `Copy ${email}`}
    >
      <span className="min-w-0 [overflow-wrap:anywhere]">{copied ? "Copied." : label}</span>
      <CopyIcon className="size-[0.9em] shrink-0" />
    </button>
  );
}
