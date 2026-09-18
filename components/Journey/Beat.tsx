import type { ReactNode } from "react";
import type { BodyScale } from "@/content/Types";

type BeatProps = {
  id: string;
  title: string;
  lede?: string;
  paragraphs?: string[];
  highlights?: string[];
  scale?: BodyScale;
  tone?: "paper" | "ink";
  children?: ReactNode;
};

export function Beat({
  id,
  title,
  lede,
  paragraphs,
  highlights,
  scale = "body",
  tone = "paper",
  children,
}: BeatProps) {
  const ink = tone === "ink";
  const hasBody =
    Boolean(lede) ||
    Boolean(highlights?.length) ||
    Boolean(paragraphs?.length) ||
    Boolean(children);

  return (
    <section
      id={id}
      className={`flex min-h-[92dvh] scroll-mt-12 flex-col justify-center px-gutter py-[var(--space-28)] lg:scroll-mt-4 ${
        ink ? "bg-ink text-white" : ""
      }`}
    >
      <h2 className="max-w-full text-banner">{title}</h2>
      {hasBody ? (
        <div
          className={`stack-copy mt-stack max-w-measure ${
            scale === "display" ? "text-display" : "text-body"
          }`}
        >
          {lede ? <p className="text-heading">{lede}</p> : null}
          {highlights?.length ? (
            <ul className="list-none space-y-1 p-0 text-heading">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {children}
        </div>
      ) : null}
    </section>
  );
}
