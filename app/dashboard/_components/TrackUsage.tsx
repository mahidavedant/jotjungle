import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";
import { CREDITS_CONFIG } from "@/app/config/credits";
import Link from "next/link";
import { useCredits } from "@/app/context/CreditsContext";

const TrackUsage = () => {
  const { usedCredits, refreshCredits } = useCredits();
  const totalCredits = CREDITS_CONFIG.getTotalCredits();

  useEffect(() => {
    refreshCredits();
  }, [refreshCredits]);

  const percentage = (usedCredits / totalCredits) * 100;

  return (
    <div className="m-5">
      <div className={`p-4 rounded-xl ${CREDITS_CONFIG.isOverLimit(usedCredits) ? 'bg-red-50' : 'bg-primary/10'}`}>
        {/* Credits Counter */}
        <div className="flex items-center mb-2">
          <span className={`text-sm font-medium ${CREDITS_CONFIG.isOverLimit(usedCredits) ? 'text-red-600' : 'text-primary'}`}>
            {usedCredits.toLocaleString()} / {totalCredits.toLocaleString()} credits
          </span>
        </div>
        
        {/* Progress Bar Container */}
        <div className="h-2 bg-primary/20 rounded-full overflow-hidden mb-3">
          <div
            className={`h-full rounded-full transition-all duration-500 ease-out ${
              CREDITS_CONFIG.isOverLimit(usedCredits) 
                ? 'bg-red-500' 
                : 'bg-gradient-to-r from-primary/40 via-primary/70 to-primary'
            }`}
            style={{ width: `${Math.min((usedCredits / totalCredits) * 100, 100)}%` }}
          />
        </div>

        {/* Always visible Upgrade Button */}
        <Link href="/dashboard/billing" className="block">
          <Button 
            variant="outline" 
            size="sm" 
            className={`w-full ${
              CREDITS_CONFIG.isOverLimit(usedCredits)
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'text-primary hover:text-white hover:bg-primary transition-colors'
            }`}
          >
            {CREDITS_CONFIG.isOverLimit(usedCredits) 
              ? 'Upgrade Plan(Required)' 
              : 'Upgrade to Pro'}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TrackUsage;
