type PairRow = {
  label: string;
  detail: string;
};

export function PairTable({
  headers,
  rows,
}: {
  headers: [string, string];
  rows: PairRow[];
}) {
  return (
    <div className="mt-8 max-w-measure overflow-x-auto">
      <table className="w-full border-collapse text-left text-body">
        <thead>
          <tr>
            <th className="cell-head border-b border-line-strong pr-6 text-label text-muted">
              {headers[0]}
            </th>
            <th className="cell-head border-b border-line-strong text-label text-muted">
              {headers[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${index}-${row.label}`}>
              <th
                scope="row"
                className="cell w-[var(--col-label)] border-b border-line pr-8 align-top font-medium"
              >
                {row.label}
              </th>
              <td className="cell border-b border-line align-top">{row.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
