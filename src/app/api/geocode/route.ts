import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text");

  if (!text) {
    return NextResponse.json({ error: "Missing text parameter" }, { status: 400 });
  }

  // WICHTIG: Next.js liest nur env-Variablen OHNE "NEXT_PUBLIC_" auf dem Server
  const API_KEY = process.env.GEOAPIFY_API_KEY;

  if (!API_KEY) {
    console.error("❌ GEOAPIFY_API_KEY is missing on server!");
    return NextResponse.json({ error: "Missing GEOAPIFY_API_KEY" }, { status: 500 });
  }

  const url =
    `https://api.geoapify.com/v1/geocode/autocomplete?` +
    `text=${encodeURIComponent(text)}` +
    `&limit=5&lang=de&country=de&apiKey=${API_KEY}`;

  const geoRes = await fetch(url);

  if (!geoRes.ok) {
    console.error("Geoapify Error:", await geoRes.text());
    return NextResponse.json({ error: "Geoapify request failed" }, { status: 500 });
  }

  const data = await geoRes.json();
  return NextResponse.json(data);
}
