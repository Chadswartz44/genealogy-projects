import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Search, FileText, Calendar, Users, MapPin, Ship, Filter, X } from "lucide-react";
import historicalRecords from "@/assets/historical-records.jpg";
import { useState } from "react";

const recordTypes = [
  { id: "all", label: "All Records" },
  { id: "birth", label: "Birth" },
  { id: "marriage", label: "Marriage" },
  { id: "death", label: "Death" },
  { id: "census", label: "Census" },
  { id: "immigration", label: "Immigration" },
  { id: "military", label: "Military" },
];

const sampleRecords = [
  {
    id: 1,
    type: "Birth Certificate",
    name: "John Robert Smith",
    date: "March 15, 1892",
    location: "Boston, Massachusetts",
    icon: FileText,
  },
  {
    id: 2,
    type: "Census Record",
    name: "Smith Family Household",
    date: "1900 Census",
    location: "Boston, Massachusetts",
    icon: Users,
  },
  {
    id: 3,
    type: "Marriage Certificate",
    name: "John Smith & Mary Johnson",
    date: "June 22, 1915",
    location: "New York, New York",
    icon: Calendar,
  },
  {
    id: 4,
    type: "Immigration Record",
    name: "Robert Smith",
    date: "April 3, 1885",
    location: "Ellis Island, New York",
    icon: Ship,
  },
  {
    id: 5,
    type: "Death Certificate",
    name: "Elizabeth Smith",
    date: "December 8, 1945",
    location: "Chicago, Illinois",
    icon: FileText,
  },
  {
    id: 6,
    type: "Census Record",
    name: "Smith Family Household",
    date: "1920 Census",
    location: "Chicago, Illinois",
    icon: Users,
  },
];

const RecordsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-heritage-dark text-heritage-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-heritage-gold/20 text-heritage-gold rounded-full text-sm font-semibold mb-6">
              Historical Archives
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Search Billions of Records
            </h1>
            <p className="text-lg text-heritage-sepia">
              Access the world's largest collection of historical documents, from birth certificates to immigration records.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-3 shadow-heritage-lg flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter ancestor's name, location, or date..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="default" size="lg" className="sm:px-8">
                Search Records
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-muted border-b border-border sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            {recordTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveFilter(type.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === type.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Records Image */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-heritage-lg mb-12">
            <img src={historicalRecords} alt="Historical documents" className="w-full h-64 object-cover" />
          </div>

          {/* Results */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Search Results
            </h2>
            <span className="text-sm text-muted-foreground">Showing 6 sample records</span>
          </div>

          <div className="grid gap-4">
            {sampleRecords.map((record) => (
              <div
                key={record.id}
                className="bg-card rounded-xl p-6 shadow-heritage hover:shadow-heritage-lg transition-shadow flex items-start gap-4 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <record.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {record.type}
                      </span>
                      <h3 className="font-semibold text-foreground mt-1">{record.name}</h3>
                    </div>
                    <Button variant="outline" size="sm" className="flex-shrink-0">
                      View Record
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {record.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {record.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Records
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RecordsPage;
