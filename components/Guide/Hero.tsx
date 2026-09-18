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

  return (
    <>
      <section
        id="introduction"
        className="relative desktop:h-svh desktop:overflow-hidden"
      >
        <div className="hero-frame relative aspect-[16/10]">
          <MediaSlot fill />
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-center desktop:flex">
            <Brandmark
              decorative
              className="h-auto w-[min(29.12rem,40.32%)] object-contain opacity-75"
            />
          </div>
        </div>
        <div className="px-gutter py-8 desktop:absolute desktop:inset-x-0 desktop:bottom-0 desktop:z-10 desktop:pb-10 desktop:pt-0">
          <h1 className="max-w-measure text-title desktop:text-display">
            <WorkSentence />
          </h1>
        </div>
      </section>
      {kicker || headline || paragraphs.length || photos.length ? (
        <div className="px-gutter py-12 lg:py-16">
          {photos.length ? (
            <div className="mb-8 grid grid-cols-1 gap-4 lg:mb-10 desktop:grid-cols-3 desktop:gap-6">
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
          {kicker ? (
            <p className="mb-5 max-w-[40rem] text-caption">{kicker}</p>
          ) : null}
          {headline ? (
            <p className="rich-accent max-w-measure text-title">
              <RichText text={headline} />
            </p>
          ) : null}
          {paragraphs.length ? (
            <div
              className={`stack-copy rich-accent max-w-measure text-body ${headline ? "mt-6" : ""}`}
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
    </>
  );
}
