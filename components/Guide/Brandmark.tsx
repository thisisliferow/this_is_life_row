import Image from "next/image";

export function Brandmark({
  className,
  decorative = false,
}: {
  className?: string;
  decorative?: boolean;
}) {
  return (
    <Image
      src="/brand/l-trademark.png"
      alt={decorative ? "" : "Private Social Network"}
      width={1474}
      height={508}
      className={className ?? "h-6 w-auto object-contain"}
      priority
    />
  );
}
