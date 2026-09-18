import type { Metadata } from "next";
import { GuidePage } from "@/components/Guide/GuidePage";
import { groups, hero } from "@/content";

export const metadata: Metadata = {
  title: "Private Social Network",
  description:
    "A nonprofit for young men ages 10 to 21 in South and East LA, including those on probation, leaving gangs, or simply looking for a safe place away from home.",
};

export default function Home() {
  return (
    <GuidePage groups={groups} hero={hero} />
  );
}
