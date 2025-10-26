import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LuxeSculpt™ — AI Athletic Evolution",
  description: "Bioadaptive Athletic Architecture by Sloane Sterling™",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
