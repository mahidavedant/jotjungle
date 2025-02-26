"use client";

import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplatesSection from "./_components/TemplatesSection";

const Dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div>
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
        onCategorySelect={(category: string | null) => setSelectedCategory(category)}
        selectedCategory={selectedCategory}
      />
      <TemplatesSection 
        userSearchInput={userSearchInput} 
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Dashboard;
