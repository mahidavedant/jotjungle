"use client";

import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplatesSection from "./_components/TemplatesSection";

const Dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>();

  return (
    <div>
      {/* Search Section */}
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />

      {/* Templates Section */}
      <TemplatesSection userSearchInput={userSearchInput} />
    </div>
  );
};

export default Dashboard;
