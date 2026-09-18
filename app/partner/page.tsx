import type { Metadata } from "next";
import { ActionPage } from "@/components/Guide/ActionPage";

export const metadata: Metadata = {
  title: "Partner with us",
  description:
    "Provide space, professional services, or recurring funding through your organization.",
};

export default function PartnerPage() {
  return (
    <ActionPage
      heading="Partner with us."
      body="Provide space, professional services, or recurring funding through your organization."
    />
  );
}
