import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Recent Changes to Federal Ammunition Regulations",
    excerpt: "A comprehensive overview of the latest ATF guidance on ammunition purchases and what it means for consumers.",
    category: "Legal Updates",
    date: "2024-01-15",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Safe Storage Best Practices: Beyond the Legal Minimum",
    excerpt: "Explore advanced storage solutions that exceed legal requirements and provide maximum security for your firearms.",
    category: "Safety",
    date: "2024-01-10",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "State-by-State: Magazine Capacity Restrictions in 2024",
    excerpt: "An updated guide to magazine capacity laws across all 50 states, including recent legislative changes.",
    category: "Legal Updates",
    date: "2024-01-05",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "How to Choose a Certified Firearms Training Course",
    excerpt: "What to look for when selecting a training program, including instructor credentials and course content.",
    category: "Education",
    date: "2023-12-28",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "The History of Ammunition Regulation in the United States",
    excerpt: "A historical perspective on how ammunition laws have evolved from the founding to the present day.",
    category: "History",
    date: "2023-12-20",
    readTime: "12 min read",
  },
  {
    id: 6,
    title: "Interstate Ammunition Shipping: Know Your Rights",
    excerpt: "Understanding federal law and carrier policies for shipping ammunition across state lines.",
    category: "Legal Updates",
    date: "2023-12-15",
    readTime: "8 min read",
  },
];

const categories = ["All", "Legal Updates", "Safety", "Education", "History"];

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <Hero 
        title="Articles & Updates"
        subtitle="Stay informed on legal changes, safety practices, and firearm education"
        compact
      />

      <main className="flex-1 bg-gradient-subtle py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="shadow-card hover:shadow-medium transition-all duration-300 flex flex-col"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="mt-12 shadow-card border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-2xl">Stay Updated</CardTitle>
                <CardDescription>
                  Subscribe to receive notifications when new articles and legal updates are published
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Newsletter signup functionality coming soon. Check back regularly for new articles on firearm laws, safety practices, and educational content.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
