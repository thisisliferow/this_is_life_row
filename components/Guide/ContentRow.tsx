type ContentRowProps = {
  id: string;
  label?: string;
  caption?: string;
  children: React.ReactNode;
};

export function ContentRow({ id, label, caption, children }: ContentRowProps) {
  const hasHeader = Boolean(label) || Boolean(caption);

  return (
    <section
      id={id}
      className="scroll-mt-6 border-t border-[#B6B5B0] px-6 pt-3 pb-[var(--row-pad-b,4.5rem)] lg:px-[3.4cqw]"
    >
      {hasHeader ? (
        <div className="flex flex-col items-start gap-5 lg:grid lg:grid-cols-[23.77cqw_23.77cqw_1fr_auto] lg:items-start lg:gap-0">
          {label ? <h3 className="text-label font-medium">{label}</h3> : null}
          <div className="guide-caption max-w-[360px] text-caption text-[#444] lg:col-start-2 lg:col-end-4 lg:max-w-[max(22.1cqw,360px)]">
            {caption ? <p>{caption}</p> : null}
          </div>
        </div>
      ) : null}
      <div
        className={
          hasHeader
            ? "mt-[calc(var(--row-gap,1.75rem)*var(--row-gap-scale,1))]"
            : undefined
        }
      >
        {children}
      </div>
    </section>
  );
}
