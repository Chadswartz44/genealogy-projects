import { useState } from "react";
import { X, Sparkles, Palette, Download, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import vintagePortrait from "@/assets/vintage-portrait.jpg";

interface GalleryPhoto {
  id: number;
  src: string;
  title: string;
  date: string;
  animated?: boolean;
  colorized?: boolean;
}

const samplePhotos: GalleryPhoto[] = [
  { id: 1, src: vintagePortrait, title: "Grandmother's Wedding", date: "1952", animated: true },
  { id: 2, src: vintagePortrait, title: "Family Portrait", date: "1945", colorized: true },
  { id: 3, src: vintagePortrait, title: "Grandfather at Work", date: "1960" },
  { id: 4, src: vintagePortrait, title: "Childhood Home", date: "1938", animated: true },
  { id: 5, src: vintagePortrait, title: "Great Grandparents", date: "1920", colorized: true },
  { id: 6, src: vintagePortrait, title: "Mother's First Day", date: "1965" },
];

export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [photos] = useState<GalleryPhoto[]>(samplePhotos);

  const openLightbox = (photo: GalleryPhoto) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % photos.length
        : (currentIndex - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[newIndex]);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(photo)}
            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer animate-fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-heritage-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-primary-foreground font-semibold text-sm truncate">
                {photo.title}
              </p>
              <p className="text-primary-foreground/70 text-xs">{photo.date}</p>
            </div>
            {(photo.animated || photo.colorized) && (
              <div className="absolute top-2 right-2 flex gap-1">
                {photo.animated && (
                  <div className="p-1.5 bg-primary rounded-full">
                    <Sparkles className="w-3 h-3 text-primary-foreground" />
                  </div>
                )}
                {photo.colorized && (
                  <div className="p-1.5 bg-heritage-green rounded-full">
                    <Palette className="w-3 h-3 text-primary-foreground" />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-heritage-dark/95 flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={() => navigatePhoto("prev")}
            className="absolute left-4 p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={() => navigatePhoto("next")}
            className="absolute right-4 p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="max-w-4xl w-full">
            <div className="relative animate-scale-in">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full max-h-[70vh] object-contain rounded-xl"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-display font-bold text-primary-foreground mb-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-primary-foreground/60 mb-6">{selectedPhoto.date}</p>
              <div className="flex justify-center gap-3">
                <Button variant="hero" size="sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Animate
                </Button>
                <Button variant="hero-outline" size="sm">
                  <Palette className="w-4 h-4 mr-2" />
                  Colorize
                </Button>
                <Button variant="hero-outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button variant="hero-outline" size="sm">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
