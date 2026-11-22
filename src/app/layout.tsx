import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Full-stack engineer in San Francisco. I build AI agents, and the evals that tell me whether they work.";

export const metadata: Metadata = {
  metadataBase: new URL("https://saatviknagpal.vercel.app"),
  title: "Saatvik Nagpal",
  description,
  openGraph: { title: "Saatvik Nagpal", description, type: "website" },
  twitter: { card: "summary_large_image", title: "Saatvik Nagpal", description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
