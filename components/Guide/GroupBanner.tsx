type GroupBannerProps = {
  id: string;
  heading: string;
};

export function GroupBanner({ id, heading }: GroupBannerProps) {
  return (
    <section
      id={id}
      className="-mt-px mb-10 flex min-h-[260px] scroll-mt-4 items-center bg-[#151515] px-6 lg:mb-[3.4cqw] lg:min-h-[35.5cqw] lg:px-[3.4cqw]"
    >
      <h2 className="max-w-[18ch] text-banner font-light tracking-[-0.05em] text-white">
        {heading}
      </h2>
    </section>
  );
}
