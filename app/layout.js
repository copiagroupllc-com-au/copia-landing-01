import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://copiagroupllc.com.au"),
  title: {
    default: "Copia Group | Investment, Web3 & Real Estate — Australia",
    template: "%s | Copia Group Australia",
  },
  description: "Copia Group is an Australian-based innovation hub focused on investment, fintech, payments, Web3, AI, real estate, and gaming — pioneering the future of digital finance.",
  keywords: ["Copia Group", "investment", "fintech", "payments", "Web3", "AI", "real estate", "gaming", "Australia", "blockchain"],
  authors: [{ name: "Copia Group LLC", url: "https://copiagroupllc.com" }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://copiagroupllc.com.au",
    siteName: "Copia Group Australia",
    title: "Copia Group | Investment, Web3 & Real Estate — Australia",
    description: "Copia Group is an Australian-based innovation hub focused on investment, fintech, payments, Web3, AI, real estate, and gaming.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Copia Group | Investment, Web3 & Real Estate — Australia",
    description: "Copia Group is an Australian-based innovation hub focused on investment, fintech, payments, Web3, AI, real estate, and gaming.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
