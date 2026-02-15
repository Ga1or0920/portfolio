import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-topaz-zeta-a7ct5meaba.vercel.app"),
  title: "がろろ | Web Developer Portfolio",
  description:
    "がろろのポートフォリオサイト。Next.js / TypeScript / React を使ったWeb開発の実績を紹介します。",
  openGraph: {
    title: "がろろ | Web Developer Portfolio",
    description:
      "がろろのポートフォリオサイト。Web開発の実績を紹介します。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
