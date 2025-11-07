import DarkNavigation from "@/components/DarkNavigation";
import DarkFooter from "@/components/DarkFooter";
import DarkHero from "@/components/DarkHero";
import CatalogCard from "@/components/CatalogCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Scale, Target, MapPin } from "lucide-react";

const featuredCatalog = [
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
];

const DarkIndex = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-bg">
      <DarkNavigation />
      
      <DarkHero 
        title="Knowledge • Compliance • Safety"
        subtitle="Comprehensive firearm information, legal resources, and licensed dealer connections. Strictly informational—no sales or transactions."
        backgroundImage="https://images.unsplash.com/photo-1616961541384-9f22ed2ca5b1?w=1920&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-foreground font-semibold shadow-glow">
            <Link to="/catalog">Explore Catalog</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-foreground/20 hover:border-accent hover:text-accent">
            <Link to="/laws">Laws by Region</Link>
          </Button>
        </div>
      </DarkHero>

      <main className="flex-1">
        {/* Introduction */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Informational Catalog & Compliance Hub
              </h2>
              <p className="text-lg text-muted-foreground">
                Armory Info & Compliance provides detailed firearm specifications, legal compliance resources, safety training information, and licensed dealer referrals. We are not a vendor—this site is purely informational and educational.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-card bg-dark-panel border-border hover:border-accent/50 transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Catalog</CardTitle>
                  <CardDescription>
                    Detailed specs, photos, and user reviews for reference
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card bg-dark-panel border-border hover:border-accent/50 transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                    <Scale className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Legal Compliance</CardTitle>
                  <CardDescription>
                    State and federal law summaries with official links
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card bg-dark-panel border-border hover:border-accent/50 transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Safety Training</CardTitle>
                  <CardDescription>
                    Certified courses, best practices, and resources
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card bg-dark-panel border-border hover:border-accent/50 transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Licensed Dealers</CardTitle>
                  <CardDescription>
                    FFL locator and verification resources
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Catalog */}
        <section className="py-16 md:py-20 bg-dark-panel/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Featured Catalog Entries
              </h2>
              <Button asChild variant="outline" className="hidden sm:flex border-foreground/20 hover:border-accent hover:text-accent">
                <Link to="/catalog">View All</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCatalog.map((item) => (
                <CatalogCard key={item.id} {...item} />
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Button asChild variant="outline" className="border-foreground/20 hover:border-accent hover:text-accent">
                <Link to="/catalog">View All</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* No-Commerce Statement */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-l-4 border-l-accent bg-dark-panel shadow-deep">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Important Notice</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">We are not a vendor.</strong> Armory Info & Compliance does not sell firearms, ammunition, or related products. We do not facilitate purchases, transactions, or transfers.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">What We Provide:</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Detailed firearm specifications and photos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>User reviews and educational content</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Legal compliance resources</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Safety training information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>FFL dealer locator tools</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">What We Don't Do:</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-destructive mt-1">•</span>
                          <span>Sell firearms or ammunition</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-destructive mt-1">•</span>
                          <span>Process payments or orders</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-destructive mt-1">•</span>
                          <span>Facilitate transfers or purchases</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-destructive mt-1">•</span>
                          <span>Provide legal advice</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-destructive mt-1">•</span>
                          <span>Connect buyers with sellers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Start Exploring
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Browse our comprehensive catalog, review legal requirements in your region, and find licensed dealers near you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-foreground">
                  <Link to="/catalog">View Catalog</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-foreground/20 hover:border-accent hover:text-accent">
                  <Link to="/safety">Safety Resources</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DarkFooter />
    </div>
  );
};

export default DarkIndex;
