import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenRouter – The Unified Interface for LLMs",
  description:
    "OpenRouter is a unified interface for large language models. Find the best AI models available, compare prices, and access them through a single API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
