import type { BodyScale } from "@/content";

const scaleClass: Record<BodyScale, string> = {
  display: "text-display font-light",
  "statement-md": "text-statement-md font-normal",
  "statement-sm": "text-statement-sm font-normal",
  body: "text-body-lg font-normal",
};

export function StatementBody({
  scale = "statement-sm",
  children,
}: {
  scale?: BodyScale;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`statement-body max-w-[52rem] [&_p+p]:mt-[1em] ${scaleClass[scale]}`}
    >
      {children}
    </div>
  );
}
