import React from "react";

interface Props {
  page: number;
  totalResults: number;
  pageSize: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ page, totalResults, pageSize, setPage }: Props) => {
  const totalPages = Math.ceil(totalResults / pageSize);

  return (
    <div className="flex items-center justify-center mt-6 gap-4">
      <button
        onClick={() => {
          setPage((prev) => {
            const newPage = Math.max(prev - 1, 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
            return newPage;
          });
        }}
        disabled={page === 1}
        className="w-24 px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Previous
      </button>

      <span className="px-2 py-2 text-center">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => {
          setPage((prev) => {
            const newPage = prev + 1;
            window.scrollTo({ top: 0, behavior: "smooth" });
            return newPage;
          });
        }}
        disabled={page >= totalPages}
        className="w-24 px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
