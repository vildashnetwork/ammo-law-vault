import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ExternalLink, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FindFFL = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    dealerName: "",
    address: "",
    phone: "",
    email: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Submission received",
      description: "Thank you for suggesting an FFL dealer. We'll review and add it to our directory.",
    });
    setFormData({
      dealerName: "",
      address: "",
      phone: "",
      email: "",
      notes: "",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <Hero 
        title="Find a Federal Firearms Licensee"
        subtitle="Locate licensed dealers who can assist with legal firearm and ammunition transfers"
        compact
      />

      <main className="flex-1 bg-gradient-subtle py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* What is an FFL */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">What is an FFL?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A Federal Firearms License (FFL) is issued by the Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) to individuals and businesses engaged in the manufacture, importation, or sale of firearms and ammunition. Licensed dealers must comply with all federal, state, and local laws.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Why Work with an FFL Dealer?</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Required for most interstate firearm transfers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Ensures compliance with background check requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Provides expertise on local and federal regulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Maintains proper records as required by law</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How to Find an FFL */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">How to Locate an FFL Dealer</CardTitle>
                <CardDescription>
                  Use these official resources to find licensed dealers in your area
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Official ATF FFL Database
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    The ATF provides an official online search tool to find licensed firearms dealers by state, city, or ZIP code.
                  </p>
                  <Button asChild>
                    <a 
                      href="https://www.atf.gov/firearms/listing-federal-firearms-licensees" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Search ATF FFL Database
                    </a>
                  </Button>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-foreground mb-3">Steps to Contact an FFL:</h4>
                  <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Search the ATF database</strong> using your location
                    </li>
                    <li>
                      <strong className="text-foreground">Verify the license status</strong> is current and active
                    </li>
                    <li>
                      <strong className="text-foreground">Contact the dealer directly</strong> via phone or email
                    </li>
                    <li>
                      <strong className="text-foreground">Ask about their transfer process</strong> and any fees
                    </li>
                    <li>
                      <strong className="text-foreground">Provide necessary documentation</strong> as required by law
                    </li>
                  </ol>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 text-sm">
                  <p className="text-muted-foreground">
                    <strong>Note:</strong> FFL dealers may charge transfer fees for their services. Fees vary by dealer and location. Always confirm pricing and requirements before initiating a transfer.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Working with an FFL: What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      Initial Contact
                    </h4>
                    <p className="text-muted-foreground">
                      When contacting an FFL, be prepared to provide your location, the type of transfer you need, and answer questions about compliance requirements in your state.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Documentation Required</h4>
                    <p className="text-muted-foreground mb-2">
                      You will typically need to provide:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-4">
                      <li>• Valid government-issued photo ID</li>
                      <li>• Proof of residency (may vary by state)</li>
                      <li>• Completed ATF Form 4473 (background check form)</li>
                      <li>• Any state-specific permits or documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Transfer Process</h4>
                    <p className="text-muted-foreground">
                      The dealer will conduct a background check through the National Instant Criminal Background Check System (NICS). Processing times vary but are typically completed within minutes to a few days, depending on state requirements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Suggest an FFL Form */}
            <Card className="shadow-card border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Mail className="h-6 w-6" />
                  Suggest an FFL Dealer
                </CardTitle>
                <CardDescription>
                  Know a licensed dealer who should be featured? Let us know.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="dealerName">Dealer Name *</Label>
                    <Input
                      id="dealerName"
                      required
                      value={formData.dealerName}
                      onChange={(e) => setFormData({ ...formData, dealerName: e.target.value })}
                      placeholder="Enter dealer business name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Input
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Street, City, State, ZIP"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="dealer@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Any additional information about this dealer..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit FFL Suggestion
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FindFFL;
