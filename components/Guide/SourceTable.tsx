import type { SourceRow } from "@/content/Types";

export function SourceTable({ rows }: { rows: SourceRow[] }) {
  return (
    <ul className="mt-stack flex max-w-measure list-none flex-col gap-[var(--space-8)] p-0 text-body">
      {rows.map((row) => (
        <li key={row.area}>
          <p className="text-label text-muted">{row.area}</p>
          <p className="mt-2">
            {row.evidence}{" "}
            <a
              href={row.source.href}
              className="underline underline-offset-2 hover:opacity-70"
              target="_blank"
              rel="noreferrer"
            >
              {row.source.label}
            </a>
          </p>
        </li>
      ))}
    </ul>
  );
}
