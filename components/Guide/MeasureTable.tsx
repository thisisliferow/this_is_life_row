import type { MeasureRow } from "@/content/Types";

export function MeasureTable({ rows }: { rows: MeasureRow[] }) {
  return (
    <div className="mt-10 overflow-x-auto">
      <table className="w-full border-collapse text-left text-[1rem] leading-[1.45]">
        <thead>
          <tr>
            <th className="border-b border-[#B6B5B0] py-3 pr-6 text-[12px] font-medium text-[#8A8A8A]">
              Measure
            </th>
            <th className="border-b border-[#B6B5B0] py-3 pr-6 text-[12px] font-medium text-[#8A8A8A]">
              How we’ll track it
            </th>
            <th className="border-b border-[#B6B5B0] py-3 text-[12px] font-medium text-[#8A8A8A]">
              Proposed target
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.measure}>
              <th
                scope="row"
                className="w-[22%] border-b border-[#E8E8E8] py-3.5 pr-8 align-top font-medium"
              >
                {row.measure}
              </th>
              <td className="border-b border-[#E8E8E8] py-3.5 pr-8 align-top">
                {row.method}
              </td>
              <td className="border-b border-[#E8E8E8] py-3.5 align-top">
                {row.target}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
