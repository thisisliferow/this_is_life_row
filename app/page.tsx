import type { Metadata } from "next";
import { GuidePage } from "@/components/Guide/GuidePage";
import { groups, hero } from "@/content";

export const metadata: Metadata = {
  title: "Life Row",
  description:
    "This is Life Row: a place for young men to become.",
};

export default function Home() {
  return (
    <GuidePage groups={groups} hero={hero} />
  );
}
