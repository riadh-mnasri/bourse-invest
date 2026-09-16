/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Root layout: fonts, the blocking anti-flash theme script, and the
 * providers (locale) that wrap every page.
 */
import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import { LocaleProvider } from "@/lib/i18n";
import { THEME_BOOTSTRAP_SCRIPT } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bourse-invest.vercel.app"),
  title: "BourseInvest: comprendre avant d'investir",
  description:
    "Guide pedagogique bilingue (FR/EN) sur les bases de la bourse, la fiscalite de l'investissement en France (PEA, CTO, assurance-vie) et la construction d'une routine d'investisseur saine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <LocaleProvider>
          <AppHeader />
          <main className="flex-1">{children}</main>
          <AppFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
