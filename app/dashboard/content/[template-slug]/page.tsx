"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplatesSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModel";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>();

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === params["template-slug"]
  );

  // Generate AI Content
  const GenerateAiContent = async (formdata: any) => {
    setLoading(true);

    const selectedPrompt = selectedTemplate?.prompt;
    const finalAiPrompt = JSON.stringify(formdata) + ", " + selectedPrompt;

    const result = await chatSession.sendMessage(finalAiPrompt);
    console.log("AI Response:\n", result.response.text());

    setAiOutput(result?.response.text());

    setLoading(false);
  };

  return (
    <div className="p-5">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => {
            GenerateAiContent(v);
          }}
          loading={loading}
        />
        {/* Output Section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
