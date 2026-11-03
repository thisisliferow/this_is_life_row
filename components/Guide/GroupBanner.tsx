import { BannerParallax } from "@/components/Guide/BannerParallax";
import type { GuideBanner } from "@/content/Types";

type GroupBannerProps = {
  id: string;
  heading?: string;
  banner?: GuideBanner;
};

function HeadingLines({ heading }: { heading: string }) {
  const lines = heading.match(/[^.!?]+[.!?]+/g)?.map((line) => line.trim());
  if (!lines || lines.length < 2) return heading;

  return (
    <>
      {lines.map((line, index) => (
        <span key={line}>
          {index > 0 ? (
            <>
              <br className="hidden desktop:block" />
              <span className="desktop:hidden"> </span>
            </>
          ) : null}
          {line}
        </span>
      ))}
    </>
  );
}

export function GroupBanner({ id, heading, banner }: GroupBannerProps) {
  return (
    <section id={id} className="scroll-mt-20">
      {banner ? (
        <div className="px-gutter">
          <div className="relative aspect-[3/2] w-full overflow-hidden bg-ink">
            <BannerParallax src={banner.src} alt={banner.alt} />
          </div>
        </div>
      ) : null}
      {heading ? (
        <h2 className="work-line px-gutter pt-12 text-title desktop:text-display lg:pt-16">
          <HeadingLines heading={heading} />
        </h2>
      ) : null}
    </section>
  );
}
