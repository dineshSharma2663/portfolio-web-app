import type { Metadata } from "next";
import "./globals.css";
import { MotionProvider } from "@/components/motion-provider";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  keywords: portfolioData.seo.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
