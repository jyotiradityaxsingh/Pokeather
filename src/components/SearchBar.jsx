import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="flex items-center border bg-white rounded-xl overflow-hidden">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="w-full px-4 py-2 outline-none text-gray-700"
        />
        <button
          type="submit"
          className="bg-yellow-300 text-black px-4 py-2 hover:bg-yellow-400 transition duration-200"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
