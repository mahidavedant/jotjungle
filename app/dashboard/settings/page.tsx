"use client";

import React from 'react';
import { useClerk } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

const Settings = () => {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <h2 className="text-3xl font-bold mb-4">Settings</h2>
      
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-sm border">
        <div className="space-y-6">
          <div className="pb-6 border-b">
            <h3 className="text-lg font-medium mb-4">Account</h3>
            <Button 
              variant="destructive" 
              className="w-full flex items-center gap-2"
              onClick={handleSignOut}
            >
              <LogOut size={16} />
              Sign Out
            </Button>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">More Settings</h3>
            <p className="text-sm text-gray-600">Coming Soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;