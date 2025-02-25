"use client";

import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplatesSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {
  const [formData, setFormData] = useState<any>();

  /**
   * Handle input change event and update the form data state.
   */
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /**
   * Handle form submit event and update the form data state.
   */
  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt="icon" width={50} height={50} />
      <h2 className="text-2xl font-semibold mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-sm text-gray-600">{selectedTemplate?.description}</p>
      {/* Form */}
      <form className="mt-5" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-3 flex flex-col gap-2 mb-7">
            <label className="font-semibold">{item.label}</label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field == "textarea" ? (
              <Textarea onChange={handleInputChange} />
            ) : null}
          </div>
        ))}
        {/* Submit Button, disabled if loading */}
        <Button
          type="submit"
          className={`w-full py-5 transition-all duration-300 ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary"
          } ${loading ? "animate-pulse" : "hover:scale-105"}`}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            "Generate"
          )}
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
