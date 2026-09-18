import { MediaSlot } from "@/components/Guide/MediaSlot";
import { WorkSentence } from "@/components/Guide/WorkSentence";

export function Opener({ id, title }: { id: string; title?: string }) {
  return (
    <section
      id={id}
      className="flex min-w-0 w-full flex-col scroll-mt-12 pb-[var(--space-hero-after)] lg:h-dvh lg:scroll-mt-0 lg:pb-0"
    >
      <div className="min-h-0 min-w-0 w-full lg:flex-1">
        <MediaSlot fill />
      </div>
      <div className="shrink-0 px-gutter pt-[var(--space-hero-stack)] lg:pb-[var(--space-hero-stack)]">
        {title ? <h2 className="max-w-full text-banner">{title}</h2> : null}
        <p className={`max-w-full text-banner ${title ? "mt-stack" : ""}`}>
          <WorkSentence />
        </p>
      </div>
    </section>
  );
}
