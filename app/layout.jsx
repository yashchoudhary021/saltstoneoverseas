import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import ClientLayout from "./ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

export const metadata = {
  title: {
    default: "Saltstone Overseas Pvt Ltd | Import & Export of Commodities",
    template: "%s | Saltstone Overseas Pvt Ltd",
  },
  description:
    "Saltstone Overseas Private Limited is a trusted importer of coal and exporter of salt, grains, and stone, delivering reliable global trade solutions.",
  metadataBase: new URL("https://www.saltstoneoverseas.com"),
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="text-gray-800 antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
