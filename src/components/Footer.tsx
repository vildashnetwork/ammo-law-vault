import { Scale } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-primary">AmmoLaw & Safety Hub</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted resource for firearm and ammunition law information, safety best practices, and licensed dealer resources.
            </p>
            <p className="text-xs text-muted-foreground">
              <strong>Disclaimer:</strong> This website provides general information only and is not legal advice. Always consult local authorities and legal professionals regarding specific regulations. We are not a vendor and do not sell ammunition or firearms.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/state-laws" className="text-muted-foreground hover:text-primary transition-colors">
                  Laws by State
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-muted-foreground hover:text-primary transition-colors">
                  Safety Resources
                </Link>
              </li>
              <li>
                <Link to="/find-ffl" className="text-muted-foreground hover:text-primary transition-colors">
                  Find an FFL
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Articles & Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AmmoLaw & Safety Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
