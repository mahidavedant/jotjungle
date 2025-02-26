import { BILLING_CONFIG } from "./billing";


type PlanType = 'free' | 'pro';

export interface CreditsConfig {
  currentPlan: PlanType;
  planLimits: {
    free: number;
    pro: number;
  };
  upgradeThreshold: number;
  upgradeMessage: string;
  getPlanLimit: (plan?: PlanType) => number;
  isOverLimit: (usedCredits: number, plan?: PlanType) => boolean;
  getTotalCredits: (plan?: PlanType) => number;
}

export const CREDITS_CONFIG: CreditsConfig = {
  currentPlan: 'free' as PlanType,
  planLimits: {
    free: BILLING_CONFIG.plans.free.wordLimit,
    pro: Infinity
  },
  upgradeThreshold: 60,
  upgradeMessage: "You've exceeded the free plan limit. Please upgrade to continue.",
  
  getPlanLimit: (plan: PlanType = 'free') => CREDITS_CONFIG.planLimits[plan],
  
  isOverLimit: (usedCredits: number, plan: PlanType = CREDITS_CONFIG.currentPlan) => {
    const limit = CREDITS_CONFIG.planLimits[plan];
    return usedCredits >= limit;
  },
  
  getTotalCredits: (plan: PlanType = CREDITS_CONFIG.currentPlan) => {
    return CREDITS_CONFIG.planLimits[plan];
  }
};