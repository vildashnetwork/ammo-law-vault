import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Shield, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <Hero 
        title="Law • Safety • Licensed Dealers"
        subtitle="Your trusted resource for ammunition and firearm regulations, safety best practices, and finding licensed dealers."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            <Link to="/state-laws">Laws by State</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link to="/safety">Safety Resources</Link>
          </Button>
        </div>
      </Hero>

      <main className="flex-1 bg-gradient-subtle">
        {/* Introduction Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Compliance-First Information
              </h2>
              <p className="text-lg text-muted-foreground">
                AmmoLaw & Safety Hub provides clear, plain-language information about ammunition and firearm laws, safety guidelines, and how to locate licensed dealers. We are an informational resource only—not a vendor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={BookOpen}
                title="State-by-State Laws"
                description="Navigate complex regulations with our searchable directory of ammunition and firearm laws for every U.S. state."
              >
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link to="/state-laws">Explore Laws</Link>
                </Button>
              </FeatureCard>

              <FeatureCard
                icon={Shield}
                title="Safety Resources"
                description="Access comprehensive guides, checklists, and training provider information to ensure safe handling and storage."
              >
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link to="/safety">View Resources</Link>
                </Button>
              </FeatureCard>

              <FeatureCard
                icon={MapPin}
                title="Find a Licensed Dealer"
                description="Learn what an FFL is and how to locate and contact licensed firearms dealers in your area."
              >
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link to="/find-ffl">Find an FFL</Link>
                </Button>
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* Educational Focus Section */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
                Stay Informed, Stay Compliant
              </h2>
              <div className="bg-card rounded-lg p-8 shadow-card">
                <p className="text-lg text-muted-foreground mb-6">
                  Firearm and ammunition laws vary significantly by state and can change frequently. Our mission is to help you understand your local regulations, access certified safety training, and connect with licensed dealers who operate in full compliance with federal and state law.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What We Provide</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Plain-language legal summaries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Links to official government resources</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Safety checklists and training information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>FFL locator guidance</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What We Don't Do</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Sell ammunition or firearms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Provide legal advice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Process orders or payments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Ship products to customers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get Started Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Explore our resources to understand your local laws, improve your safety practices, and connect with licensed dealers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/state-laws">Browse State Laws</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/blog">Read Latest Articles</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
