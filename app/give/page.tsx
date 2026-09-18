import type { Metadata } from "next";
import { ActionPage } from "@/components/Guide/ActionPage";

export const metadata: Metadata = {
  title: "Give or volunteer",
  description:
    "Donate, mentor, teach a skill, provide meals, or help with transportation.",
};

export default function GivePage() {
  return (
    <ActionPage
      heading="Give or volunteer."
      body="Donate, mentor, teach a skill, provide meals, or help with transportation."
    />
  );
}
