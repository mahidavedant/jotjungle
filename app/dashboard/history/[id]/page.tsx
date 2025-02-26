"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { db } from "@/utils/db";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import OutputSection from "../../content/_components/OutputSection";

const HistoryDetail = () => {
  const params = useParams();
  const router = useRouter();
  const [historyData, setHistoryData] = useState<any>(null);

  useEffect(() => {
    getHistoryDetail();
  }, []);

  const getHistoryDetail = async () => {
    if (params.id) {
      const result = await db.query.AiOutput.findFirst({
        where: (AiOutput, { eq }) => eq(AiOutput.id, parseInt(params.id as string))
      });
      setHistoryData(result);
    }
  };

  return (
    <div className="p-5">
      <Button onClick={() => router.back()} className="mb-5">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </Button>

      {historyData && (
        <div>
          <h2 className="text-2xl font-bold mb-5 capitalize">
            {historyData.templateSlug.replace(/-/g, " ")}
          </h2>
          <OutputSection aiOutput={historyData.aiResponse} />
        </div>
      )}
    </div>
  );
};

export default HistoryDetail;