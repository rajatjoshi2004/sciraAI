import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GeistSans } from 'geist/font/sans';
import 'katex/dist/katex.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Metadata, Viewport } from "next";
import { Syne } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Toaster } from "sonner";
import "./globals.css";
import { Providers } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL("https://scira.ai"),
  title: "Opus AI",
  description: "Opus AI is a minimalistic AI-powered search engine that helps you find information on the internet.",
  openGraph: {
    url: "https://scira.ai",
    siteName: "Opus AI",
  },
  keywords: [
    "Opus.ai",
    "Opus ai",
    "Opus AI",
    "Opus AI",
    "Opus.AI",
    "Opus github",
    "ai search engine",
    "Opus",
    "Opus.app",
    "Opus ai",
    "Opus ai app",
    "Opus",
    "MiniPerplx",
    "Opus AI",
    "open source ai search engine",
    "minimalistic ai search engine",
    "ai search engine",
    "Opus (Formerly MiniPerplx)",
    "AI Search Engine",
    "mplx.run",
    "mplx ai",
    "zaid mukaddam",
    "opus.how",
    "search engine",
    "AI",
    "perplexity",
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' }
  ],
}

const syne = Syne({ 
  subsets: ['latin'], 
  variable: '--font-syne',
   preload: true,
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${syne.variable} font-sans antialiased`} suppressHydrationWarning>
        <NuqsAdapter>
          <Providers>
            <Toaster position="top-center" />
            {children}
          </Providers>
        </NuqsAdapter>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
