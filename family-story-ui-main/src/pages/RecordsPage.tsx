import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowRight, Search, FileText, Archive, BookOpen, Ship, Landmark, Medal, Filter } from "lucide-react";
import { useState } from "react";

const recordCategories = [
  { icon: FileText, title: "Birth Records", count: "4.2B", color: "bg-blue-500" },
  { icon: Archive, title: "Census Records", count: "3.8B", color: "bg-green-500" },
  { icon: BookOpen, title: "Marriage Records", count: "2.5B", color: "bg-pink-500" },
  { icon: Ship, title: "Immigration", count: "1.9B", color: "bg-purple-500" },
  { icon: Medal, title: "Military Records", count: "890M", color: "bg-orange-500" },
  { icon: Landmark, title: "Land Records", count: "650M", color: "bg-yellow-500" },
];

const sampleResults = [
  {
    type: "Birth Certificate",
    name: "William James Johnson",
    date: "March 15, 1892",
    location: "Boston, Massachusetts",
    collection: "Massachusetts Birth Records, 1841-1915",
  },
  {
    type: "Census Record",
    name: "Johnson Family Household",
    date: "1900 U.S. Census",
    location: "Suffolk County, Massachusetts",
    collection: "United States Census, 1900",
  },
  {
    type: "Marriage Certificate",
    name: "William Johnson & Mary Smith",
    date: "June 12, 1918",
    location: "Boston, Massachusetts",
    collection: "Massachusetts Marriage Records",
  },
  {
    type: "Immigration Record",
    name: "Robert Johnson",
    date: "April 3, 1885",
    location: "Port of New York",
    collection: "New York Passenger Lists, 1820-1957",
  },
];

const filterOptions = ["All Records", "Birth", "Marriage", "Death", "Census", "Immigration", "Military"];

const RecordsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Records");

  return (
    <Layout>
      {/* Hero / Search */}
      <section className="heritage-section bg-cream">
        <div className="heritage-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="heritage-badge mb-4">Historical Records</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Search Billions of
              <span className="text-primary block">Historical Records</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our vast collection of birth certificates, census data, immigration records, 
              and more from around the world.
            </p>
            
            {/* Search Box */}
            <div className="bg-card rounded-2xl shadow-heritage-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter a name to search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 text-lg"
                  />
                </div>
                <Button variant="hero" size="lg" className="h-14 px-8">
                  <Search className="mr-2 h-5 w-5" />
                  Search Records
                </Button>
              </div>
              
              {/* Filter Chips */}
              <div className="flex flex-wrap gap-2 mt-6">
                {filterOptions.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === filter
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Record Categories */}
      <section className="heritage-section">
        <div className="heritage-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Browse by Category
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {recordCategories.map((category, index) => (
              <Link
                key={index}
                to="/records"
                className="heritage-card p-6 text-center group"
              >
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mx-auto mb-3`}>
                  <category.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-medium text-sm mb-1">{category.title}</h3>
                <p className="text-lg font-bold text-primary">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Results */}
      <section className="heritage-section bg-secondary">
        <div className="heritage-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-2xl font-bold">Sample Search Results</h2>
            <Button variant="ghost" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
          <div className="space-y-4">
            {sampleResults.map((result, index) => (
              <div key={index} className="heritage-card p-6 hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">{result.type}</span>
                    <h3 className="font-semibold text-lg mt-1">{result.name}</h3>
                    <p className="text-muted-foreground">{result.date} • {result.location}</p>
                    <p className="text-sm text-muted-foreground mt-1">{result.collection}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Record
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="default" size="lg" asChild>
              <Link to="/signup">
                View All Results
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-orange">
        <div className="heritage-container text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Start Your Research Today
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Access our complete collection of over 20 billion historical records.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/signup">Start Free Trial</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default RecordsPage;
