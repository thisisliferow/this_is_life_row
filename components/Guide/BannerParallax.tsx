import Image from "next/image";

type BannerParallaxProps = {
  src: string;
  alt: string;
};

export function BannerParallax({ src, alt }: BannerParallaxProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 64rem) calc(100vw - 3rem), calc(100vw - 3rem)"
      className="object-cover object-[center_30%]"
    />
  );
}
