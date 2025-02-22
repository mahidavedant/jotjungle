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

const TemplatesSection = ({ userSearchInput }: any) => {
  const [templateList, setTemplateList] = useState(Templates);

  /* Search funtionality: Filter templates based on user input
   *
   * If userSearchInput is provided, filter the templates based on the user input.
   * Otherwise, set the templateList to the original list of templates.
   *
   */
  useEffect(() => {
    if (userSearchInput) {
      console.log("User Input:", userSearchInput);
      const filteredTemplates = Templates.filter((template) =>
        template.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      console.log("Filtered Templates:", filteredTemplates);
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(Templates);
    }
  }, [userSearchInput]);

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {templateList.map((template: TEMPLATE, index: number) => (
        <TemplateCard key={index} {...template} />
      ))}
    </div>
  );
};

export default TemplatesSection;
