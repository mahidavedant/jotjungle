"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { BILLING_CONFIG } from "@/app/config/billing";

const Billing = () => {
  const { free, pro } = BILLING_CONFIG.plans;
  
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Choose Your Plan</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Free Plan */}
        <div className="border rounded-xl p-6 bg-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">{free.name}</h2>
          <p className="text-3xl font-bold mb-6">
            {BILLING_CONFIG.currencySymbol}{free.price} 
            <span className="text-sm font-normal text-gray-600">/{free.interval}</span>
          </p>
          
          <div className="space-y-4 mb-8">
            {free.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="text-primary w-5 h-5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Button className="w-full" variant="outline" disabled={free.isCurrentPlan}>
            {free.isCurrentPlan ? 'Current Plan' : 'Select Plan'}
          </Button>
        </div>

        {/* Pro Plan */}
        <div className="border rounded-xl p-6 bg-gradient-to-br from-primary/5 to-primary/10 shadow-sm border-primary/20">
          {pro.isRecommended && (
            <div className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
              Recommended
            </div>
          )}
          <h2 className="text-2xl font-semibold mb-4">{pro.name}</h2>
          <p className="text-3xl font-bold mb-6">
            {BILLING_CONFIG.currencySymbol}{pro.price}
            <span className="text-sm font-normal text-gray-600">/{pro.interval}</span>
          </p>
          
          <div className="space-y-4 mb-8">
            {pro.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="text-primary w-5 h-5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90">
            Upgrade to Pro
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Billing;