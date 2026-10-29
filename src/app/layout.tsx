import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ping — One little Ping. A new possibility.",
  description:
    "Meet Ping. A new way to discover people and start conversations worth having. Somewhere between a glance and a hello.",
  keywords: ["Ping", "dating app", "editorial romance", "connections", "conversations"],
  openGraph: {
    title: "Ping — Somewhere between a glance and a hello",
    description: "One little Ping. A new possibility. A modern, intentional way to meet people.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-[#121016] selection:bg-[#EADCFD] selection:text-[#121016] font-sans">
        {children}
      </body>
    </html>
  );
}
