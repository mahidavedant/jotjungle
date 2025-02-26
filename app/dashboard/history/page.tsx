"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { eq } from "drizzle-orm";
import { AiOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import HistoryCard from "../_components/HistoryCard";

const History = () => {
  const [historyList, setHistoryList] = useState<any>([]);
  
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      getHistory();
    }
  }, [user]);

  const getHistory = async () => {
    try {
      const result = await db
        .select()
        .from(AiOutput)
        .where(eq(AiOutput.createdBy, user?.primaryEmailAddress?.emailAddress as string));

      console.log("History Data:", result);
      setHistoryList(result);
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-10">Loading...</div>;
  }

  const handleDelete = () => {
    // Refresh the history list after deletion
    getHistory();
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-5">Your Generation History</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {historyList.map((item: any, index: number) => (
          <HistoryCard 
            key={index} 
            {...item} 
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default History;