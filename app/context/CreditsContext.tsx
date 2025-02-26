"use client"

import React, { createContext, useContext, useState, useCallback } from 'react';
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";

type CreditsContextType = {
  usedCredits: number;
  refreshCredits: () => Promise<void>;
  handleHistoryDelete: () => Promise<void>;
};

const CreditsContext = createContext<CreditsContextType | undefined>(undefined);

export function CreditsProvider({ children }: { children: React.ReactNode }) {
  const [usedCredits, setUsedCredits] = useState(0);

  const refreshCredits = useCallback(async () => {
    try {
      const outputs = await db.select().from(AiOutput);
      const totalWords = outputs.reduce((acc, output) => {
        const wordCount = output.aiResponse?.trim().split(/\s+/).length ?? 0;
        return acc + wordCount;
      }, 0);
      setUsedCredits(totalWords);
    } catch (error) {
      console.error("Error calculating credits:", error);
    }
  }, []);

  const handleHistoryDelete = useCallback(async () => {
    await refreshCredits();
  }, [refreshCredits]);

  return (
    <CreditsContext.Provider value={{ usedCredits, refreshCredits, handleHistoryDelete }}>
      {children}
    </CreditsContext.Provider>
  );
}

export const useCredits = () => {
  const context = useContext(CreditsContext);
  if (!context) {
    throw new Error('useCredits must be used within a CreditsProvider');
  }
  return context;
};