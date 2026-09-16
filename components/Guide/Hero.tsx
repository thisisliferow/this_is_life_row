import { MediaSlot } from "@/components/Guide/MediaSlot";
import type { GuideHero } from "@/content/Types";

export function Hero({ wordmark, kicker, headline, paragraphs }: GuideHero) {
  return (
    <section className="px-6 pt-28 pb-16 lg:px-[3.4cqw] lg:pt-[calc(105px+9cqw)] lg:pb-[6cqw]">
      <p className="text-banner whitespace-nowrap font-light tracking-[-0.05em] text-[clamp(1.75rem,8.2cqw,7.25rem)]">
        {wordmark}
      </p>
      <div className="mt-16 lg:mt-[calc(40px+4cqw)]">
        {kicker ? (
          <p className="mb-5 max-w-[40rem] text-caption text-[#8A8A8A]">
            {kicker}
          </p>
        ) : null}
        <h1 className="whitespace-nowrap text-[clamp(1.15rem,3.6cqw,2.75rem)] font-normal tracking-[-0.03em]">
          {headline}
        </h1>
        {paragraphs.length ? (
          <div className="hero-intro mt-8 max-w-[820px] text-body-lg text-[#444] lg:max-w-[74cqw] [&_p+p]:mt-[2.2em]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}
      </div>
      <div className="mt-16 lg:mt-[6cqw]">
        <MediaSlot />
      </div>
    </section>
  );
}
