import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenfi — Calm USDC on Solana",
  description:
    "Kenfi helps you hold, send and receive USDC on Solana, then choose how much eligible balance to allocate to a clearly disclosed earning strategy.",
  icons: {
    icon: [
      {
        url: "/assets/kinfi-mark-on-dark.svg",
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
      },
      {
        url: "/assets/kinfi-mark-on-light.svg",
        media: "(prefers-color-scheme: light)",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-primary text-white antialiased">
        {children}
      </body>
    </html>
  );
}
