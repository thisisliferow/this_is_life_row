type FinaleProps = {
  id: string;
  wordmark: string;
  supporting: string;
};

export function Finale({ id, wordmark, supporting }: FinaleProps) {
  return (
    <footer
      id={id}
      className="flex min-h-dvh scroll-mt-12 flex-col bg-ink text-white lg:scroll-mt-4"
    >
      <div className="flex flex-1 flex-col justify-center px-gutter py-[var(--space-28)]">
        <h1 className="max-w-full text-banner">{wordmark}</h1>
        <p className="mt-stack max-w-measure text-display">{supporting}</p>
      </div>
      <div className="flex items-end justify-between px-gutter pb-[var(--space-8)] pt-[var(--space-16)] text-caption text-white/50">
        <p>© Life Row</p>
        <a href="#top" className="hover:text-white">
          Back to top
        </a>
      </div>
    </footer>
  );
}
