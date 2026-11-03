import { Reveal } from "@/components/Guide/Reveal";

type ContentRowProps = {
  id: string;
  label?: string;
  caption?: string;
  flushBottom?: boolean;
  children: React.ReactNode;
};

export function ContentRow({
  id,
  label,
  caption,
  flushBottom = false,
  children,
}: ContentRowProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-gutter pt-6 ${flushBottom ? "pb-0" : "pb-16 lg:pb-24"}`}
    >
      <Reveal>
        {label || caption ? (
          <div className="mb-6 max-w-measure">
            {label ? <h3 className="text-title">{label}</h3> : null}
            {caption ? (
              <p className="mt-heading text-caption text-muted">{caption}</p>
            ) : null}
          </div>
        ) : null}
        {children}
      </Reveal>
    </section>
  );
}
