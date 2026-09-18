import type { AccessRow } from "@/content";

export function AccessTable({ rows }: { rows: AccessRow[] }) {
  return (
    <div className="mt-stack">
      <div className="grid-label-head mb-3 text-label text-muted">
        <p>Access</p>
        <p>What it makes possible</p>
      </div>
      <ul className="m-0 list-none p-0 text-body">
        {rows.map((row) => (
          <li
            key={row.access}
            className="cell border-b border-line first:border-t first:border-line-strong"
          >
            <div className="grid-label">
              <p className="font-medium">{row.access}</p>
              <p className="mt-1 lg:mt-0">{row.possible}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
