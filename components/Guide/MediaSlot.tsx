export function MediaSlot() {
  return (
    <div
      className="relative aspect-video w-full bg-[#F4F4F4]"
      role="img"
      aria-label="Video"
    >
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/80"
      >
        <span className="ml-1 size-0 border-y-8 border-l-[14px] border-y-transparent border-l-[#151515]" />
      </span>
    </div>
  );
}
