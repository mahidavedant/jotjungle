import React from "react";
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

const getTemplateIcon = (slug: string) => {
  const template = Templates.find((t) => t.slug === slug);
  return template?.icon || "";
};

const HistoryCard = ({
  id,
  templateSlug,
  formData,
  aiResponse,
  createdAt,
  onDelete,
}: {
  id: string;
  templateSlug: string;
  formData: string;
  aiResponse: string;
  createdAt: Date;
  onDelete: () => void;
}) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = React.useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await db.delete(AiOutput).where(eq(AiOutput.id, parseInt(id)));
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

      {/* AI Response Preview */}
      <p className="text-sm text-gray-600 line-clamp-3 mb-4">
        {aiResponse.substring(0, 150)}...
      </p>

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