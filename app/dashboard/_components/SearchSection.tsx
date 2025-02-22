import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div className="p-10 bg-gradient-to-br from-primary via-[#D5006D] to-[#0D3B66] animate-gradient text-white flex flex-col justify-center items-center">
      {/* Heading */}
      <h2 className="text-5xl space-grotesk-bold mb-2 mt-2">
        Unlock the Power of AI
      </h2>
      {/* Subheading */}
      <p className="text-sm text-center">
        Discover a curated collection of AI templates that fuel your creativity
        and streamline your workflow.
      </p>
      {/* Search Bar */}
      <div className="w-full flex justify-center">
        <div className="flex items-center gap-2 p-3 my-5 border rounded-lg bg-white w-[40%]">
          <Search className="text-primary cursor-pointer" />
          <input
            onChange={(e) => onSearchInput(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full outline-none bg-transparent text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
