"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const POSTER = "/hero/poster.jpg";
const MP4 = "/hero/hero.mp4";

export function Intro() {
  const container = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    void video.play().catch(() => {
      // Autoplay can be blocked; the poster attribute stays visible.
    });
  }, [reduceMotion, videoFailed]);

  const media =
    reduceMotion || videoFailed ? (
      <Image
        src={POSTER}
        alt=""
        fill
        priority
        sizes="(min-width: 64rem) calc(100vw - 240px), 100vw"
        className="object-cover"
      />
    ) : (
      <video
        ref={videoRef}
        className="hero-video absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        aria-hidden
        tabIndex={-1}
        onError={() => setVideoFailed(true)}
      >
        <source src={MP4} type="video/mp4" />
      </video>
    );

  return (
    <div ref={container} className="h-dvh overflow-hidden bg-wash">
      <motion.div
        style={{ y: reduceMotion ? 0 : y }}
        className="relative h-full"
      >
        {media}
      </motion.div>
    </div>
  );
}
