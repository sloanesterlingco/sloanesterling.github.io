import "./globals.css";
import { Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LUXESCULPT™ | Precision Engineered Activewear",
  description:
    "Sculpted precision for form, flow, and power — engineered to enhance movement and recovery. Limited to 300 Elite Builds.",
  metadataBase: new URL("https://luxesculptperformance.com"),
  openGraph: {
    title: "LUXESCULPT™ | Precision Engineered Activewear",
    description:
      "Elite compression architecture designed by Sloane Sterling — performance without compromise.",
    url: "https://luxesculptperformance.com",
    siteName: "LUXESCULPT™",
    images: [
      {
        url: "/videos/luxesculpt-hero-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "LUXESCULPT™ Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUXESCULPT™ | Precision Engineered Activewear",
    description:
      "Elite compression architecture designed by Sloane Sterling — performance without compromise.",
    images: ["/videos/luxesculpt-hero-thumbnail.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <CartProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
