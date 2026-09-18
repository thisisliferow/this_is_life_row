"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

type SceneProps = {
  id: string;
  title: string;
  lede?: string;
  paragraphs?: string[];
  highlights?: string[];
  src: string;
  alt: string;
};

export function Scene({
  id,
  title,
  lede,
  paragraphs,
  highlights,
  src,
  alt,
}: SceneProps) {
  const container = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={container}
      id={id}
      className="relative isolate flex h-dvh scroll-mt-12 items-center overflow-hidden lg:scroll-mt-4"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-x-0 -top-[10%] h-[120%]">
          <motion.div
            style={{ y: reduceMotion ? 0 : y }}
            className="relative h-full w-full"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 64rem) calc(100vw - 240px), 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="relative z-10 flex h-full w-full flex-col justify-between px-gutter py-[var(--space-16)] text-white">
        <div className="max-w-[min(36rem,100%)] text-body mix-blend-difference">
          {lede ? <p className="text-heading">{lede}</p> : null}
          {highlights?.length ? (
            <ul className="mt-stack list-none space-y-1 p-0 text-heading">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <h2 className="max-w-full text-banner mix-blend-difference">
          {title}
        </h2>
      </div>
    </section>
  );
}
