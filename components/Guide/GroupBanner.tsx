import { BannerParallax } from "@/components/Guide/BannerParallax";
import type { GuideBanner } from "@/content/Types";

type GroupBannerProps = {
  id: string;
  heading: string;
  banner?: GuideBanner;
};

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
      <h2 className="px-gutter pt-12 text-display font-light lg:pt-16">
        {heading}
      </h2>
    </section>
  );
}
