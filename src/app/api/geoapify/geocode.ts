// pages/api/geocode.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { text } = req.query;

  if (!text || typeof text !== "string") {
    return res.status(400).json({ error: "Missing text query parameter" });
  }

  const key = process.env.GEOAPIFY_API_KEY;
  try {
    const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(text)}&limit=5&lang=de&country=de&apiKey=${key}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Geoapify request failed" });
  }
}