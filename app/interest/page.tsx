import type { Metadata } from "next";
import { ActionPage } from "@/components/Guide/ActionPage";

export const metadata: Metadata = {
  title: "Join the interest list",
  description:
    "For young men and families. Get updates when eligibility, dates, and enrollment are confirmed.",
};

export default function InterestPage() {
  return (
    <ActionPage
      heading="Join the interest list."
      body="For young men and families. Get updates when eligibility, dates, and enrollment are confirmed."
    />
  );
}
