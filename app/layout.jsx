git add app/layout.jsx
git commit -m "Trigger Vercel redeploy (layout stable)"
git push origin main

import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "LUXESCULPT™ | Limited Production",
  description:
    "Adaptive Compression Architecture — Sculpted precision for form, flow, and power. Engineered to enhance movement, recovery, and performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white min-h-screen overflow-x-hidden">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

