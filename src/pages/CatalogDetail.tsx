import DarkNavigation from "@/components/DarkNavigation";
import DarkFooter from "@/components/DarkFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink, Star } from "lucide-react";

const CatalogDetail = () => {
  const { id } = useParams();

  // Mock data - would come from API/database
  const firearm = {
    id: id,
    name: "M4 Carbine Platform",
    manufacturer: "Colt Defense",
    category: "Rifle",
    caliber: "5.56x45mm NATO",
    images: [
      "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=1200&q=80",
      "https://images.unsplash.com/photo-1593698054469-2b7e3a0e8b78?w=1200&q=80",
    ],
    specs: {
      "Barrel Length": "14.5 inches",
      "Overall Length": "32.75 inches",
      "Weight (Empty)": "6.36 lbs",
      "Action Type": "Gas-operated, rotating bolt",
      "Magazine Capacity": "30 rounds (standard)",
      "Sights": "Adjustable rear, fixed front",
      "Finish": "Matte black",
      "Safety": "Selector switch",
    },
    description: "The M4 Carbine is a shorter and lighter variant of the M16A2 assault rifle. Adopted by the United States military in 1994, it features a collapsible stock and a shorter barrel for improved maneuverability in close quarters. The platform is highly modular and accepts a wide range of accessories.",
    features: [
      "Mil-spec upper and lower receivers",
      "Chrome-lined barrel for durability",
      "Picatinny rail system for accessories",
      "6-position collapsible stock",
      "Direct impingement gas system",
    ],
    reviews: [
      {
        author: "John D.",
        rating: 5,
        date: "2024-01-15",
        comment: "Excellent platform for customization. Reliable and accurate. Great for both training and competition shooting.",
      },
      {
        author: "Sarah M.",
        rating: 4,
        date: "2024-01-10",
        comment: "Solid build quality. Takes some getting used to the controls, but overall very satisfied with the ergonomics.",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg">
      <DarkNavigation />
      
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 hover:text-accent">
            <Link to="/catalog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Catalog
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden bg-dark-panel">
                <img 
                  src={firearm.images[0]} 
                  alt={firearm.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {firearm.images.slice(1).map((img, idx) => (
                  <div key={idx} className="aspect-video rounded-lg overflow-hidden bg-dark-panel">
                    <img 
                      src={img} 
                      alt={`${firearm.name} view ${idx + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="border-accent text-accent mb-2">
                  {firearm.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {firearm.name}
                </h1>
                <p className="text-xl text-muted-foreground">{firearm.manufacturer}</p>
              </div>

              <Separator className="bg-border" />

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {firearm.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Key Features</h2>
                <ul className="space-y-2">
                  {firearm.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1 border-accent text-accent hover:bg-accent hover:text-foreground">
                  <Download className="mr-2 h-4 w-4" />
                  Download Spec Sheet
                </Button>
                <Button variant="outline" className="flex-1 border-foreground/20 hover:border-accent hover:text-accent">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Manufacturer Page
                </Button>
              </div>

              <Card className="bg-dark-panel/50 border-accent/30">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Important:</strong> This is an informational catalog entry only. We do not sell firearms or facilitate purchases. To acquire this model, please contact a licensed FFL dealer in your area.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Specifications Table */}
          <Card className="mt-12 bg-dark-panel shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {Object.entries(firearm.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="font-medium text-foreground">{key}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reviews */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">User Reviews</h2>
            <div className="space-y-4">
              {firearm.reviews.map((review, idx) => (
                <Card key={idx} className="bg-dark-panel shadow-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-foreground">{review.author}</p>
                        <p className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString()}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < review.rating ? 'fill-accent text-accent' : 'text-muted-foreground'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Safety Disclaimer */}
          <Card className="mt-12 bg-dark-panel border-l-4 border-l-accent shadow-deep">
            <CardHeader>
              <CardTitle>Safety & Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                All firearms must be purchased through a licensed Federal Firearms Licensee (FFL). Buyers must comply with all federal, state, and local laws, including background checks and waiting periods where applicable.
              </p>
              <p className="text-muted-foreground">
                Safe storage, handling, and use are the responsibility of the owner. We recommend completing a certified firearms safety course before purchasing any firearm.
              </p>
              <div className="pt-3">
                <Link to="/find-dealer" className="text-accent hover:underline font-medium">
                  Find a licensed dealer near you →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <DarkFooter />
    </div>
  );
};

export default CatalogDetail;
