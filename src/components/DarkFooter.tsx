import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const DarkFooter = () => {
  return (
    <footer className="border-t border-border bg-dark-panel mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold text-foreground">Armory Info & Compliance</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your comprehensive resource for firearm information, legal compliance, safety training, and licensed dealer connections. Strictly informational—we do not sell firearms or facilitate transactions.
            </p>
            <p className="text-xs text-muted-foreground border-l-2 border-accent pl-3">
              <strong className="text-foreground">Legal Disclaimer:</strong> This website provides general information only and is not legal advice. We are not a vendor and do not facilitate purchases or transactions. Always consult local authorities and licensed professionals regarding specific regulations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-accent transition-colors">
                  Firearm Catalog
                </Link>
              </li>
              <li>
                <Link to="/laws" className="text-muted-foreground hover:text-accent transition-colors">
                  Laws by Region
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-muted-foreground hover:text-accent transition-colors">
                  Safety & Training
                </Link>
              </li>
              <li>
                <Link to="/find-dealer" className="text-muted-foreground hover:text-accent transition-colors">
                  Find a Licensed Dealer
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-accent transition-colors">
                  Editorial & Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Armory Info & Compliance. All rights reserved. Not a vendor—informational use only.</p>
        </div>
      </div>
    </footer>
  );
};

export default DarkFooter;
