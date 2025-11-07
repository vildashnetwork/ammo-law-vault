import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <Hero 
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        compact
      />

      <main className="flex-1 bg-gradient-subtle py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Last Updated:</strong> {new Date().toLocaleDateString()}
                </p>
                <p>
                  AmmoLaw & Safety Hub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website.
                </p>
                <p>
                  <strong className="text-foreground">Important:</strong> We are an informational resource only. We do not sell products, process payments, or collect sensitive personal information beyond what is outlined in this policy.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Information You Provide</h4>
                  <p>
                    When you contact us or submit forms on our website, you may provide:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Name and email address</li>
                    <li>Message content and inquiry details</li>
                    <li>FFL dealer suggestions (business information only)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Automatically Collected Information</h4>
                  <p>
                    We may collect standard web analytics data, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referring website or source</li>
                    <li>Device and operating system information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>We use collected information to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Respond to your inquiries and contact requests</li>
                  <li>Improve our website content and user experience</li>
                  <li>Analyze site usage and traffic patterns</li>
                  <li>Maintain and secure our website</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-foreground">We do not:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Sell or rent your information to third parties</li>
                  <li>Use your information for marketing purposes without consent</li>
                  <li>Share your information with vendors (we are not a vendor)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Our website may use cookies and similar technologies to enhance user experience and gather analytics. You can control cookie settings through your browser preferences.
                </p>
                <p>
                  Types of cookies we may use:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong className="text-foreground">Essential cookies:</strong> Required for basic site functionality</li>
                  <li><strong className="text-foreground">Analytics cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong className="text-foreground">Preference cookies:</strong> Remember your settings and choices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  We implement reasonable security measures to protect your information from unauthorized access, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Third-Party Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Our website contains links to external resources, including government agencies, training providers, and the ATF database. We are not responsible for the privacy practices of these third-party websites. Please review their privacy policies before providing any personal information.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Opt out of communications from us</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at info@ammolawsafety.example.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Our website is not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected information from a minor, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  If you have questions about this Privacy Policy or how we handle your information, please contact us:
                </p>
                <p>
                  <strong className="text-foreground">Email:</strong> info@ammolawsafety.example
                </p>
                <p>
                  <strong className="text-foreground">Website:</strong> <a href="/contact" className="text-primary hover:underline">Contact Form</a>
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

export default Privacy;
