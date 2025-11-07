import DarkNavigation from "@/components/DarkNavigation";
import DarkFooter from "@/components/DarkFooter";
import DarkHero from "@/components/DarkHero";
import CatalogCard from "@/components/CatalogCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

const catalogItems = [
  {
    id: "m4-carbine",
    name: "M4 Carbine Platform",
    manufacturer: "Colt Defense",
    caliber: "5.56x45mm NATO",
    category: "Rifle",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800&q=80",
  },
  {
    id: "glock-19-gen5",
    name: "Glock 19 Gen 5",
    manufacturer: "Glock",
    caliber: "9mm",
    category: "Pistol",
    image: "https://images.unsplash.com/photo-1612492097370-0c6b8e52e1c2?w=800&q=80",
  },
  {
    id: "remington-870",
    name: "Remington 870 Express",
    manufacturer: "Remington",
    caliber: "12 Gauge",
    category: "Shotgun",
    image: "https://images.unsplash.com/photo-1614607242094-b1b2cf769107?w=800&q=80",
  },
  {
    id: "ar-15-modern",
    name: "AR-15 Modern Sporting Rifle",
    manufacturer: "Smith & Wesson",
    caliber: "5.56x45mm NATO",
    category: "Rifle",
    image: "https://images.unsplash.com/photo-1593698054469-2b7e3a0e8b78?w=800&q=80",
  },
  {
    id: "sig-p320",
    name: "SIG Sauer P320",
    manufacturer: "SIG Sauer",
    caliber: "9mm",
    category: "Pistol",
    image: "https://images.unsplash.com/photo-1611299811252-f1c8e88e3bf3?w=800&q=80",
  },
  {
    id: "mossberg-500",
    name: "Mossberg 500 Tactical",
    manufacturer: "Mossberg",
    caliber: "12 Gauge",
    category: "Shotgun",
    image: "https://images.unsplash.com/photo-1614607242094-b1b2cf769107?w=800&q=80",
  },
];

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredItems = catalogItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || item.category.toLowerCase() === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg">
      <DarkNavigation />
      
      <DarkHero 
        title="Firearm Information Catalog"
        subtitle="Detailed specifications, photos, and reviews for educational reference—not for sale"
        backgroundImage="https://images.unsplash.com/photo-1616961541384-9f22ed2ca5b1?w=1920&q=80"
      />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by model or manufacturer..."
                  className="pl-10 bg-dark-panel border-border"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-[200px] bg-dark-panel border-border">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-dark-panel border-border">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="rifle">Rifles</SelectItem>
                  <SelectItem value="pistol">Pistols</SelectItem>
                  <SelectItem value="shotgun">Shotguns</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <CatalogCard key={item.id} {...item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No items match your search criteria.</p>
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-16 max-w-3xl mx-auto p-6 bg-dark-panel border border-accent/30 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">Informational Use Only:</strong> All catalog entries are provided for reference, education, and research purposes. We do not sell firearms, facilitate purchases, or process transactions. For actual purchases, please contact a licensed FFL dealer in your area.
            </p>
          </div>
        </div>
      </main>

      <DarkFooter />
    </div>
  );
};

export default Catalog;
