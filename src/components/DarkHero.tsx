import { ReactNode } from "react";

interface DarkHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  backgroundImage?: string;
  overlay?: boolean;
}

const DarkHero = ({ title, subtitle, children, backgroundImage, overlay = true }: DarkHeroProps) => {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-hero" />
      )}
      
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-overlay" />
      )}

      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjAzIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-bold tracking-tight mb-4 text-4xl md:text-5xl lg:text-6xl text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default DarkHero;
