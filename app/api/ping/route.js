import { NextResponse } from "next/server";
import Stripe from "stripe";

// ✅ Initialize Stripe with your secret key from Vercel environment
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

// ✅ Handle POST requests to create checkout session
export async function POST(req) {
  try {
    const body = await req.json();

    // Expecting: { priceId: "price_xxx", quantity: 1 }
    const { priceId, quantity = 1 } = body;

    if (!priceId) {
      return NextResponse.json(
        { error: "Missing priceId" },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    // ✅ Create a new checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cart`,
    });

    // ✅ Return the checkout URL
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("❌ Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Error starting checkout" },
      { status: 500 }
    );
  }
}

// ✅ Handle GET requests (for quick testing)
export async function GET() {
  return NextResponse.json({
    message: "Checkout route is alive and ready 🚀",
  });
}
