import React, { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import { useNews } from "../hooks/useNews";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const { articles, loading, error, totalResults } = useNews(
    searchQuery,
    page,
    pageSize
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) setPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 md:px-16 lg:px-24 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">News Article</h1>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />

      {error && (
        <div className="text-center text-red-600 mb-4">
          <p>{error}</p>
          <button
            onClick={() => setPage(page)}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Retry
          </button>
        </div>
      )}

      {loading && !articles.length && <Loader />}

      {!loading && !error && articles.length === 0 && (
        <p className="text-center text-gray-500 mb-4">No articles found.</p>
      )}

      <div className="grid gap-6">
        {articles.map((article, i) => (
          <ArticleCard key={i} article={article} />
        ))}
      </div>

      {!error && (
        <Pagination
          page={page}
          setPage={setPage}
          pageSize={pageSize}
          totalResults={totalResults}
        />
      )}
    </div>
  );
};

export default Home;
