import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("✅ /api/checkout route reached successfully!");
    return NextResponse.json({ message: "API route is alive" });
  } catch (err) {
    console.error("❌ API route crashed:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

