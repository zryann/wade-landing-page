import type { Metadata } from "next";
import { ReactNode } from "react";
import Providers from "./providers";
import "@/index.css";

export const metadata: Metadata = {
  title: "WADE",
  description: "WADE delivery platform landing page",
  icons: {
    icon: "/favicon.svg",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
