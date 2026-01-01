import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Search, BookOpen, Archive } from "lucide-react";

const recordTypes = [
  {
    icon: FileText,
    title: "Birth Records",
    count: "4.2 Billion",
    description: "Birth certificates, baptism records, and more",
  },
  {
    icon: Archive,
    title: "Census Records",
    count: "3.8 Billion",
    description: "Household data spanning centuries",
  },
  {
    icon: BookOpen,
    title: "Marriage Records",
    count: "2.5 Billion",
    description: "Marriage certificates and announcements",
  },
  {
    icon: Search,
    title: "Immigration",
    count: "1.9 Billion",
    description: "Ship manifests and naturalization records",
  },
];

export function RecordsSection() {
  return (
    <section className="heritage-section">
      <div className="heritage-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="heritage-badge mb-4">Historical Records</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Search Billions of
            <span className="text-primary block">Historical Records</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our vast collection of historical documents, including birth certificates, 
            census data, immigration records, and military files from around the world.
          </p>
        </div>

        {/* Records Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {recordTypes.map((record, index) => (
            <Link
              key={index}
              to="/records"
              className="heritage-card p-6 text-center group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <record.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{record.title}</h3>
              <p className="text-2xl font-bold text-primary mb-2">{record.count}</p>
              <p className="text-sm text-muted-foreground">{record.description}</p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/records">
              Search Records
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
