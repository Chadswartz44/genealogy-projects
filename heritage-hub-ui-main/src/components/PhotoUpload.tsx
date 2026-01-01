import { useState, useRef } from "react";
import { Upload, X, Image, Sparkles, Palette, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PhotoUploadProps {
  onPhotoSelect?: (file: File) => void;
  className?: string;
}

export const PhotoUpload = ({ onPhotoSelect, className = "" }: PhotoUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [showTools, setShowTools] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedPhoto(e.target?.result as string);
      setShowTools(true);
    };
    reader.readAsDataURL(file);
    onPhotoSelect?.(file);
  };

  const clearPhoto = () => {
    setSelectedPhoto(null);
    setShowTools(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  const tools = [
    { icon: Sparkles, name: "Animate", desc: "Deep Nostalgia™" },
    { icon: Palette, name: "Colorize", desc: "Add colors" },
    { icon: Wand2, name: "Enhance", desc: "Improve quality" },
  ];

  if (selectedPhoto) {
    return (
      <div className={`bg-card rounded-2xl p-6 shadow-soft ${className}`}>
        <div className="relative">
          <img
            src={selectedPhoto}
            alt="Uploaded photo"
            className="w-full max-h-80 object-contain rounded-xl"
          />
          <button
            onClick={clearPhoto}
            className="absolute top-2 right-2 p-2 bg-heritage-dark/80 rounded-full text-primary-foreground hover:bg-heritage-dark transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {showTools && (
          <div className="mt-6 animate-fade-up">
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Choose a tool to transform your photo
            </p>
            <div className="grid grid-cols-3 gap-3">
              {tools.map((tool, i) => (
                <button
                  key={i}
                  className="flex flex-col items-center p-4 rounded-xl bg-muted hover:bg-primary/10 transition-all hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-2 transition-colors">
                    <tool.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground text-sm">{tool.name}</span>
                  <span className="text-xs text-muted-foreground">{tool.desc}</span>
                </button>
              ))}
            </div>
            <Button className="w-full mt-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Apply Effect
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative ${className}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
        id="photo-upload"
      />
      <label
        htmlFor="photo-upload"
        className={`flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-2xl cursor-pointer transition-all ${
          dragActive
            ? "border-primary bg-primary/5"
            : "border-border hover:border-primary/50 hover:bg-muted/50"
        }`}
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Upload className="w-8 h-8 text-primary" />
        </div>
        <p className="text-lg font-semibold text-foreground mb-2">
          Drop your photo here
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          or click to browse from your device
        </p>
        <Button variant="outline" size="sm">
          <Image className="w-4 h-4 mr-2" />
          Choose Photo
        </Button>
      </label>
    </div>
  );
};
