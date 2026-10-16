import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
});

const siteUrl = "https://danielakinsella.com";
const title = "Daniela Kinsella | Principal Engineer & Speaker";
const description =
  "Daniela Kinsella is a Principal Engineer at The New York Times on the AI Enablement team, building enterprise AI workflow automations. Almost 30 years of software engineering in Berlin and New York. Available for keynotes, conference talks and workshops.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Daniela Kinsella",
  },
  description,
  applicationName: "Daniela Kinsella",
  authors: [{ name: "Daniela Kinsella", url: siteUrl }],
  creator: "Daniela Kinsella",
  publisher: "Daniela Kinsella",
  keywords: [
    "Daniela Kinsella",
    "Principal Engineer",
    "The New York Times",
    "AI enablement",
    "agentic systems",
    "AI workflow automation",
    "keynote speaker",
    "engineering speaker",
    "legacy modernization",
    "AWS serverless",
    "software engineer New York",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Daniela Kinsella",
    title,
    description:
      "Everyone is coding now. I help make it grown-up. Principal Engineer at The New York Times, speaker on how AI is changing who builds.",
    locale: "en_US",
    firstName: "Daniela",
    lastName: "Kinsella",
    username: "danielakinsella",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Everyone is coding now. I help make it grown-up. Principal Engineer at The New York Times, speaker on how AI is changing who builds.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#151515",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
