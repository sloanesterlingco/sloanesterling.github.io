export default function Head() {
  return (
    <>
      <title>LUXESCULPT™ | Precision Engineered Activewear</title>
      <meta
        name="description"
        content="Sculpted precision for form, flow, and power — engineered to enhance movement and recovery. Limited to 300 Elite Builds."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />

      {/* ✅ Corrected favicon and icons */}
      <link rel="icon" href="/brand/favicon.png" />
      <link rel="apple-touch-icon" href="/brand/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* ✅ Open Graph / SEO */}
      <meta property="og:title" content="LUXESCULPT™ | Precision Engineered Activewear" />
      <meta
        property="og:description"
        content="Elite compression architecture designed by Sloane Sterling — performance without compromise."
      />
      <meta property="og:image" content="/brand/favicon.png" />
      <meta property="og:url" content="https://luxesculptperformance.com" />
      <meta property="og:type" content="website" />

      {/* ✅ Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="LUXESCULPT™ | Precision Engineered Activewear" />
      <meta
        name="twitter:description"
        content="Sculpted precision for form, flow, and power — engineered to enhance movement and recovery."
      />
      <meta name="twitter:image" content="/brand/favicon.png" />
    </>
  );
}

