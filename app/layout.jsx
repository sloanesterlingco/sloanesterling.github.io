import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "LuxeSculpt™ Performance",
  description:
    "Precision Engineered Activewear. Sculpted for form, flow, and performance by Sloane Sterling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col overflow-x-hidden">
        {/* 🧭 MAIN NAVIGATION */}
        <NavBar />

        {/* 🌍 PAGE CONTENT */}
        <main className="flex-grow pt-24 px-0">{children}</main>

        {/* 💠 FOOTER (if needed later) */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
