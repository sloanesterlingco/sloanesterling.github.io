import "./globals.css";
import NavBar from "./components/NavBar";
import { CartProvider } from "./context/CartContext";
import { productSchema } from "./run/schema.jsonld";
import { brandSchema } from "./brand/schema.jsonld";
import { graphSchema } from "./graph/schema.jsonld";

export const metadata = {
  title: "LuxeSculpt™ Performance — Precision Compressionwear for Elite Movement",
  description:
    "Engineered for intensity. LuxeSculpt™ Proto-01 introduces adaptive compression architecture and biomechanical muscle mapping. Designed for performance. Built for beauty.",
  openGraph: {
    title: "LuxeSculpt™ Performance — Engineered for Movement",
    description:
      "Adaptive compression architecture. Sculpted precision. The evolution of elite performancewear begins here.",
    url: "https://www.luxesculptperformance.com",
    siteName: "LuxeSculpt™",
    images: [
      {
        url: "https://www.luxesculptperformance.com/images/luxesculpt/engineered-fabric.png",
        width: 1200,
        height: 630,
        alt: "LuxeSculpt™ Fabric Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxeSculpt™ Performance — Precision Compressionwear",
    description:
      "Biomechanical innovation meets sculpted aesthetics. LuxeSculpt™ Proto-01 is redefining compressionwear.",
    images: [
      "https://www.luxesculptperformance.com/images/luxesculpt/muscle-mapping.png",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
        />
      </head>

      <body className="scroll-smooth bg-black text-white antialiased">
        <CartProvider>
          <NavBar />
          <main id="content">{children}</main>

          <footer className="bg-black text-gray-400 py-10 border-t border-gray-800 text-center text-sm">
            <p>
              © {new Date().getFullYear()} LuxeSculpt™ Performance — Engineered
              by Sloane Sterling. All Rights Reserved.
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <a
                href="https://www.instagram.com/sloanesterlingc/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@sloanesterling"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                TikTok
              </a>
              <a href="#" className="hover:text-white transition">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms
              </a>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
