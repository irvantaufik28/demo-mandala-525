import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
const headingFont = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-heading", display: "swap" });
const bodyFont = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Mandala 525 Islamic Tour — Untuk Setiap Hati yang Rindu Tanah Suci",
  description: "Demo Mandala 525 Islamic Tour. Pilihan umroh, haji khusus, dokumentasi jamaah dan konsultasi perjalanan ibadah.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
