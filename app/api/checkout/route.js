// app/api/checkout/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  // Lazy import Stripe only when this route is called
  const Stripe = (await import("stripe")).default;

  // Initialize with your secret key from environment variables
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-06-20",
  });

  try {
    const body = await req.json();
    const { priceId, quantity = 1 } = body;

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://luxesculptperformance.com";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity }],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cart`,
    });

    console.log("✅ Stripe session created:", session.id);
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("❌ Stripe checkout error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
