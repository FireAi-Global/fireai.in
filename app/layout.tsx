import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/general/header";
import Footer from "@/components/general/footer";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FireAI - AI Brain for businesses",
  description: "FireAI is the AI brain for businesses. It helps businesses to make better decisions and grow faster powered by AI.",
  authors: [{ name: "FireAI" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://fireai.in/",
    title: "FireAI - AI Brain for businesses",
    description: "FireAI is the AI brain for businesses. It helps businesses to make better decisions and grow faster powered by AI.",
    images: [{
      url: "https://github.com/user-attachments/assets/b6b212c7-f9ca-47fc-a625-56444e52208f",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FireAI - AI Brain for businesses",
    description: "FireAI is the AI brain for businesses. It helps businesses to make better decisions and grow faster powered by AI.",
    images: ["https://github.com/user-attachments/assets/b6b212c7-f9ca-47fc-a625-56444e52208f"],
  },
  verification: {
    other: {
      "msvalidate.01": "82C28A4733153FB70569C7B7BDA7C53B",
    },
  },
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, 
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Microsoft Clarity Code */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
