import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenAnaesthesia AI",
  description: "Evidence-based answers for real-world anaesthesia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-zinc-900 dark:text-white`}
      >
        <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-zinc-800">
          <Link href="/" className="text-xl font-bold">
            OpenAnaesthesia AI
          </Link>
          <div className="flex gap-4 text-sm font-medium">
            <Link href="/about">About</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/sources">Sources</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
        <main className="px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
