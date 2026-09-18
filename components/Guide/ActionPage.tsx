import { PageFooter } from "@/components/Guide/PageFooter";
import { RichText } from "@/components/Guide/RichText";
import { SiteHeader } from "@/components/Guide/SiteHeader";

export function ActionPage({
  heading,
  body,
}: {
  heading: string;
  body: string;
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
        </section>
        <PageFooter />
      </div>
    </div>
  );
}
