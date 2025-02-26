"use client";

import { FileClock, Home, Settings2, Wallet2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

/**
 * Side navigation component.
 *
 * This component renders a side navigation menu with links to various pages.
 *
 * @returns Side navigation component
 */
const SideNav = () => {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: Wallet2,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings2,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();
  
  return (
    <div className="h-screen p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold bg-gradient-to-br from-[#4F46E5] via-[#9B4DFF] to-[#FF9CFF] text-transparent bg-clip-text animate-gradient">
          JotJungle𝌞
        </h2>
      </div>
      <hr className="my-5" />
      {/* Menu List */}
      <div className="mt-3">
        {MenuList.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer 
                items-center ${path == item.path && "bg-primary text-white"}`}
            >
              <item.icon className="w-5 h-5" />
              <h2 className="text-md-">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;

