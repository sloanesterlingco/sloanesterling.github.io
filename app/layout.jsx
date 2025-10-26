import "./../styles/globals.css";

export const metadata = {
  title: "LuxeSculpt™ — AI Athletic Evolution",
  description: "Bioadaptive Athletic Architecture by Sloane Sterling™",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
