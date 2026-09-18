import type { Metadata } from "next";
import { JourneyPage } from "@/components/Journey/JourneyPage";
import { causeGroups } from "@/content/Cause";

export const metadata: Metadata = {
  title: "Private Social Network",
  description:
    "A nonprofit for young men ages 10 to 21 in South and East LA, including those on probation, leaving gangs, or simply looking for a safe place away from home.",
};

export default function CausePage() {
  return <JourneyPage groups={causeGroups} />;
}
