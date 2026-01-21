import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

// Load Inter font (SEO & performance friendly)
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

// Global SEO metadata
export const metadata = {
  title: {
    default: "Saltstone Overseas Pvt Ltd | Import & Export of Commodities",
    template: "%s | Saltstone Overseas Pvt Ltd",
  },
  description:
    "Saltstone Overseas Private Limited is a trusted importer of coal and exporter of salt, grains, and stone, delivering reliable global trade solutions.",
  keywords: [
    "coal import",
    "salt export",
    "grain export",
    "stone export",
    "import export company india",
    "bulk commodity trading",
  ],
  authors: [{ name: "Saltstone Overseas Pvt Ltd" }],
  creator: "Saltstone Overseas Pvt Ltd",
  metadataBase: new URL("https://www.saltstoneoverseas.com"),
  openGraph: {
    title: "Saltstone Overseas Pvt Ltd",
    description:
      "Global partner in coal import and export of salt, grains and stone.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter bg-white text-gray-800 antialiased">

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
