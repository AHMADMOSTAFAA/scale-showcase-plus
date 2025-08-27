import { Card } from "@/components/ui/card";

const Software = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="container py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            Smart Weighing Software
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advanced software solutions for all your weighing system needs
          </p>
        </div>

        {/* Software Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 border-primary/20 bg-white/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">Features</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Data Entry for All Users, Clients, Vehicles, and Items</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive database management for all weighing operations</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Print Weight Cards with Complete Information</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>01. Vehicle number</li>
                    <li>02. Driver's name</li>
                    <li>03. Weight type number (In/Out)</li>
                    <li>04. Client name</li>
                    <li>05. City name</li>
                    <li>06. First weight</li>
                    <li>07. Second weight</li>
                    <li>08. Net weight</li>
                    <li>09. Entry time and date</li>
                    <li>10. Exit time and date</li>
                    <li>11. Notes</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Advanced Reporting System</h3>
                  <p className="text-sm text-muted-foreground">Create reports with the ability to combine multiple search criteria into the same report and export it to Excel. Review stored data and print specific cards that were previously saved.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Universal Printer Compatibility</h3>
                  <p className="text-sm text-muted-foreground">The program can be configured to work with any type of printer (LASER – DESK JET – DOT MATRIX).</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Universal Device Connectivity</h3>
                  <p className="text-sm text-muted-foreground">The program automatically works with any weight reading device that has an RS232 serial connection or Ethernet. This solution is available with Access DB.</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-primary/20 bg-white/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">Software Solutions</h2>
            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Weighing Management System</h3>
                <p className="text-sm text-muted-foreground">Complete solution for managing all weighing operations with real-time data processing and reporting capabilities.</p>
              </div>

              <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Data Collection & Analysis</h3>
                <p className="text-sm text-muted-foreground">Advanced data collection tools with statistical analysis and trend reporting for operational insights.</p>
              </div>

              <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Truck Scale Software</h3>
                <p className="text-sm text-muted-foreground">Specialized software for truck scale operations with vehicle identification and load management.</p>
              </div>

              <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Quality Control Systems</h3>
                <p className="text-sm text-muted-foreground">Statistical quality control software for maintaining product standards and compliance.</p>
              </div>

              <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Remote Monitoring</h3>
                <p className="text-sm text-muted-foreground">Cloud-based monitoring solutions for real-time system oversight and maintenance alerts.</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Technical Specifications */}
        <Card className="p-8 border-primary/20 bg-white/50 backdrop-blur-sm mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Database Support</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Microsoft Access</li>
                <li>• SQL Server</li>
                <li>• MySQL</li>
                <li>• Oracle</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Connectivity</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• RS232 Serial</li>
                <li>• Ethernet TCP/IP</li>
                <li>• USB</li>
                <li>• Wireless</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Operating Systems</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Windows 10/11</li>
                <li>• Windows Server</li>
                <li>• Linux</li>
                <li>• Web-based</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 text-center border-primary/20">
          <h2 className="text-2xl font-bold text-primary mb-4">Get Started with Our Software Solutions</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us to learn more about our software solutions and how they can optimize your weighing operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/products" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              View Products
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Software;