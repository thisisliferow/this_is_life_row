import { ArrowUpRightIcon } from "@/components/Guide/icons";

export function ExternalTextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isMail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 underline underline-offset-2 hover:opacity-70"
      {...(isMail
        ? {}
        : { target: "_blank", rel: "noreferrer" })}
    >
      {children}
      <ArrowUpRightIcon className="size-[0.9em] shrink-0" />
    </a>
  );
}
