/**
 * A layout component for the dashboard.
 *
 * This component renders the side navigation and a header
 * component, and renders its children in the main content area.
 */
import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { CreditsProvider } from "@/app/context/CreditsContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CreditsProvider>
      <div className="bg-slate-100 h-screen">
        <div className="md:w-64 hidden md:block fixed">
          <SideNav />
        </div>
        <div className="md:ml-64">
          <Header />
          {children}
        </div>
      </div>
    </CreditsProvider>
  );
}
