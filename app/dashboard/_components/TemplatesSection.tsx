import Templates from "@/app/(data)/Templates";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";

// Templates interface
export interface TEMPLATE {
  name: string;
  description: string;
  category: string;
  icon: string;
  slug: string;
  prompt: string;
  form?: FORM[];
}

// Form interface
export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const TemplatesSection = ({ 
  userSearchInput, 
  selectedCategory 
}: { 
  userSearchInput?: string;
  selectedCategory: string | null;
}) => {
  const [templateList, setTemplateList] = useState(Templates);

  useEffect(() => {
    let filteredTemplates = Templates;

    // Filter by search input
    if (userSearchInput) {
      filteredTemplates = filteredTemplates.filter((template) =>
        template.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filteredTemplates = filteredTemplates.filter((template) =>
        template.category === selectedCategory
      );
    }

    setTemplateList(filteredTemplates);
  }, [userSearchInput, selectedCategory]);

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {templateList.map((template: TEMPLATE, index: number) => (
        <TemplateCard key={index} {...template} />
      ))}
    </div>
  );
};

export default TemplatesSection;
