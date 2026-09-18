"use client";

import { useEffect, useState } from "react";
import { Brandmark } from "@/components/Guide/Brandmark";

export function SiteHeader({
  className,
  overlay = false,
}: {
  className?: string;
  overlay?: boolean;
} = {}) {
  const [scrolled, setScrolled] = useState(!overlay);

  useEffect(() => {
    if (!overlay) {
      setScrolled(true);
      return;
    }

    const hero = document.getElementById("introduction");
    if (!hero) {
      setScrolled(true);
      return;
    }

    const update = () => {
      setScrolled(hero.getBoundingClientRect().bottom <= 56);
    };

    update();
    const observer = new IntersectionObserver(update, {
      threshold: [0, 0.01, 1],
    });
    observer.observe(hero);
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [overlay]);

  const hideOnDesktop = overlay && !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 flex h-14 items-center justify-center bg-ink px-gutter desktop:fixed desktop:inset-x-0 desktop:top-0 desktop:justify-start ${
        hideOnDesktop ? "desktop:pointer-events-none desktop:opacity-0" : ""
      } ${className ?? ""}`}
    >
      <a href="/" aria-label="Private Social Network" className="flex items-center">
        <Brandmark className="h-8 w-auto object-contain" />
      </a>
    </header>
  );
}
