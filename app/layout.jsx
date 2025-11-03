// app/layout.jsx
import "./globals.css";
import NavBar from "./components/NavBar";
import { CartProvider } from "./context/CartContext";
import { productSchema } from "./run/schema.jsonld";
import { brandSchema } from "./brand/schema.jsonld";

// ===============================
// 🌐 METADATA (SEO + SOCIAL)
// ===============================
export const metadata = {
  title: "LuxeSculpt™ | Engineered for Intensity",
  description:
    "Elite compression architecture meets sculpted design. LuxeSculpt™ Proto-01 — performance engineered for beauty, built for power.",
  openGraph: {
    title: "LuxeSculpt™ | Engineered for Intensity",
    description:
      "High-performance muscle-mapping compression designed for elite movement and aesthetics.",
    url: "https://luxesculptperformance.com",
    siteName: "LuxeSculpt™",
    images: [
      {
        url: "/og/luxesculpt-og.png",
        width: 1200,
        height: 630,
        alt: "LuxeSculpt™ | Engineered for Intensity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxeSculpt™ | Engineered for Intensity",
    description:
      "Adaptive compression architecture for elite performance and sculpted design.",
    images: ["/og/luxesculpt-og.png"],
  },
};

// ===============================
// ⚙️ ROOT LAYOUT
// ===============================
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
      </head>
      <body className="bg-black text-white antialiased">
        <CartProvider>
          <NavBar />
          {children}
        </CartProvider>
        <footer className="py-10 text-center text-gray-500 text-sm tracking-wide">
          © {new Date().getFullYear()} LuxeSculpt™ — Designed by Sloane Sterling
        </footer>
      </body>
    </html>
  );
}
