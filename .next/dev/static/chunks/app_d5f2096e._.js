(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/context/CartContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
function CartProvider({ children }) {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Load saved cart
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            const stored = localStorage.getItem("luxesculpt-cart");
            if (stored) setCart(JSON.parse(stored));
        }
    }["CartProvider.useEffect"], []);
    // Save cart on every change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            localStorage.setItem("luxesculpt-cart", JSON.stringify(cart));
        }
    }["CartProvider.useEffect"], [
        cart
    ]);
    const addToCart = (product)=>{
        setCart((prev)=>{
            const existing = prev.find((i)=>i.id === product.id);
            if (existing) {
                return prev.map((i)=>i.id === product.id ? {
                        ...i,
                        quantity: i.quantity + 1
                    } : i);
            }
            return [
                ...prev,
                {
                    ...product,
                    quantity: 1
                }
            ];
        });
    };
    const removeFromCart = (id)=>setCart((prev)=>prev.filter((i)=>i.id !== id));
    const clearCart = ()=>setCart([]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cart,
            addToCart,
            removeFromCart,
            clearCart
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/context/CartContext.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(CartProvider, "gPYbNUmWK8tVVPcrFDrHV23HVlE=");
_c = CartProvider;
function useCart() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
}
_s1(useCart, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/CartIcon.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/CartContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CartIcon() {
    _s();
    const { cart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const totalItems = cart.reduce((acc, item)=>acc + item.quantity, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/cart",
        className: "relative text-[13px] font-light tracking-[0.14em] opacity-80 hover:opacity-100 transition-opacity",
        children: [
            "BAG",
            totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute -top-2 -right-4 bg-white text-black text-[10px] font-bold rounded-full px-1.5 py-0.5",
                children: totalItems
            }, void 0, false, {
                fileName: "[project]/app/components/CartIcon.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/CartIcon.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(CartIcon, "GQSP7DAu2z+QzdS9621Ip+kHB6w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = CartIcon;
var _c;
__turbopack_context__.k.register(_c, "CartIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/run/schema.jsonld.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ==========================================
// ✅ LuxeRun™ Proto 01 Product Schema — JSON-LD v1.1
// Author: Sloane Sterling
// ==========================================
__turbopack_context__.s([
    "productSchema",
    ()=>productSchema
]);
const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://luxesculptperformance.com/run/#luxerun-proto01",
    name: "LuxeRun™ Proto 01 Compression Legging",
    alternateName: "LuxeRun Prototype 01",
    description: "High-compression performance legwear engineered for sprint, strength, and endurance mastery — featuring raised muscle architecture, adaptive pressure zones, and recovery-driven nylon-spandex blend.",
    sku: "LX-RUN-P01",
    brand: {
        "@type": "Brand",
        "@id": "https://luxesculptperformance.com/#brand",
        name: "LuxeSculpt™ Performance",
        url: "https://luxesculptperformance.com",
        logo: "https://luxesculptperformance.com/brand/LUXESCULPT-ICON.PNG",
        sameAs: [
            "https://www.instagram.com/sloanesterlingc/",
            "https://www.tiktok.com/@sloanesterling"
        ]
    },
    image: [
        "https://luxesculptperformance.com/images/luxerun_proto01_front.jpg",
        "https://luxesculptperformance.com/images/luxerun_proto01_side.jpg",
        "https://luxesculptperformance.com/images/luxerun_proto01_back.jpg"
    ],
    category: "Women's Compression Legwear",
    material: "240–250 gsm nylon-spandex compression blend",
    color: "Matte-black with subtle sheen",
    size: [
        "XS",
        "S",
        "M",
        "L",
        "XL"
    ],
    audience: {
        "@type": "PeopleAudience",
        audienceType: "Athletes, Runners, High-Performance Trainers",
        geographicArea: {
            "@type": "AdministrativeArea",
            name: "United States"
        }
    },
    offers: {
        "@type": "Offer",
        url: "https://luxesculptperformance.com/run",
        priceCurrency: "USD",
        price: "138.00",
        priceValidUntil: "2026-01-01",
        availability: "https://schema.org/PreOrder",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
            "@type": "Organization",
            name: "LuxeSculpt™ Performance",
            url: "https://luxesculptperformance.com"
        }
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "187"
    },
    review: [
        {
            "@type": "Review",
            author: {
                "@type": "Person",
                name: "Elite Runner Test Group"
            },
            datePublished: "2025-09-15",
            reviewBody: "Exceptional compression mapping and adaptive muscle support — the LuxeRun Proto 01 sets a new benchmark for high-performance running gear.",
            name: "Performance Review — LuxeRun Proto 01",
            reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5"
            }
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/brand/schema.jsonld.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ==========================================
// ✅ LuxeSculpt™ Brand Schema — JSON-LD v1.1
// Author: Sloane Sterling
// ==========================================
__turbopack_context__.s([
    "brandSchema",
    ()=>brandSchema
]);
const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "@id": "https://luxesculptperformance.com/#brand",
    name: "LuxeSculpt™ Performance",
    alternateName: "LuxeSculpt Activewear",
    slogan: "Engineered for Performance. Designed for Precision.",
    description: "LuxeSculpt™ Performance is a women’s high-end athleticwear brand founded by Sloane Sterling — merging elite compression technology, biomechanical design, and modern luxury aesthetics across categories like LuxeRun™, LuxeGoat™, LuxeFlow™, LuxeCycle™, and LuxeSwag™.",
    url: "https://luxesculptperformance.com",
    logo: "https://luxesculptperformance.com/brand/LUXESCULPT-ICON.PNG",
    image: "https://luxesculptperformance.com/brand/og-image.jpg",
    brandColor: "#000000",
    foundingDate: "2024-01-01",
    foundingLocation: {
        "@type": "Place",
        name: "Salt Lake City, Utah, USA"
    },
    founder: {
        "@type": "Person",
        "@id": "https://sloanesterling.com/#person",
        name: "Sloane Sterling",
        jobTitle: "Founder & Creative Director",
        sameAs: [
            "https://www.instagram.com/sloanesterlingc/",
            "https://www.tiktok.com/@sloanesterling"
        ]
    },
    sameAs: [
        "https://luxesculptperformance.com",
        "https://www.instagram.com/sloanesterlingc/",
        "https://www.tiktok.com/@sloanesterling"
    ],
    contactPoint: [
        {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            email: "team@sloanesterling.com",
            areaServed: "US",
            availableLanguage: [
                "English"
            ]
        }
    ],
    brand: {
        "@type": "Thing",
        name: "LuxeSculpt™ Performance Apparel"
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "LuxeSculpt™ Performance Lines",
        itemListElement: [
            {
                "@type": "OfferCatalog",
                name: "LuxeRun™ — High-Compression Legwear"
            },
            {
                "@type": "OfferCatalog",
                name: "LuxeGoat™ — Trail & Elevation Line"
            },
            {
                "@type": "OfferCatalog",
                name: "LuxeFlow™ — Studio & Recovery Collection"
            },
            {
                "@type": "OfferCatalog",
                name: "LuxeCycle™ — Road & Spinwear Division"
            },
            {
                "@type": "OfferCatalog",
                name: "LuxeSwag™ — Accessories & Essentials"
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/graph/schema.jsonld.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "graphSchema",
    ()=>graphSchema
]);
const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://luxesculptperformance.com/#organization",
            "name": "LuxeSculpt™ Performance",
            "url": "https://luxesculptperformance.com",
            "logo": "https://luxesculptperformance.com/brand/LUXESCULPT-ICON.png",
            "founder": {
                "@type": "Person",
                "name": "Sloane Sterling",
                "url": "https://sloanesterling.com"
            },
            "sameAs": [
                "https://www.instagram.com/sloanesterling",
                "https://www.tiktok.com/@sloanesterling",
                "https://sloanesterling.com"
            ]
        },
        {
            "@type": "Product",
            "@id": "https://luxesculptperformance.com/#luxerun-proto01",
            "name": "LuxeRun Proto 01 Compression Legging",
            "brand": {
                "@type": "Brand",
                "name": "LuxeSculpt™ Performance"
            },
            "url": "https://luxesculptperformance.com/shop/luxerun",
            "image": "https://luxesculptperformance.com/images/luxerun-proto01.jpg",
            "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "149.00",
                "availability": "https://schema.org/PreOrder"
            }
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/layout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/CartContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CartIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/CartIcon.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$run$2f$schema$2e$jsonld$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/run/schema.jsonld.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$brand$2f$schema$2e$jsonld$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/brand/schema.jsonld.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$graph$2f$schema$2e$jsonld$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/graph/schema.jsonld.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function RootLayout({ children }) {
    _s();
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const divisions = [
        {
            href: "/run",
            src: "/brand/LUXERUN.png",
            label: "LUXERUN™"
        },
        {
            href: "/goat",
            src: "/brand/LUXEGOAT.png",
            label: "LUXEGOAT™"
        },
        {
            href: "/flow",
            src: "/brand/LUXEFLOW.png",
            label: "LUXEFLOW™"
        },
        {
            href: "/cycle",
            src: "/brand/LUXECYCLE.png",
            label: "LUXECYCLE™"
        },
        {
            href: "/swag",
            src: "/brand/LUXESWAG.png",
            label: "LUXESWAG™"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$run$2f$schema$2e$jsonld$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productSchema"])
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/layout.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$brand$2f$schema$2e$jsonld$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brandSchema"])
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/layout.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$graph$2f$schema$2e$jsonld$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphSchema"])
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/layout.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layout.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "scroll-smooth bg-black text-white antialiased",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartProvider"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "sticky top-0 z-50 luxeglass",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/luxesculpt",
                                                    className: "group flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/brand/LUXESCULPT-ICON.PNG",
                                                            width: 38,
                                                            height: 38,
                                                            alt: "LUXESCULPT",
                                                            className: "opacity-95 group-hover:opacity-100 transition-opacity",
                                                            priority: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/layout.jsx",
                                                            lineNumber: 40,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col leading-tight",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "tracking-[0.12em] text-[15px] font-light luxeglow",
                                                                    children: "LUXESCULPT™"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/layout.jsx",
                                                                    lineNumber: 49,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] uppercase tracking-wider text-amber-400 font-medium animate-pulse-slow",
                                                                    children: "Limited Production"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/layout.jsx",
                                                                    lineNumber: 52,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/layout.jsx",
                                                            lineNumber: 48,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/layout.jsx",
                                                    lineNumber: 39,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hidden md:flex items-center gap-2.5",
                                                    children: divisions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: item.href,
                                                            className: "group flex items-center gap-[4px] px-[2px] py-[2px] rounded-md hover:bg-white/5 transition-all relative focus:outline-none",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: item.src,
                                                                    width: 30,
                                                                    height: 30,
                                                                    alt: item.label,
                                                                    className: "opacity-85 group-hover:opacity-100 transition-opacity"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/layout.jsx",
                                                                    lineNumber: 66,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[14px] font-light tracking-[0.12em] opacity-80 group-hover:text-[#46b4ff] transition-all duration-500",
                                                                    children: item.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/layout.jsx",
                                                                    lineNumber: 73,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, item.label, true, {
                                                            fileName: "[project]/app/layout.jsx",
                                                            lineNumber: 61,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/layout.jsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/layout.jsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden md:flex items-center gap-8 relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "text-[13px] font-light tracking-[0.14em] opacity-80 hover:opacity-100 transition-opacity",
                                                            children: "SHOP ▾"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/layout.jsx",
                                                            lineNumber: 84,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute right-0 mt-2 w-48 bg-black/80 border border-white/10 rounded-xl shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 ease-in-out",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "py-2 flex flex-col text-sm font-light tracking-wide",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/leggings",
                                                                        className: "px-4 py-2 hover:bg-white/10 transition-colors",
                                                                        children: "Leggings"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/layout.jsx",
                                                                        lineNumber: 89,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/sport-bras",
                                                                        className: "px-4 py-2 hover:bg-white/10 transition-colors",
                                                                        children: "Sport Bras"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/layout.jsx",
                                                                        lineNumber: 90,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/tops",
                                                                        className: "px-4 py-2 hover:bg-white/10 transition-colors",
                                                                        children: "Tops"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/layout.jsx",
                                                                        lineNumber: 91,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/accessories",
                                                                        className: "px-4 py-2 hover:bg-white/10 transition-colors",
                                                                        children: "Accessories"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/layout.jsx",
                                                                        lineNumber: 92,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/layout.jsx",
                                                                lineNumber: 88,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/layout.jsx",
                                                            lineNumber: 87,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/layout.jsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CartIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/app/layout.jsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/layout.jsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "md:hidden flex flex-col gap-[4px] items-center justify-center w-8 h-8 focus:outline-none",
                                            onClick: ()=>setMobileOpen(!mobileOpen),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/layout.jsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/layout.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/layout.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/layout.jsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/layout.jsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:hidden bg-black/95 border-t border-white/10 px-6 pb-6 animate-slide-down",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col mt-4 gap-3",
                                        children: [
                                            divisions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    onClick: ()=>setMobileOpen(false),
                                                    className: "flex items-center justify-between py-2 border-b border-white/10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: item.src,
                                                                width: 24,
                                                                height: 24,
                                                                alt: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/layout.jsx",
                                                                lineNumber: 122,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm tracking-[0.12em]",
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/layout.jsx",
                                                                lineNumber: 123,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/layout.jsx",
                                                        lineNumber: 121,
                                                        columnNumber: 23
                                                    }, this)
                                                }, item.label, false, {
                                                    fileName: "[project]/app/layout.jsx",
                                                    lineNumber: 115,
                                                    columnNumber: 21
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/shop",
                                                        onClick: ()=>setMobileOpen(false),
                                                        children: "SHOP"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/layout.jsx",
                                                        lineNumber: 128,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CartIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/app/layout.jsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/layout.jsx",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/layout.jsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/layout.jsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/layout.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            id: "content",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/app/layout.jsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                            className: "bg-black text-gray-400 py-10 border-t border-gray-800 text-center text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " LuxeSculpt™ Performance — Engineered by Sloane Sterling."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/layout.jsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center gap-6 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.instagram.com/sloanesterlingc/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "hover:text-white transition",
                                            children: "Instagram"
                                        }, void 0, false, {
                                            fileName: "[project]/app/layout.jsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.tiktok.com/@sloanesterling",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "hover:text-white transition",
                                            children: "TikTok"
                                        }, void 0, false, {
                                            fileName: "[project]/app/layout.jsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white transition",
                                            children: "Privacy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/layout.jsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white transition",
                                            children: "Terms"
                                        }, void 0, false, {
                                            fileName: "[project]/app/layout.jsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white transition",
                                            children: "Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/app/layout.jsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/layout.jsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/layout.jsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/layout.jsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/layout.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/layout.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(RootLayout, "33pz4tKGxA4/1e2zOoGo8gBQzP0=");
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_d5f2096e._.js.map