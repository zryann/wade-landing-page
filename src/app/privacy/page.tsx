import type { Metadata } from "next";
import PrivacyPolicy from "@/views/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | WADE",
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
