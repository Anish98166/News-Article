import React from "react";

interface Props {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }: Props) => {
  return (
    <form onSubmit={handleSearch} className="flex justify-center mb-8">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for news..."
        className="w-full max-w-xl px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-5 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
