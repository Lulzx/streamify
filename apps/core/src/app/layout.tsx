import "@shared-components/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { cn } from "@shared-components/lib/utils";
import { Toaster } from "@shared-components/ui/sonner-toaster";
import { VercelPerformanceAnalytics } from "@shared-components/components/vercel-analytics";
import { ClerkProvider } from "@clerk/nextjs";
import { siteConfig } from "@/config/site";
import {
  fontBold,
  fontSemibold,
  fontSpecial,
  fontItalic,
  fontRegular,
} from "@shared-components/lib/fonts";
import { env } from "@/env.js";
import { deDE } from "@clerk/localizations";
import { enUS } from "@clerk/localizations";
import { ThemeProvider } from "@shared-components/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { locales } from "@/config/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  manifest: "/manifest.json",
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "All-in-One",
    "B2B",
    "Club TV",
    "Content Business",
    "Content Creators",
    "Content Monetization",
    "Creators Economy",
    "Fan Engagement",
    "Fan Loyalty",
    "Headless Streaming",
    "Live streaming",
    "OTT",
    "SaaS",
    "Sports Streaming",
    "Sports TV",
    "Streaming",
    "Streaming Platform",
    "Video CMS",
    "Video on demand",
    "Video Platform",
    "White Label",
  ],
  authors: [
    {
      name: "Streamify",
      url: "https://github.com/streamify-com",
    },
  ],
  creator: "Streamify",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image`,
      },
    ],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <>
      <ClerkProvider localization={enUS}>
        <html lang={locale} suppressHydrationWarning>
          <head />
          <link rel="manifest" href="/manifest.json" />
          <body
            className={cn(
              "bg-background font-regular min-h-screen antialiased",
              fontRegular.variable,
              fontItalic.variable,
              fontSemibold.variable,
              fontBold.variable,
              fontSpecial.variable,
            )}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div vaul-drawer-wrapper="">{children}</div>
            </ThemeProvider>
            <Toaster />
            <VercelPerformanceAnalytics />
            <SpeedInsights />
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
