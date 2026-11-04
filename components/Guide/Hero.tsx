import Image from "next/image";
import { Brandmark } from "@/components/Guide/Brandmark";
import { MediaSlot } from "@/components/Guide/MediaSlot";
import { RichText } from "@/components/Guide/RichText";
import { WorkSentence } from "@/components/Guide/WorkSentence";
import type { GuideHero } from "@/content/Types";

export function Hero({
  headline,
  kicker,
  paragraphs,
  image,
  images,
}: GuideHero) {
  const photos = images ?? (image ? [image] : []);
  const blurb = Boolean(kicker || headline || paragraphs.length);
  const afterHero = Boolean(blurb || photos.length);

  return (
    <>
      <section id="introduction" className="relative">
        <div className="hero-frame relative aspect-[16/10] desktop:aspect-auto desktop:h-dvh desktop:overflow-hidden">
          <MediaSlot fill />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden h-full max-h-dvh items-center justify-center desktop:flex">
            <Brandmark
              decorative
              className="hero-lockup h-auto w-[min(29.12rem,40.32%)] object-contain"
            />
          </div>
        </div>
        <div
          className={`flex flex-col px-gutter ${
            afterHero ? "pb-12 lg:pb-16" : "pb-8"
          }`}
        >
          <h1 className="work-line order-1 py-8 text-title desktop:order-3 desktop:pb-0 desktop:pt-12 lg:desktop:pt-16">
            <WorkSentence />
          </h1>

          {photos.length ? (
            <div className="order-2 mb-8 grid grid-cols-1 gap-4 desktop:mb-0 desktop:grid-cols-3 desktop:gap-6">
              {photos.map((photo, index) => (
                <div
                  key={photo.src}
                  className={`relative aspect-[2/3] overflow-hidden bg-ink ${
                    index > 0 ? "hidden desktop:block" : ""
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    priority={index === 0}
                    sizes={
                      index === 0
                        ? "(width >= 48rem) 30vw, calc(100vw - 3rem)"
                        : "(width >= 48rem) 30vw, 0px"
                    }
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}

          {blurb ? (
            <div className="order-3 desktop:order-1 desktop:pb-12 desktop:pt-12 lg:desktop:pb-16 lg:desktop:pt-16">
              {kicker ? (
                <p className="mb-5 max-w-[40rem] text-caption desktop:mx-auto">
                  {kicker}
                </p>
              ) : null}
              {headline ? (
                <p className="work-line rich-accent text-title">
                  <RichText text={headline} />
                </p>
              ) : null}
              {paragraphs.length ? (
                <div
                  className={`stack-copy rich-accent max-w-measure text-body desktop:mx-auto ${headline ? "mt-6" : ""}`}
                >
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>
                      <RichText text={paragraph} />
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
