import type { Metadata } from "next";
import Index from "@/views/Index";

export const metadata: Metadata = {
  title: "WADE - Food, Taxi & Market Delivery",
  description:
    "WADE - Your all-in-one delivery platform for Food, Taxi, and Market services.",
  openGraph: {
    title: "WADE - Food, Taxi & Market Delivery",
    description: "Your all-in-one delivery platform for Food, Taxi, and Market services.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WADE - Food, Taxi & Market Delivery",
    description: "Your all-in-one delivery platform for Food, Taxi, and Market services.",
  },
};

export default function HomePage() {
  return <Index />;
}
