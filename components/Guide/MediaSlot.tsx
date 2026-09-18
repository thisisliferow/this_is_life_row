"use client";

import { useEffect, useRef, useState } from "react";

const POSTER = "/hero/poster.jpg";
const MP4 = "/hero/hero.mp4";
const VIDEO_WIDTH = 1920;
const VIDEO_HEIGHT = 1080;

export function MediaSlot({ fill = false }: { fill?: boolean } = {}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const markReady = () => setReady(true);
    video.muted = true;
    video.defaultMuted = true;
    video.addEventListener("playing", markReady);
    if (!video.paused && video.readyState >= 2) {
      markReady();
    }
    void video.play().then(markReady).catch(() => {
      // Autoplay can be blocked; the cover poster stays visible.
    });

    return () => video.removeEventListener("playing", markReady);
  }, [reduceMotion, videoFailed]);

  return (
    <div
      className={`hero-media min-w-0 w-full overflow-hidden bg-ink ${
        fill ? "absolute inset-0" : "relative aspect-[16/10]"
      }`}
    >
      <img
        src={POSTER}
        alt=""
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        className="hero-poster"
        decoding="async"
        fetchPriority="high"
      />
      {reduceMotion || videoFailed ? null : (
        <video
          ref={videoRef}
          className={`hero-video${ready ? "" : " hero-video-pending"}`}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          aria-hidden
          tabIndex={-1}
          onError={() => setVideoFailed(true)}
        >
          <source src={MP4} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
