import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ExternalLink, Search } from "lucide-react";

const states = [
  { name: "Alabama", abbr: "AL" },
  { name: "Alaska", abbr: "AK" },
  { name: "Arizona", abbr: "AZ" },
  { name: "Arkansas", abbr: "AR" },
  { name: "California", abbr: "CA" },
  { name: "Colorado", abbr: "CO" },
  { name: "Connecticut", abbr: "CT" },
  { name: "Delaware", abbr: "DE" },
  { name: "Florida", abbr: "FL" },
  { name: "Georgia", abbr: "GA" },
  // Add remaining states as needed
];

const StateLaws = () => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredStates = states.filter(state =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <Hero 
        title="State-by-State Ammunition Laws"
        subtitle="Understand firearm and ammunition regulations in your state"
        compact
      />

      <main className="flex-1 bg-gradient-subtle py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search and Filter */}
            <Card className="mb-8 shadow-card">
              <CardHeader>
                <CardTitle>Find Your State's Laws</CardTitle>
                <CardDescription>
                  Select a state to view plain-language summaries of ammunition and firearm purchase regulations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search for a state..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger>
                    <SelectValue placeholder="Or select from dropdown" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredStates.map((state) => (
                      <SelectItem key={state.abbr} value={state.abbr}>
                        {state.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* State Information Display */}
            {selectedState ? (
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {states.find(s => s.abbr === selectedState)?.name} Ammunition Laws
                  </CardTitle>
                  <CardDescription>
                    Last updated: {new Date().toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Purchase Requirements</h3>
                    <p className="text-muted-foreground mb-4">
                      [Placeholder content: This section will contain plain-language information about age requirements, ID verification, background checks, and other purchase regulations specific to this state.]
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Shipping & Transport</h3>
                    <p className="text-muted-foreground mb-4">
                      [Placeholder content: Information about interstate shipping restrictions, carrier regulations, and in-state transport requirements.]
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Restricted Ammunition Types</h3>
                    <p className="text-muted-foreground mb-4">
                      [Placeholder content: Details about armor-piercing ammunition, caliber restrictions, magazine capacity limits, and other prohibited ammunition types.]
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Storage Requirements</h3>
                    <p className="text-muted-foreground mb-4">
                      [Placeholder content: State-specific safe storage laws, child access prevention requirements, and recommended practices.]
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-lg mb-3">Official Resources</h3>
                    <div className="space-y-2">
                      <a 
                        href="#" 
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>State Attorney General - Firearms Division</span>
                      </a>
                      <a 
                        href="#" 
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>State Legislature - Gun Laws</span>
                      </a>
                      <a 
                        href="#" 
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>ATF State Laws and Published Ordinances</span>
                      </a>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 text-sm">
                    <p className="text-muted-foreground">
                      <strong>Important:</strong> This information is for educational purposes only and does not constitute legal advice. Laws change frequently. Always verify current regulations with official state and federal sources before making any purchase or transport decisions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-card">
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">
                    Select a state above to view its ammunition and firearm laws
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StateLaws;
