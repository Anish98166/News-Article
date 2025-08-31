import { useEffect, useState } from "react";
import axios from "axios";
import { apiKey } from "../utils/constant";
import { Article } from "../types/Article";

export const useNews = (
  searchQuery: string,
  page: number,
  pageSize: number
) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await axios.get("/api/news", {
          params: {
            q: searchQuery,
            page,
            pageSize,
          },
        });
        setArticles(result.data.articles || []);
        setTotalResults(result.data.totalResults || 0);
      } catch (err: any) {
        console.error("Error fetching news:", err);
        setError("Failed to load articles. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, [searchQuery, page, pageSize]);

  return { articles, loading, error, totalResults };
};
