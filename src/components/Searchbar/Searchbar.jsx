import { useState } from "react";

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Search logic will be added here once the database is ready
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full bg-white rounded-full shadow-md px-3 sm:px-4 py-2 my-3 ml-1 animate-fade-in transition-all duration-300 focus-within:ring-2 focus-within:ring-red-600 focus-within:border-red-600 focus-within:shadow-lg"
      dir="rtl" // Set the direction to RTL
    >
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="جستجو کنید..."
        className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400 text-xs sm:text-sm md:text-base text-right" // Align text to the right
      />
      {searchTerm && (
        <button
          type="button"
          onClick={clearSearch}
          className="text-gray-500 hover:text-gray-700 transition-colors duration-200 text-xs sm:text-sm px-2"
        >
          ✕
        </button>
      )}
      <button
        type="submit"
        className="ml-2 text-white bg-red-600 hover:bg-red-700 transition-colors duration-200 rounded-full px-2 sm:px-4 py-1 text-xs sm:text-sm md:text-base"
      >
        جستجو
      </button>
    </form>
  );
}