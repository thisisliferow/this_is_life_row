import type { AccessRow } from "@/content";

export function AccessTable({ rows }: { rows: AccessRow[] }) {
  return (
    <div className="mt-10">
      <div className="mb-3 hidden text-[12px] font-medium text-[#8A8A8A] lg:grid lg:grid-cols-[38%_1fr]">
        <p>Access</p>
        <p>What it makes possible</p>
      </div>
      <ul className="m-0 list-none p-0">
        {rows.map((row) => (
          <li
            key={row.access}
            className="border-b border-[#E8E8E8] py-3.5 first:border-t first:border-[#B6B5B0]"
          >
            <div className="lg:grid lg:grid-cols-[38%_1fr] lg:gap-8">
              <p className="font-medium">{row.access}</p>
              <p className="mt-1 lg:mt-0">{row.possible}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
