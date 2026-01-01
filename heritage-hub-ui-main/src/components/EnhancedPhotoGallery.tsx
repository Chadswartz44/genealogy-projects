import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Palette, Download, Trash2, ChevronLeft, ChevronRight, Heart, Share2, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import vintagePortrait from "@/assets/vintage-portrait.jpg";
import heroFamily from "@/assets/hero-family.jpg";
import historicalRecords from "@/assets/historical-records.jpg";
import familyTreeIllustration from "@/assets/family-tree-illustration.png";

interface GalleryPhoto {
  id: number;
  src: string;
  title: string;
  date: string;
  location?: string;
  description?: string;
  animated?: boolean;
  colorized?: boolean;
  liked?: boolean;
}

const samplePhotos: GalleryPhoto[] = [
  { id: 1, src: vintagePortrait, title: "Grandmother's Wedding", date: "1952", location: "New York, USA", description: "Beautiful wedding day portrait of grandmother Elizabeth.", animated: true },
  { id: 2, src: heroFamily, title: "Family Portrait", date: "1945", location: "Boston, MA", description: "The whole family gathered for a summer portrait.", colorized: true },
  { id: 3, src: historicalRecords, title: "Grandfather at Work", date: "1960", location: "Chicago, IL", description: "Grandfather James at his office desk." },
  { id: 4, src: vintagePortrait, title: "Childhood Home", date: "1938", location: "Philadelphia, PA", description: "The house where mom grew up.", animated: true, colorized: true },
  { id: 5, src: familyTreeIllustration, title: "Family Reunion", date: "1920", location: "Ireland", description: "Annual family gathering before immigration.", colorized: true },
  { id: 6, src: heroFamily, title: "Mother's First Day", date: "1965", location: "San Francisco, CA", description: "Mom's first day at school." },
  { id: 7, src: historicalRecords, title: "Great Grandparents", date: "1910", location: "Ellis Island, NY", description: "Arriving in America for the first time." },
  { id: 8, src: vintagePortrait, title: "Wedding Anniversary", date: "1975", location: "Miami, FL", description: "50th wedding anniversary celebration.", animated: true },
];

export const EnhancedPhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [photos, setPhotos] = useState<GalleryPhoto[]>(samplePhotos);
  const [filter, setFilter] = useState<"all" | "animated" | "colorized">("all");

  const filteredPhotos = photos.filter((photo) => {
    if (filter === "all") return true;
    if (filter === "animated") return photo.animated;
    if (filter === "colorized") return photo.colorized;
    return true;
  });

  const openLightbox = (photo: GalleryPhoto) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % filteredPhotos.length
        : (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const toggleLike = (id: number) => {
    setPhotos(photos.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p)));
    if (selectedPhoto?.id === id) {
      setSelectedPhoto({ ...selectedPhoto, liked: !selectedPhoto.liked });
    }
  };

  const filters = [
    { key: "all", label: "All Photos" },
    { key: "animated", label: "Animated" },
    { key: "colorized", label: "Colorized" },
  ] as const;

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === f.key
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => openLightbox(photo)}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-muted"
            >
              <motion.img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-dark/90 via-heritage-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground font-semibold text-sm truncate mb-1">
                  {photo.title}
                </p>
                <p className="text-primary-foreground/70 text-xs">{photo.date} • {photo.location}</p>
              </div>

              {/* Badges */}
              <div className="absolute top-3 right-3 flex gap-1.5">
                {photo.animated && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="p-1.5 bg-primary rounded-full shadow-lg"
                  >
                    <Sparkles className="w-3 h-3 text-primary-foreground" />
                  </motion.div>
                )}
                {photo.colorized && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="p-1.5 bg-heritage-green rounded-full shadow-lg"
                  >
                    <Palette className="w-3 h-3 text-primary-foreground" />
                  </motion.div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(photo.id);
                  }}
                  className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                    photo.liked ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${photo.liked ? "fill-current" : ""}`} />
                </button>
              </div>

              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-heritage-dark/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors z-20"
            >
              <X className="w-8 h-8" />
            </motion.button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto("prev");
              }}
              className="absolute left-4 p-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors bg-white/10 hover:bg-white/20 rounded-full"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto("next");
              }}
              className="absolute right-4 p-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors bg-white/10 hover:bg-white/20 rounded-full"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="max-w-5xl w-full grid md:grid-cols-2 gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative">
                <motion.img
                  key={selectedPhoto.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full aspect-square object-cover rounded-2xl shadow-elevated"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {selectedPhoto.animated && (
                    <div className="px-3 py-1.5 bg-primary rounded-full text-xs font-semibold text-primary-foreground flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" /> Animated
                    </div>
                  )}
                  {selectedPhoto.colorized && (
                    <div className="px-3 py-1.5 bg-heritage-green rounded-full text-xs font-semibold text-primary-foreground flex items-center gap-1.5">
                      <Palette className="w-3 h-3" /> Colorized
                    </div>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-3xl font-display font-bold text-primary-foreground mb-2">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-primary-foreground/60 mb-4">
                    {selectedPhoto.date} • {selectedPhoto.location}
                  </p>
                  <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                    {selectedPhoto.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    <Button variant="hero" size="lg">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Animate Photo
                    </Button>
                    <Button variant="hero-outline" size="lg">
                      <Palette className="w-4 h-4 mr-2" />
                      Colorize
                    </Button>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="hero-outline"
                      size="sm"
                      onClick={() => toggleLike(selectedPhoto.id)}
                      className={selectedPhoto.liked ? "bg-red-500/20 border-red-500" : ""}
                    >
                      <Heart className={`w-4 h-4 ${selectedPhoto.liked ? "fill-red-500 text-red-500" : ""}`} />
                    </Button>
                    <Button variant="hero-outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="hero-outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="hero-outline" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
