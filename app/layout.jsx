import "./globals.css";
import { Inter } from "next/font/google";
import ClientLayout from "./ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-gray-800 antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
