export default function Head() {
  return (
    <>
      {/* 🏷️ META BASICS */}
      <title>LUXESCULPT™ | Precision Engineered Activewear</title>
      <meta
        name="description"
        content="Sculpted precision for form, flow, and power — engineered to enhance movement and recovery. Limited to 300 Elite Builds."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta charSet="utf-8" />

      {/* 💎 ICONS & MANIFEST (CACHE-BUSTED v2) */}
      <link rel="icon" href="/favicon-v2.png?v=9" />
      <link rel="icon" href="/brand/favicon-v2.png?v=9" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/brand/apple-touch-icon.png?v=9"
      />
      <link rel="manifest" href="/manifest.json?v=9" />

      {/* 🧠 OPEN GRAPH / SOCIAL SHARE */}
      <meta
        property="og:title"
        content="LUXESCULPT™ | Precision Engineered Activewear"
      />
      <meta
        property="og:description"
        content="Elite compression architecture designed by Sloane Sterling — performance without compromise."
      />
      <meta property="og:image" content="/brand/favicon-v2.png?v=9" />
      <meta
        property="og:url"
        content="https://luxesculptperformance.com"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="LUXESCULPT™" />

      {/* 🐦 TWITTER CARD */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="LUXESCULPT™ | Precision Engineered Activewear"
      />
      <meta
        name="twitter:description"
        content="Sculpted precision for form, flow, and power — engineered to enhance movement and recovery."
      />
      <meta name="twitter:image" content="/brand/favicon-v2.png?v=9" />

      {/* 🖤 BRAND TOUCHES */}
      <meta name="application-name" content="LUXESCULPT™" />
      <meta name="apple-mobile-web-app-title" content="LUXESCULPT™" />

      {/* 🧩 FALLBACK ICONS FOR LEGACY BROWSERS */}
      <link rel="shortcut icon" href="/brand/favicon-v2.png?v=9" type="image/png" />
      <link rel="mask-icon" href="/brand/favicon-v2.png?v=9" color="#F5C84C" />

      {/* ✨ BRAND COLOR ACCENTS */}
      <meta name="msapplication-TileColor" content="#F5C84C" />
      <meta name="theme-color" content="#000000" />
    </>
  );
}

