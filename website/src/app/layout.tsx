import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Daniela Kinsella | Principal Software Engineer & Speaker",
  description:
    "Principal Software Engineer, System Architect, and AI Strategy Lead with 25+ years of experience. Currently at The New York Times. Available for speaking engagements.",
  openGraph: {
    title: "Daniela Kinsella | Principal Software Engineer & Speaker",
    description:
      "Principal Software Engineer, System Architect, and AI Strategy Lead with 25+ years of experience building and modernizing complex distributed systems.",
    type: "website",
    url: "https://danielakinsella.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
