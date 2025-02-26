import React, { useState } from "react";
import moment from "moment";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import Templates from "@/app/(data)/Templates";
import Image from "next/image";
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import { useCredits } from "@/app/context/CreditsContext";

interface HistoryCardProps {
  id: string;
  formData: string;
  templateSlug: string;
  aiResponse: string;
  createdAt: string;
  onDelete: () => void;
}

const getTemplateIcon = (slug: string) => {
  const template = Templates.find((t) => t.slug === slug);
  return template?.icon || "";
};

const HistoryCard = ({ 
  id, 
  formData, 
  templateSlug, 
  aiResponse, 
  createdAt, 
  onDelete 
}: HistoryCardProps) => {
  const router = useRouter();
  const { handleHistoryDelete } = useCredits();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await db.delete(AiOutput).where(eq(AiOutput.id, parseInt(id)));
      await handleHistoryDelete(); // Add this line
      onDelete();
      router.refresh();
    } catch (error) {
      console.error("Error deleting entry:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const parsedFormData = JSON.parse(formData);
  const iconUrl = getTemplateIcon(templateSlug);

  // Function to format the form data for display
  const getFormattedInputs = () => {
    return Object.entries(parsedFormData).map(([key, value]) => ({
      label: key.replace(/([A-Z])/g, ' $1').toLowerCase(),
      value: typeof value === 'string' ? 
        (value.length > 100 ? value.substring(0, 100) + '...' : value) : value
    }));
  };

  // Add word count calculation
  const wordCount = aiResponse.trim().split(/\s+/).length;

  return (
    <Card className="p-5 hover:shadow-lg transition-all">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Image 
              src={iconUrl} 
              alt={templateSlug} 
              width={20} 
              height={20}
              className="w-5 h-5"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg capitalize">
              {templateSlug.replace(/-/g, " ")}
            </h3>
            <p className="text-sm text-gray-500">
              {moment(createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
      </div>

      {/* User Inputs Section */}
      <div className="mb-4">
        <p className="text-xs text-gray-500 font-medium mb-2">User Inputs:</p>
        <div className="space-y-2">
          {getFormattedInputs().map(({ label, value }, index) => (
            <div
              key={index}
              className="bg-primary/5 rounded-md p-2 text-xs"
            >
              <span className="font-medium text-primary">{label}:</span>
              <p className="mt-1 text-gray-600">{String(value)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Response Preview with Word Count */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <p className="text-xs text-gray-500 font-medium">AI Response:</p>
          <span className="text-xs text-gray-500">
            {wordCount.toLocaleString()} words
          </span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-3">
          {aiResponse.substring(0, 150)}...
        </p>
      </div>

      <div className="flex gap-2">
        <Link href={`/dashboard/history/${id}`} className="flex-1">
          <Button className="w-full flex items-center gap-2">
            <Eye className="w-4 h-4" />
            View
          </Button>
        </Link>
        <Button 
          variant="destructive" 
          className="flex items-center gap-2"
          onClick={handleDelete}
          disabled={isDeleting}
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};

export default HistoryCard;