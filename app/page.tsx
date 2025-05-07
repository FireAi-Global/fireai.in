import Home from "@/components/pages/home";
import type { Metadata } from "next";
import { defaultMetadata } from "@/config/metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "FireAI - AI-Powered Business Intelligence at Your Fingertips",
  description: "FireAI transforms complex business data into actionable insights. Make smarter decisions faster with our AI-powered business intelligence platform.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "FireAI - AI-Powered Business Intelligence at Your Fingertips",
    description: "FireAI transforms complex business data into actionable insights. Make smarter decisions faster with our AI-powered business intelligence platform.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FireAI - AI-Powered Business Intelligence Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "FireAI - AI-Powered Business Intelligence at Your Fingertips",
    description: "FireAI transforms complex business data into actionable insights. Make smarter decisions faster with our AI-powered business intelligence platform.",
    images: ["/assets/og-image.jpg"],
    creator: "@fireai"
  }
};

export default function HomePage() {
  return <Home />
}
