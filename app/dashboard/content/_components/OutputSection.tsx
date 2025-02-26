import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface PROPS {
  aiOutput?: string;
}

const OutputSection = ({ aiOutput }: PROPS) => {
  const editorRef: any = useRef(null);
  const [isGenerated, setIsGenerated] = useState(false);

  // Set AI Output value of the editor
  useEffect(() => {
    if (aiOutput) {
      setIsGenerated(true); // trigger fade-in effect when output is set
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  return (
    // Rich Text Editor
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex items-center justify-between p-5">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-primary flex items-center gap-2 animate-fadeIn">
          <span className="text-3xl">🌳</span>
          Your JotJungle Results
          <span className="text-3xl">🌳</span>
        </h2>
        {/* Conditionally render Copy Button after content is generated */}
        {isGenerated && (
          <Button className="flex items-center gap-2">
            <Copy className="w-4 h-4" />
            Copy
          </Button>
        )}
      </div>

      {/* Fade-In effect on output */}
      <div
        className={`transition-all duration-1000 ${
          isGenerated ? "opacity-100" : "opacity-0"
        }`}
      >
        <Editor
          ref={editorRef}
          initialValue="Your result will be displayed here"
          height="500px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          onChange={() =>
            // Prints markdown as you type on editor
            console.log(editorRef.current.getInstance().getMarkdown())
          
          }
        />
      </div>
    </div>
  );
};

export default OutputSection;
