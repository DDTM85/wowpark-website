import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WOW - World of Wonders | Lusail",
  description: "60+ thrilling activities and attractions for the whole family in Lusail, Doha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} h-full antialiased`}
      style={{ fontFamily: 'var(--font-fredoka)' }}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
