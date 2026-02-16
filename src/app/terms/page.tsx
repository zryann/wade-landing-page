import type { Metadata } from "next";
import TermsConditions from "@/views/TermsConditions";

export const metadata: Metadata = {
  title: "Terms & Conditions | WADE",
};

export default function TermsPage() {
  return <TermsConditions />;
}
