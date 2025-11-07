import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

interface CatalogCardProps {
  id: string;
  name: string;
  manufacturer: string;
  caliber: string;
  category: string;
  image: string;
}

const CatalogCard = ({ id, name, manufacturer, caliber, category, image }: CatalogCardProps) => {
  return (
    <Link to={`/catalog/${id}`}>
      <Card className="group shadow-card hover:shadow-glow hover:border-accent/50 transition-all duration-300 overflow-hidden bg-dark-panel h-full">
        <div className="relative aspect-video overflow-hidden bg-dark-bg">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Eye className="h-5 w-5" />
              <span>View Details</span>
            </div>
          </div>
        </div>
        <CardHeader>
          <div className="flex items-start justify-between gap-2 mb-2">
            <Badge variant="outline" className="border-accent text-accent">
              {category}
            </Badge>
          </div>
          <CardTitle className="text-lg group-hover:text-accent transition-colors">
            {name}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{manufacturer}</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Caliber:</span>
            <span className="text-foreground font-medium">{caliber}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CatalogCard;
