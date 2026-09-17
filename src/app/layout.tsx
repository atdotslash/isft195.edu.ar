import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#070d18",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://isft195.edu.ar"),
  title: "ISFT N° 195 — Sitio en construcción",
  description:
    "Portal oficial del Instituto Superior de Formación Técnica N° 195. Educación pública superior técnica. Sitio web oficial en desarrollo y construcción.",
  keywords: [
    "ISFT 195",
    "ISFT N° 195",
    "Instituto Superior de Formación Técnica 195",
    "Educación Superior Técnica",
    "Provincia de Buenos Aires",
    "Sitio en construcción",
  ],
  authors: [{ name: "ISFT N° 195" }],
  openGraph: {
    title: "ISFT N° 195 — Sitio en construcción",
    description:
      "Portal oficial del Instituto Superior de Formación Técnica N° 195. Próximamente nuevo portal web institucional.",
    url: "https://isft195.edu.ar",
    siteName: "ISFT N° 195",
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-[#070d18] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
