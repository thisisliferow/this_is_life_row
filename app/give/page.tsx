import type { Metadata } from "next";
import { ActionPage } from "@/components/Guide/ActionPage";

export const metadata: Metadata = {
  title: "Give",
  description: "Support the first cohort.",
};

const donateUrl = process.env.NEXT_PUBLIC_DONATE_URL;

export default function GivePage() {
  return (
    <ActionPage
      heading="Give."
      body="Support the first cohort. Mentor, teach a skill, provide meals, help with transportation, provide space, or professional services."
      action={
        donateUrl
          ? { href: donateUrl, label: "Give with a card." }
          : undefined
      }
    />
  );
}
