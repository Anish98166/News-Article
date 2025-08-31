import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import { apiKey } from "../src/utils/constant";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { q, page = "1", pageSize = "12" } = req.query;

  try {
    const url = q
      ? `https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
      : `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

    const response = await axios.get(url);
    res.status(200).json(response.data); // return articles + totalResults
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}
