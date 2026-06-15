import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChatWidget } from "@/features/chatbot/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "London Beach Resort & Hotel | General Santos City",
  description: "Experience the ultimate getaway at London Beach Resort. Book day tours, reserve cottages, and secure overnight rooms directly without commissions.",
  keywords: ["London Beach Resort", "GenSan resorts", "General Santos City beach", "Sarangani day tour", "cottage reservation"],
  openGraph: {
    title: "London Beach Resort & Hotel",
    description: "Experience the ultimate getaway in GenSan. Book direct today.",
    type: "website",
    locale: "en_PH",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
