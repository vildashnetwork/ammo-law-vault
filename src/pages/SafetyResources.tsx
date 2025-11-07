import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, ExternalLink, CheckCircle2 } from "lucide-react";

const SafetyResources = () => {
  const safetyChecklist = [
    "Treat every firearm as if it is loaded",
    "Never point a firearm at anything you do not intend to shoot",
    "Keep your finger off the trigger until ready to shoot",
    "Be sure of your target and what is beyond it",
    "Store firearms unloaded in a locked safe or container",
    "Store ammunition separately from firearms",
    "Use appropriate locking devices on all firearms",
    "Keep firearms and ammunition out of reach of children",
    "Regularly inspect firearms for proper function",
    "Wear appropriate eye and ear protection when shooting",
  ];

  const storageChecklist = [
    "Gun safe or lockbox installed in secure location",
    "Biometric or combination lock (not keyed)",
    "Ammunition stored in separate locked container",
    "Safety devices (trigger locks, cable locks) on all firearms",
    "Storage location unknown to unauthorized individuals",
    "Regular inspection of locking mechanisms",
    "Climate-controlled environment to prevent rust",
    "Inventory maintained of all firearms and ammunition",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <Hero 
        title="Safety Resources & Best Practices"
        subtitle="Comprehensive guides for safe firearm handling, storage, and training"
        compact
      />

      <main className="flex-1 bg-gradient-subtle py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Introduction */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Why Safety Matters</CardTitle>
                <CardDescription>
                  Responsible firearm ownership starts with understanding and practicing proper safety protocols
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Whether you're a first-time buyer or an experienced firearm owner, safety should always be your top priority. This page provides essential checklists, links to certified training providers, and downloadable resources to help you maintain the highest safety standards.
                </p>
              </CardContent>
            </Card>

            {/* Four Rules of Firearm Safety */}
            <Card className="shadow-card border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-2xl">The Four Universal Safety Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {safetyChecklist.slice(0, 4).map((rule, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="font-bold text-accent">{index + 1}</span>
                      </div>
                      <p className="text-foreground pt-1">{rule}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Safety Checklist */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Complete Safety Checklist</CardTitle>
                <CardDescription>
                  Follow these guidelines every time you handle a firearm
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {safetyChecklist.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Checkbox id={`safety-${index}`} className="mt-1" />
                      <label 
                        htmlFor={`safety-${index}`}
                        className="text-muted-foreground cursor-pointer"
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Safe Storage Checklist */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Safe Storage Checklist</CardTitle>
                <CardDescription>
                  Verify your storage setup meets these critical requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {storageChecklist.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Checkbox id={`storage-${index}`} className="mt-1" />
                      <label 
                        htmlFor={`storage-${index}`}
                        className="text-muted-foreground cursor-pointer"
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Training Providers */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Find Certified Training</CardTitle>
                <CardDescription>
                  Connect with certified instructors and organizations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <a 
                    href="https://www.nra.org/training/" 
                    className="flex items-center gap-2 text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>NRA Certified Training Courses</span>
                  </a>
                  <a 
                    href="https://www.usconcealedcarry.com/training/" 
                    className="flex items-center gap-2 text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>USCCA Training & Education</span>
                  </a>
                  <a 
                    href="https://www.nssf.org/safety/" 
                    className="flex items-center gap-2 text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>NSSF Firearm Safety Resources</span>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  We recommend seeking training from certified instructors in your area. Hands-on training is essential for building safe habits and proper technique.
                </p>
              </CardContent>
            </Card>

            {/* Downloadable Resources */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Downloadable Guides</CardTitle>
                <CardDescription>
                  Print these resources for quick reference
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-semibold text-foreground">Complete Safety Guide (PDF)</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive 12-page safety manual</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-semibold text-foreground">Storage Checklist (PDF)</h4>
                      <p className="text-sm text-muted-foreground">Printable storage verification checklist</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-semibold text-foreground">Transport Guidelines (PDF)</h4>
                      <p className="text-sm text-muted-foreground">Legal and safe transport practices</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Procedures */}
            <Card className="shadow-card border-l-4 border-l-destructive">
              <CardHeader>
                <CardTitle className="text-2xl">Emergency Procedures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">If You Witness an Unsafe Situation:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Immediately call "Cease fire" or signal for everyone to stop</li>
                    <li>Ensure all firearms are pointed in a safe direction with actions open</li>
                    <li>Address the safety issue calmly and clearly</li>
                    <li>Do not resume activity until the situation is resolved</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">In Case of Injury:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Call 911 immediately</li>
                    <li>Secure all firearms and make the area safe</li>
                    <li>Provide first aid if trained to do so</li>
                    <li>Do not move the injured person unless necessary for safety</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SafetyResources;
