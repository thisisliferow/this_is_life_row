import type { SourceRow } from "@/content/Types";

export function SourceTable({ rows }: { rows: SourceRow[] }) {
  return (
    <ul className="mt-10 max-w-[822px] list-none space-y-8 p-0 text-body-lg lg:max-w-[69.6cqw]">
      {rows.map((row) => (
        <li key={row.area}>
          <p className="text-label font-medium">{row.area}</p>
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
