import { Search } from "lucide-react";
import React from "react";
import Link from "next/link";
import { BILLING_CONFIG } from "@/app/config/billing";
import { CREDITS_CONFIG } from "@/app/config/credits";

const Header = () => {
  const proPrice = BILLING_CONFIG.plans.pro.price;
  const currency = BILLING_CONFIG.currencySymbol;
  const isFreePlan = CREDITS_CONFIG.currentPlan === 'free';

  return (
    <div className="p-5 shadow-sm border-b-2 flex items-center justify-between bg-white">
      {/* Search Bar */}
      <div className="flex items-center gap-2 p-3 border rounded-lg flex-1 max-w-2xl bg-white">
        <Search />
        <input
          type="text"
          placeholder="Search"
          className="outline-none w-full ml-1"
        />
      </div>

      {/* Dynamic Subscription Banner */}
      {isFreePlan ? (
        <Link href="/dashboard/billing">
          <div className="bg-primary text-white p-2 px-4 rounded-full text-xs font-medium cursor-pointer hover:bg-opacity-90 transition ml-4">
            🚀 Unlock Pro for just <span className="font-bold">{currency}{proPrice}/month</span>
          </div>
        </Link>
      ) : (
        <div className="bg-primary/90 text-white p-2 px-4 rounded-full text-xs font-medium ml-4">
          ⭐️ Pro Member
        </div>
      )}
    </div>
  );
};

export default Header;
