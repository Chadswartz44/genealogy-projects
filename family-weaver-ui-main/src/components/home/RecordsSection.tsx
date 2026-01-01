import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, FileText, ArrowRight, Calendar, Users, MapPin } from "lucide-react";
import historicalRecords from "@/assets/historical-records.jpg";

const recordTypes = [
  { icon: FileText, label: "Birth Records", count: "2.8B+" },
  { icon: Users, label: "Census Records", count: "1.5B+" },
  { icon: Calendar, label: "Marriage Records", count: "890M+" },
  { icon: MapPin, label: "Immigration Records", count: "450M+" },
];

export function RecordsSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-heritage-gold/20 text-heritage-gold rounded-full text-sm font-semibold mb-6">
            Historical Archives
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Search Billions of Records
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Access the world's largest collection of historical records. Find birth certificates, 
            marriage documents, census data, immigration papers, and more from archives worldwide.
          </p>
        </div>

        {/* Records Image */}
        <div className="relative mb-16">
          <div className="rounded-2xl overflow-hidden shadow-heritage-lg">
            <img
              src={historicalRecords}
              alt="Historical documents and records collage"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-heritage-dark/60 via-transparent to-transparent" />
          </div>

          {/* Search Bar Overlay */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-2 shadow-heritage-lg flex items-center gap-2">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for your ancestors..."
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button variant="default" size="lg">
                Search Records
              </Button>
            </div>
          </div>
        </div>

        {/* Record Types */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {recordTypes.map((record) => (
            <div
              key={record.label}
              className="bg-card rounded-2xl p-6 shadow-heritage hover:shadow-heritage-lg transition-shadow group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <record.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-display font-bold text-foreground mb-1">{record.count}</div>
              <div className="text-sm text-muted-foreground">{record.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/records">
            <Button variant="default" size="lg">
              Explore All Records
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
