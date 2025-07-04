import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono } from 'next/font/google'
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Weather App",
  description: "Aplikacja do sprawdzania pogody na podstawie API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={roboto_mono.className}>
      <body className="bg-yellow-50">{children}</body>
    </html>
  );
}
