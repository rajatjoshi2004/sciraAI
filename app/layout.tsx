import { Analytics } from "@vercel/analytics/react";
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
  title: {
    default: "Opus Ai - Advance X Research",
    template: "%s | Opus Ai",
  },
  description: "AI-powered Search Engine",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  openGraph: {
    url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
    title: "Opus Ai - Advance X Research",
    description: "AI-powered Search Engine",
    siteName: "Opus Ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opus Ai - Advance X Research",
    description: "AI-powered Search Engine",
    creator: "@opusai",
  },
  keywords: [
    "opus.ai",
    "opus ai",
    "Opus AI",
    "opus AI",
    "OPUS.AI",
    "opus github",
    "ai search engine",
    "Opus",
    "opus",
    "opus.app",
    "opus ai",
    "opus ai app",
    "opus",
    "AI Search Engine",
    "search engine",
    "AI",
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
        <script async src="https://cdn.seline.com/seline.js" data-token={process.env.SELINE_TOKEN}></script>
      </body>
    </html>
  );
}
