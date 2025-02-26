import { Search } from "lucide-react";
import React from "react";
import { CategoryColors } from "@/app/(data)/Templates";

const SearchSection = ({ onSearchInput, onCategorySelect, selectedCategory }: {
  onSearchInput: (value: string) => void;
  onCategorySelect: (category: string | null) => void;
  selectedCategory: string | null;
}) => {
  return (
    <div className="p-10 bg-gradient-to-br from-primary via-[#D5006D] to-[#0D3B66] animate-gradient text-white flex flex-col justify-center items-center">
      <h2 className="text-5xl space-grotesk-bold mb-2 mt-2">
        Unlock the Power of AI
      </h2>
      <p className="text-sm text-center mb-5">
        Discover a curated collection of AI templates that fuel your creativity
        and streamline your workflow.
      </p>

      {/* Search Bar */}
      <div className="w-full flex justify-center mb-5">
        <div className="flex items-center gap-2 p-3 border rounded-lg bg-white w-[40%]">
          <Search className="text-primary cursor-pointer" />
          <input
            onChange={(e) => onSearchInput(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full outline-none bg-transparent text-black"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 justify-center max-w-4xl">
        <button
          onClick={() => onCategorySelect(null)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all
            ${!selectedCategory 
              ? 'bg-white text-primary' 
              : 'bg-white/20 text-white hover:bg-white/30'}`}
        >
          All
        </button>
        {Object.keys(CategoryColors).map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all
              ${selectedCategory === category 
                ? 'bg-white text-primary' 
                : 'bg-white/20 text-white hover:bg-white/30'}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
