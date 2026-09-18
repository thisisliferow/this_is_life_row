import { RichText } from "@/components/Guide/RichText";
import type { BodyScale } from "@/content";

const scaleClass: Record<BodyScale, string> = {
  display: "text-display font-light",
  body: "text-body",
};

export function StatementBody({
  scale = "body",
  children,
}: {
  scale?: BodyScale;
  children: React.ReactNode;
}) {
  return (
    <div className={`stack-copy rich-accent max-w-measure ${scaleClass[scale]}`}>
      {children}
    </div>
  );
}

export function Statement({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <p className={className}>
      <RichText text={text} />
    </p>
  );
}
