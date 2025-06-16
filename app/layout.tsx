import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wheater app",
  description: "Simple wheater app made with next.js, typescript, tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
