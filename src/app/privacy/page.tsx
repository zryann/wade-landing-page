import type { Metadata } from "next";
import PrivacyPolicy from "@/views/PrivacyPolicy";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
