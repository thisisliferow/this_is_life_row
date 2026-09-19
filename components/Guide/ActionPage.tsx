import { PageFooter } from "@/components/Guide/PageFooter";
import { RichText } from "@/components/Guide/RichText";
import { SiteHeader } from "@/components/Guide/SiteHeader";

export function ActionPage({
  heading,
  body,
  action,
}: {
  heading: string;
  body: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="canvas-ink min-h-dvh">
      <div className="scroll-progress" aria-hidden />
      <SiteHeader />
      <div className="content-canvas min-w-0">
        <section className="px-gutter pt-10 pb-[var(--space-section-bottom)] desktop:pt-24">
          <h1 className="text-display font-light">{heading}</h1>
          <p className="rich-accent mt-stack max-w-measure text-body">
            <RichText text={body} />
          </p>
          {action ? (
            <p className="mt-stack text-body">
              <a
                href={action.href}
                className="underline underline-offset-2 hover:opacity-70"
                target="_blank"
                rel="noreferrer"
              >
                {action.label}
              </a>
            </p>
          ) : null}
        </section>
        <PageFooter />
      </div>
    </div>
  );
}
