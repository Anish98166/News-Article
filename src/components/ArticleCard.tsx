import React, { memo } from "react";

interface ArticleCardProps {
  article: {
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="md:col-span-1 h-48 bg-gray-200">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      <div className="md:col-span-2 p-4 flex flex-col justify-center">
        <h2 className="font-semibold text-xl mb-2 line-clamp-2">
          {article.title}
        </h2>
        <p className="text-gray-600 mb-3 line-clamp-3">
          {article.description || "No description available."}
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

export default memo(ArticleCard);
