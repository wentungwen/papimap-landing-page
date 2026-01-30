import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Papimap - The Map Builder for Creators",
  description: "Design professional, print-ready maps in minutes. From Amsterdam to your local wedding venue.",
  openGraph: {
    title: "Papimap - The Map Builder for Creators",
    description: "Design professional, print-ready maps easily. From city tour to your local wedding venue.",
    url: "https://papimap.com", // Update with your actual URL
    siteName: "Papimap",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Papimap - Professional Map Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Papimap - The Map Builder for Creators",
    description: "Design professional, print-ready maps in minutes. From Amsterdam to your local wedding venue.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nunito.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-C8F52E67CX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C8F52E67CX');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
