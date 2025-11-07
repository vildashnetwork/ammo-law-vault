import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, BookOpen, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <Hero 
        title="About AmmoLaw & Safety Hub"
        subtitle="Your trusted compliance-first resource for firearm and ammunition information"
        compact
      />

      <main className="flex-1 bg-gradient-subtle py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Mission Statement */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  AmmoLaw & Safety Hub exists to provide clear, accurate, and accessible information about ammunition and firearm regulations, safety best practices, and how to connect with licensed dealers. We believe that responsible ownership begins with understanding the law and prioritizing safety.
                </p>
                <p className="text-muted-foreground">
                  We are <strong className="text-foreground">not a vendor</strong>. We do not sell ammunition, firearms, or related products. Our sole purpose is education and information, helping individuals navigate the complex landscape of federal and state regulations.
                </p>
              </CardContent>
            </Card>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Compliance First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We prioritize accuracy and adherence to all federal, state, and local regulations. Our content is researched and cross-referenced with official government sources.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Safety Priority</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every resource we provide emphasizes safe handling, storage, and transport practices. Safety is never optional.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Plain Language</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Legal jargon can be confusing. We translate complex regulations into clear, understandable guidance for everyone.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Inclusive Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our resources are designed for everyone, regardless of experience level. We use neutral, inclusive language throughout.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What We Provide */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">What We Provide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Resources Available:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>State-by-state law summaries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Safety checklists and guides</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>FFL dealer locator guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Training provider links</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Educational articles and updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Downloadable PDF resources</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">What We Don't Do:</h4>
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
                        <span>Process payments or orders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Ship products</span>
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

            {/* Disclaimer */}
            <Card className="shadow-card border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-2xl">Important Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">AmmoLaw & Safety Hub is an informational resource only.</strong> The content provided on this website is for general educational purposes and should not be construed as legal advice. Laws and regulations are subject to change, and interpretation may vary by jurisdiction.
                </p>
                <p className="text-muted-foreground">
                  We strongly recommend consulting with qualified legal professionals, local law enforcement, and official government agencies regarding specific questions about compliance with federal, state, and local laws.
                </p>
                <p className="text-muted-foreground">
                  This website does not facilitate, endorse, or support any commercial transactions. We do not have business relationships with ammunition vendors, firearm manufacturers, or retailers.
                </p>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="shadow-card bg-secondary/30">
              <CardContent className="py-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Have Questions or Feedback?</h3>
                <p className="text-muted-foreground mb-6">
                  We're here to help. Reach out to us with suggestions, corrections, or general inquiries.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
