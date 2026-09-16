"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { sectionAnchor } from "@/content/Types";
import type { GuideGroup, SitePage } from "@/content/Types";

export function Sidebar({
  groups,
  pages = [],
}: {
  groups: GuideGroup[];
  pages?: SitePage[];
}) {
  const pathname = usePathname();
  const watchedIds = useMemo(
    () =>
      groups.flatMap((group) => [
        group.id,
        ...group.sections.flatMap((section) => [
          sectionAnchor(group.id, section.id),
          ...(section.numbered
            ?.map((item) => item.id)
            .filter((id): id is string => Boolean(id)) ?? []),
        ]),
      ]),
    [groups],
  );
  const [activeId, setActiveId] = useState(watchedIds[0]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(groups[0]?.id);

  useEffect(() => {
    const elements = watchedIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [watchedIds]);

  return (
    <>
      <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-[#E8E8E8] bg-white px-5 py-3 lg:hidden">
        <a href="#top" className="text-[14px] font-medium">
          Life Row.
        </a>
        <button
          type="button"
          className="rounded px-1.5 py-1 text-[12px] text-[#8A8A8A] transition-colors duration-150 hover:bg-[#F4F4F4] hover:text-[#151515]"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? "Close" : "Open navigation"}
        </button>
      </header>

      <aside
        className={`${mobileOpen ? "block" : "hidden"} shrink-0 border-b border-[#E8E8E8] bg-white lg:sticky lg:top-0 lg:block lg:h-dvh lg:w-[240px] lg:self-start lg:overflow-y-auto lg:border-b-0`}
      >
        <div className="p-5">
          <a
            href="#top"
            className="mt-4 mb-7 hidden text-[14px] font-medium lg:block"
          >
            Life Row.
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
                    className={`rounded px-2 py-1.5 text-[14px] transition-colors duration-150 hover:bg-[#F4F4F4] ${
                      current ? "bg-[#F4F4F4]" : "text-[#8A8A8A]"
                    }`}
                  >
                    {page.label}
                  </a>
                );
              })}
            </div>
          ) : null}
          <nav aria-label="Brand guide sections" className="relative">
            {groups.map((group) => (
              <details
                key={group.id}
                className="nav-rail"
                data-nav-section={group.id}
                open={openGroup === group.id}
                onToggle={(event) => {
                  if (event.currentTarget.open) setOpenGroup(group.id);
                }}
              >
                <summary className="nav-summary -mx-2 flex cursor-pointer list-none items-center justify-between rounded px-2 py-3 text-[14px] font-normal transition-colors duration-150 hover:bg-[#F4F4F4]">
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
                            href={`#${item.id}`}
                            data-nav-link={item.id}
                            onClick={() => setMobileOpen(false)}
                            className={`block rounded py-1.5 pl-5 text-[14px] font-normal transition-colors duration-150 hover:bg-[#F4F4F4] ${
                              activeId === item.id ? "bg-[#F4F4F4]" : ""
                            }`}
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
                        href={`#${id}`}
                        data-nav-link={id}
                        onClick={() => setMobileOpen(false)}
                        className={`block rounded py-1.5 pl-5 text-[14px] font-normal transition-colors duration-150 hover:bg-[#F4F4F4] ${
                          activeId === id ? "bg-[#F4F4F4]" : ""
                        }`}
                      >
                        {section.label}
                      </a>,
                    ];
                  })}
                </div>
              </details>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
