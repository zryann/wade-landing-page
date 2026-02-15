import type { Metadata } from "next";
import TermsConditions from "@/views/TermsConditions";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  return <TermsConditions />;
}
