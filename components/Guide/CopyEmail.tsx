"use client";

import { useEffect, useRef, useState } from "react";
import FlyingButton from "@/components/Guide/FlyingButton";
import { supportInvite } from "@/content/05_Support";

function writeEmail(email: string) {
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
    if (ok) {
      void navigator.clipboard?.writeText?.(email);
      return true;
    }
  } catch {
    // Fall through to the clipboard path.
  }

  void navigator.clipboard?.writeText?.(email);
  return Boolean(navigator.clipboard?.writeText);
}

export function CopyEmail({
  email,
  label = supportInvite,
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

  function copy() {
    const ok = writeEmail(email);
    if (!ok) return;

    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div
      className={`relative h-80 w-full ${className ?? ""}`}
      aria-label={copied ? "Email copied." : `Copy ${email}`}
    >
      <FlyingButton
        className="flying-button--line"
        theme="dark"
        size="extra-large"
        radius={999}
        altitude={110}
        hoverTime={2.4}
        jets={2}
        thrusters
        trigger="click"
        auto
        carryCursor={false}
        smoke={1}
        turbulence={1}
        wobble={1}
        ramp={false}
        buttonColor="transparent"
        textColor="#ffffff"
        thrustColor="#8ec5ff"
        smokeColor="#eef1f6"
        onClick={() => {
          copy();
        }}
      >
        {copied ? "Email copied." : label}
      </FlyingButton>
    </div>
  );
}
