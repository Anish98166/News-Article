import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const apiKey = process.env.VITE_NEWSAPI_KEY;
  const { q, page = "1", pageSize = "10" } = req.query;

  const url = q
    ? `https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
    : `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res
        .status(response.status)
        .json({ message: "Error fetching news" });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}
