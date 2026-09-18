"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Brandmark } from "@/components/Guide/Brandmark";
import { sectionAnchor } from "@/content/Types";
import type { GuideGroup, SitePage } from "@/content/Types";

type NavTarget = {
  id: string;
  groupId: string;
};

function navTargets(groups: GuideGroup[]): NavTarget[] {
  const fromSections = groups.flatMap((group) =>
    group.sections.flatMap((section) => {
      if (!section.label && section.numbered?.length) {
        return section.numbered
          .filter((item) => item.id)
          .map((item) => ({ id: item.id as string, groupId: group.id }));
      }
      if (!section.label) return [];
      return [{ id: sectionAnchor(group.id, section.id), groupId: group.id }];
    }),
  );

  const fallbacks = groups
    .filter((group) => !fromSections.some((target) => target.groupId === group.id))
    .map((group) => ({ id: group.id, groupId: group.id }));

  return [...fallbacks, ...fromSections];
}

function firstTargetInGroup(targets: NavTarget[], groupId: string) {
  return targets.find((target) => target.groupId === groupId)?.id;
}

function sectionHref(id: string, pathname: string) {
  return pathname === "/" ? `#${id}` : `/#${id}`;
}

function groupHasNestedNav(group: GuideGroup) {
  return group.sections.some(
    (section) => section.label || section.numbered?.some((item) => item.id),
  );
}

function linkClass(active: boolean) {
  return `block rounded py-1.5 pl-5 text-caption transition-colors duration-150 hover:bg-wash ${
    active ? "active bg-wash text-white" : "text-muted"
  }`;
}

export function Sidebar({
  groups,
  pages = [],
}: {
  groups: GuideGroup[];
  pages?: SitePage[];
}) {
  const pathname = usePathname();
  const targets = useMemo(() => navTargets(groups), [groups]);
  const [activeId, setActiveId] = useState(targets[0]?.id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(groups[0]?.id);
  const navRef = useRef<HTMLElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const points = [
      ...groups.map((group) => ({
        id: group.id,
        navId: firstTargetInGroup(targets, group.id),
        groupId: group.id,
      })),
      ...targets.map((target) => ({
        id: target.id,
        navId: target.id,
        groupId: target.groupId,
      })),
    ];

    const update = () => {
      const probe = Math.round(window.innerHeight * 0.2);
      let current = points[0];

      for (const point of points) {
        const el = document.getElementById(point.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= probe) current = point;
      }

      if (!current?.navId) return;
      setActiveId(current.navId);
      setOpenGroup(current.groupId);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
    };
  }, [groups, targets]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previous;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const marker = markerRef.current;
    const nav = navRef.current;
    if (!marker || !nav) return;

    const active = nav.querySelector("a.active") as HTMLElement | null;
    if (!active || !active.closest("details")?.open) {
      marker.style.opacity = "0";
      return;
    }

    marker.style.transform = `translateY(${active.offsetTop + (active.offsetHeight - 16) / 2}px)`;
    marker.style.opacity = "1";
  }, [activeId, openGroup, mobileOpen]);

  return (
    <>
      <header className="canvas-ink fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between px-6 lg:hidden">
        <a href={pathname === "/" ? "#top" : "/"} aria-label="Private Social Network" className="flex items-center">
          <Brandmark />
        </a>
        <button
          type="button"
          className="-mr-2 flex size-10 items-center justify-center"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
              <path
                d="M5 5l14 14M19 5L5 19"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          )}
        </button>
      </header>

      <aside
        className={`${mobileOpen ? "flex" : "hidden"} canvas-ink z-40 flex-col lg:flex lg:sticky lg:top-0 lg:h-dvh lg:w-[var(--space-rail)] lg:shrink-0 lg:self-start lg:overflow-y-auto lg:overscroll-none max-lg:fixed max-lg:inset-x-0 max-lg:top-14 max-lg:bottom-0 max-lg:overflow-y-auto max-lg:overscroll-none`}
      >
        <div className="p-[var(--space-nav)]">
          <a
            href={pathname === "/" ? "#top" : "/"}
            aria-label="Private Social Network"
            className="mt-4 mb-7 hidden lg:block"
          >
            <Brandmark className="h-7 w-auto object-contain" />
          </a>
          {pages.length > 1 ? (
            <div className="mb-6 flex flex-col gap-1">
              {pages.map((page) => {
                const current =
                  page.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(page.href);
                return (
                  <a
                    key={page.href}
                    href={page.href}
                    className={`rounded px-2 py-1.5 text-caption transition-colors duration-150 hover:bg-wash ${
                      current ? "bg-wash" : "text-muted"
                    }`}
                  >
                    {page.label}
                  </a>
                );
              })}
            </div>
          ) : null}
          <nav
            ref={navRef}
            aria-label="Brand guide sections"
            className="relative"
          >
            <span ref={markerRef} className="nav-marker" aria-hidden />
            {groups.map((group) => {
              if (!groupHasNestedNav(group)) {
                return (
                  <a
                    key={group.id}
                    href={sectionHref(group.id, pathname)}
                    onClick={() => setMobileOpen(false)}
                    className={`nav-summary -mx-2 block rounded px-2 py-3 text-caption transition-colors duration-150 hover:bg-wash ${
                      openGroup === group.id ? "active bg-wash" : ""
                    }`}
                  >
                    {group.label}
                  </a>
                );
              }

              return (
              <details
                key={group.id}
                className="nav-rail"
                open={openGroup === group.id}
                onToggle={(event) => {
                  if (event.currentTarget.open) setOpenGroup(group.id);
                }}
              >
                <summary
                  className={`nav-summary -mx-2 flex cursor-pointer list-none items-center justify-between rounded px-2 py-3 text-caption transition-colors duration-150 hover:bg-wash ${
                    openGroup === group.id ? "active bg-wash" : ""
                  }`}
                >
                  <span>{group.label}</span>
                  <svg
                    className="nav-chevron size-3 shrink-0 transition-transform duration-200"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 4l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </summary>
                <div className="pb-2">
                  {group.sections.flatMap((section) => {
                    if (!section.label && section.numbered?.length) {
                      return section.numbered
                        .filter((item) => item.id)
                        .map((item) => (
                          <a
                            key={item.id}
                            href={
                              item.href ??
                              sectionHref(item.id as string, pathname)
                            }
                            onClick={() => setMobileOpen(false)}
                            className={linkClass(activeId === item.id)}
                          >
                            {item.heading}
                          </a>
                        ));
                    }

                    if (!section.label) return [];

                    const id = sectionAnchor(group.id, section.id);
                    return [
                      <a
                        key={id}
                        href={sectionHref(id, pathname)}
                        onClick={() => setMobileOpen(false)}
                        className={linkClass(activeId === id)}
                      >
                        {section.label}
                      </a>,
                    ];
                  })}
                </div>
              </details>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
