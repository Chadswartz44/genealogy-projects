import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Search, Filter, FileText, Calendar, MapPin, User, ChevronRight, X } from "lucide-react";
import historicalRecords from "@/assets/historical-records.jpg";

const recordTypes = ["All", "Birth", "Marriage", "Death", "Census", "Immigration", "Military"];

const sampleRecords = [
  {
    type: "Birth",
    name: "John William Smith",
    date: "March 15, 1892",
    location: "Liverpool, England",
    details: "Birth registration with parents listed",
  },
  {
    type: "Marriage",
    name: "William & Mary Johnson",
    date: "June 22, 1918",
    location: "New York, USA",
    details: "Marriage certificate with witnesses",
  },
  {
    type: "Census",
    name: "Smith Family",
    date: "1910",
    location: "Boston, Massachusetts",
    details: "Household of 6 members listed",
  },
  {
    type: "Immigration",
    name: "Heinrich Mueller",
    date: "April 3, 1885",
    location: "Ellis Island, NY",
    details: "Ship manifest from Hamburg",
  },
  {
    type: "Military",
    name: "Robert James Wilson",
    date: "1943-1945",
    location: "US Army",
    details: "Service record WWII",
  },
];

const Records = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<typeof sampleRecords[0] | null>(null);

  const filteredRecords = sampleRecords.filter(
    record => activeFilter === "All" || record.type === activeFilter
  );

  const openRecordModal = (record: typeof sampleRecords[0]) => {
    setSelectedRecord(record);
    setShowModal(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${historicalRecords})` }}
        >
          <div className="absolute inset-0 bg-heritage-dark/90" />
        </div>
        
        <div className="heritage-container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Search <span className="text-primary">Billions of Records</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Explore our vast database of historical records including birth certificates, 
              marriage records, census data, and immigration papers.
            </p>
            
            {/* Search Bar */}
            <div className="bg-card rounded-2xl p-6 shadow-elevated">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Enter a name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-12 pl-12 pr-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                </div>
                <div className="flex-1 relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Year (e.g., 1920)"
                    className="w-full h-12 pl-12 pr-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                </div>
                <Button size="lg" className="h-12">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="heritage-section bg-background">
        <div className="heritage-container">
          {/* Filter Chips */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Filter className="w-5 h-5 text-muted-foreground" />
            {recordTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === type
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Results */}
          <div className="space-y-4">
            {filteredRecords.map((record, i) => (
              <div 
                key={i} 
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all cursor-pointer"
                onClick={() => openRecordModal(record)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          {record.type}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground text-lg">{record.name}</h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {record.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {record.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Record
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Record Modal */}
      {showModal && selectedRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-heritage-dark/80 backdrop-blur-sm">
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-elevated animate-scale-in">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {selectedRecord.type} Record
              </h3>
              <button 
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="bg-muted rounded-xl p-8 mb-6">
                <img 
                  src={historicalRecords} 
                  alt="Record Preview" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-semibold text-foreground">{selectedRecord.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-semibold text-foreground">{selectedRecord.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">{selectedRecord.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Details</p>
                    <p className="font-semibold text-foreground">{selectedRecord.details}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Button className="flex-1">
                  Add to Tree
                </Button>
                <Button variant="outline" className="flex-1">
                  Save Record
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="heritage-section bg-heritage-cream">
        <div className="heritage-container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Discover Your Ancestors
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Start searching our database of over 19 billion historical records.
          </p>
          <Link to="/login">
            <Button variant="hero" size="xl">
              Start Free Trial
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Records;
