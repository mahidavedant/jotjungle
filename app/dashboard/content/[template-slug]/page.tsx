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
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { CREDITS_CONFIG } from "@/app/config/credits";
import toast from 'react-hot-toast';
import { useCredits } from "@/app/context/CreditsContext";


interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const { refreshCredits } = useCredits();
  
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>();
  const { user } = useUser();

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === params["template-slug"]
  );

  // Check credits usage
  const checkCreditsUsage = async () => {
    try {
      const outputs = await db.select().from(AiOutput);
      const totalWords = outputs.reduce((acc, output) => {
        const wordCount = output.aiResponse?.trim().split(/\s+/).length ?? 0;
        return acc + wordCount;
      }, 0);
      return totalWords;
    } catch (error) {
      console.error("Error calculating credits:", error);
      return 0;
    }
  };

  // Generate AI Content
  const GenerateAiContent = async (formData: any) => {
    const currentUsage = await checkCreditsUsage();
    
    if (CREDITS_CONFIG.isOverLimit(currentUsage)) {
      toast.error("Usage Limit Exceeded - " + CREDITS_CONFIG.upgradeMessage);
      return;
    }

    setLoading(true);
    try {
      const selectedPrompt = selectedTemplate?.prompt;
      const finalAiPrompt = JSON.stringify(formData) + ", " + selectedPrompt;

      const result = await chatSession.sendMessage(finalAiPrompt);
      const response = result?.response.text();
      setAiOutput(response);
      
      await SaveInDb(
        JSON.stringify(formData),
        selectedTemplate?.slug,
        response
      );
    } catch (error) {
      console.error("Error generating content:", error);
      alert("Failed to generate content");
    } finally {
      setLoading(false);
    }
  };

  // Save in DB
  const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
    const result = await db.insert(AiOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    });
    await refreshCredits();
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
