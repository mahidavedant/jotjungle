import { Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 shadow-sm border-b-2 flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex items-center gap-2 p-3 border rounded-lg flex-1 max-w-2xl">
        <Search />
        <input
          type="text"
          placeholder="Search"
          className="outline-none w-full ml-1"
        />
      </div>

      {/* Subscription Banner */}
      <div className="bg-primary text-white p-2 px-4 rounded-full text-xs font-medium cursor-pointer hover:bg-opacity-90 transition ml-4">
        🚀 Unlock Pro for just <span className="font-bold">$9.99/month</span>
      </div>
    </div>
  );
};

export default Header;
