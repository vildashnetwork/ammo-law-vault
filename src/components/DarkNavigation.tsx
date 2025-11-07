import { NavLink } from "@/components/NavLink";
import { Menu, X, Shield } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const DarkNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/catalog", label: "Catalog" },
    { to: "/laws", label: "Laws by Region" },
    { to: "/safety", label: "Safety & Training" },
    { to: "/find-dealer", label: "Find a Dealer" },
    { to: "/blog", label: "Editorial" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-dark-bg/95 backdrop-blur supports-[backdrop-filter]:bg-dark-bg/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-accent transition-colors">
            <Shield className="h-6 w-6 text-accent" />
            <span className="hidden sm:inline">Armory Info & Compliance</span>
            <span className="sm:hidden">Armory Info</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                activeClassName="text-accent font-semibold"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-secondary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className="px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:text-accent rounded-md hover:bg-secondary"
                  activeClassName="text-accent font-semibold bg-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DarkNavigation;
