import React from "react";
import { TEMPLATE } from "./TemplatesSection";
import Image from "next/image";
import Link from "next/link";

const TemplateCard = (template: TEMPLATE) => {
  return (
    <Link href={`/dashboard/content/${template?.slug}`}>
      <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col gap-3 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl hover:translate-y-1 relative overflow-hidden min-h-[220px]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5] via-[#9B4DFF] to-[#FF9CFF] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-gradient"></div>
        <Image src={template.icon} alt="icon" width={50} height={50} />
        <h2 className="text-lg font-semibold">{template.name}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">
          {template.description}
        </p>
      </div>
    </Link>
  );
};

export default TemplateCard;
