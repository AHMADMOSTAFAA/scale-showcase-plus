import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-weighing.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Exact match to reference design */}
      <section 
        className="relative min-h-[80vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="text-primary text-lg mb-4 font-medium">
              We are interested in your success because it means that our strategy is effective
            </p>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary">ICTCO</span><br />
              <span className="text-foreground">Professional Weighing</span><br />
              <span className="text-foreground">Solutions</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              International General Trading & Contracting Co. (ICTCO) is an Egyptian corporation company established in 1994. We are one of the leading names in weighing machine equipment and business solutions.
            </p>
            
            <div className="flex gap-4">
              <Button asChild size="lg" className="px-8">
                <Link to="/products">Learn More</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Employees</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">ISO</div>
              <div className="text-muted-foreground">Certified Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    ⚖️
                  </div>
                </div>
                <CardTitle className="text-xl">Weighing Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  This division markets and services Mechanical and Electronic weighing machines such as laboratory balances, Weighbridges, and hazardous area products.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    🏗️
                  </div>
                </div>
                <CardTitle className="text-xl">Turnkey Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  The Turnkey Projects handled by us involve longer gestation and high-level selling to the government and its agencies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    🔧
                  </div>
                </div>
                <CardTitle className="text-xl">Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  This division is responsible for the maintenance of all Electronic Scales with professional technicians and engineers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    💻
                  </div>
                </div>
                <CardTitle className="text-xl">Software Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  ICTCO along with its sister company Millennium started Web Development, Software Development, and Mobile Applications Development.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About ICTCO Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About ICTCO</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                ICTCO is a multi-product company with a sound financial base. We have varied and wide business interests including investments, manufacturing, turnkey projects, and agency activities.
              </p>
              <p>
                We have a very sound organization with more than 50 employees having varied educational backgrounds and professional skills. ICTCO has a service center that has more than 20 engineers and technicians.
              </p>
              <p>
                ICTCO is working with a high-quality system and has achieved ISO certification 9001/2000 worldwide standards for quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-xl text-muted-foreground">ICTCO is the Sole Agent in Egypt for</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="h-16 mb-4 flex items-center justify-center">
                <div className="w-32 h-12 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-primary">Flintec</span>
                </div>
              </div>
              <CardTitle className="text-xl text-primary mb-2">Flintec</CardTitle>
              <CardDescription>Germany</CardDescription>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="h-16 mb-4 flex items-center justify-center">
                <div className="w-32 h-12 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-primary">Mettler Toledo</span>
                </div>
              </div>
              <CardTitle className="text-xl text-primary mb-2">Mettler Toledo</CardTitle>
              <CardDescription>Global</CardDescription>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="h-16 mb-4 flex items-center justify-center">
                <div className="w-32 h-12 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-primary">Baykon</span>
                </div>
              </div>
              <CardTitle className="text-xl text-primary mb-2">Baykon</CardTitle>
              <CardDescription>Turkey</CardDescription>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="h-16 mb-4 flex items-center justify-center">
                <div className="w-32 h-12 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-primary">Cardinal</span>
                </div>
              </div>
              <CardTitle className="text-xl text-primary mb-2">Cardinal</CardTitle>
              <CardDescription>USA</CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Valued Clients Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Valued Clients</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              "Unilever", "Carrefour", "Spinneys", "P&G", 
              "Petrojet", "EgyptAir", "Egypt Post", "Eipico"
            ].map((client) => (
              <Card key={client} className="p-4 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary">{client}</span>
                </div>
                <p className="text-xs text-muted-foreground">{client}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground">Maintenance Branches</div>
              <div className="text-sm text-muted-foreground mt-1">Cairo & Alexandria</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Engineers & Technicians</div>
              <div className="text-sm text-muted-foreground mt-1">Service Center</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Global</div>
              <div className="text-muted-foreground">Training Programs</div>
              <div className="text-sm text-muted-foreground mt-1">UK, Turkey, USA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
              <div className="text-sm text-muted-foreground mt-1">Technical Assistance</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for professional weighing solutions and expert consultation.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/products">View Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;