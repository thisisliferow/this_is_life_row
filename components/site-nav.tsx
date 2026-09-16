"use client";

import { useEffect, useState } from "react";
import { navGroups } from "@/lib/content";

const sectionIds = navGroups.flatMap((group) => group.items.map((item) => item.id));

export function SiteNav() {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="mobile-bar">
        <a className="wordmark" href="#top">
          Life Row
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Contents"}
        </button>
      </header>

      <aside className={`site-nav ${open ? "is-open" : ""}`}>
        <div className="site-nav-inner">
          <a className="wordmark desktop-wordmark" href="#top">
            Life Row
          </a>
          <nav aria-label="Page sections">
            {navGroups.map((group) => (
              <div className="nav-group" key={group.id}>
                <p className="nav-group-label">{group.label}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={activeId === item.id ? "is-active" : undefined}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
