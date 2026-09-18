import type { MeasureRow } from "@/content/Types";

export function MeasureTable({ rows }: { rows: MeasureRow[] }) {
  return (
    <div className="mt-stack overflow-x-auto">
      <table className="w-full border-collapse text-left text-body">
        <thead>
          <tr>
            <th className="cell-head border-b border-line-strong pr-6 text-label text-muted">
              Measure
            </th>
            <th className="cell-head border-b border-line-strong pr-6 text-label text-muted">
              How we’ll track it
            </th>
            <th className="cell-head border-b border-line-strong text-label text-muted">
              Proposed target
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.measure}>
              <th
                scope="row"
                className="cell w-[22%] border-b border-line pr-8 align-top font-medium"
              >
                {row.measure}
              </th>
              <td className="cell border-b border-line pr-8 align-top">
                {row.method}
              </td>
              <td className="cell border-b border-line align-top">{row.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
