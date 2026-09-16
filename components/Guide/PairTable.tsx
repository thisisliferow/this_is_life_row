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
    <div className="mt-10 overflow-x-auto">
      <table className="w-full border-collapse text-left text-[1rem] leading-[1.45]">
        <thead>
          <tr>
            <th className="border-b border-[#B6B5B0] py-3 pr-6 text-[12px] font-medium text-[#8A8A8A]">
              {headers[0]}
            </th>
            <th className="border-b border-[#B6B5B0] py-3 text-[12px] font-medium text-[#8A8A8A]">
              {headers[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${index}-${row.label}`}>
              <th
                scope="row"
                className="w-[38%] border-b border-[#E8E8E8] py-3.5 pr-8 align-top font-medium"
              >
                {row.label}
              </th>
              <td className="border-b border-[#E8E8E8] py-3.5 align-top">
                {row.detail}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
