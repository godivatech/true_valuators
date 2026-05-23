import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollRevealInit from "./components/ScrollRevealInit";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "True Valuators | Property Valuers & Consultant Engineers",
  description: "Approved Government Registered Valuers and Chartered Engineers under IOV, IBBI, and Income Tax Department. Providing precise property and industrial asset valuations across Chennai, Madurai, and India.",
  keywords: "True Valuators, Property Valuer Chennai, Chartered Engineers Madurai, Govt Registered Valuer, Asset Valuation India, IBBI Valuer, IOV Valuers, Real Estate Valuation",
  robots: "index, follow",
  icons: {
    icon: "/images/Logo.png",
    apple: "/images/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ScrollRevealInit />
        <Header />
        <main style={{ minHeight: "80vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
