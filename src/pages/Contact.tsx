import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <Navbar />
      <div className="container py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our experienced team for all your weighing solution needs
          </p>
        </div>

        {/* About ICTCO Section */}
        <Card className="p-8 mb-12 border-primary/20 bg-white/50 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-primary mb-6">About ICTCO</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-4">
                <strong>International General Trading & Contracting Co. (ICTCO)</strong> is an Egyptian corporation company established in 1994. ICTCO is a multi-product company with a sound financial base. We have varied and wide business interests including investments, manufacturing, turnkey projects, and agency activities.
              </p>
              <p className="text-muted-foreground mb-4">
                Moreover, ICTCO is one of the leading names in weighing machine equipment and business solutions. We have a very sound organization with more than 50 employees having varied educational backgrounds and professional skills.
              </p>
              <p className="text-muted-foreground">
                ICTCO has a service center that has more than 20 engineers and technicians to perform after-sales service and all installations that are linked to the network.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-muted-foreground">50+ Employees with varied expertise</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <span className="text-muted-foreground">ISO 9001/2000 Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-muted-foreground">2 Maintenance branches (Cairo & Alexandria)</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Information & Form */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="p-8 border-primary/20 bg-white/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Head Office - Cairo</h3>
                  <p className="text-muted-foreground">
                    International General Trading & Contracting Co.<br />
                    Cairo, Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Branch Office - Alexandria</h3>
                  <p className="text-muted-foreground">
                    ICTCO Alexandria Branch<br />
                    Alexandria, Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">Available upon request</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">Available upon request</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Sunday - Thursday: 9:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="p-8 border-primary/20 bg-white/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" placeholder="Enter your email address" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                <Input placeholder="Enter your company name" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input placeholder="Enter the subject of your inquiry" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Please describe your requirements or questions in detail..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Quality & Certifications */}
        <Card className="p-8 mb-12 border-primary/20 bg-white/50 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-primary mb-6">Quality & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Quality Standards</h3>
              <p className="text-muted-foreground mb-4">
                ICTCO is working with a high-quality system and has achieved <strong>ISO certification 9001/2000</strong> worldwide standards for quality. We work closely with our customers on local and international bases.
              </p>
              <p className="text-muted-foreground">
                ICTCO always sends its qualified engineers to participate in training courses in UK, Turkey, and U.S.A. So they are always ready for new implementing technologies and developments in all versions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Our Expertise</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• 30+ years of industry experience</li>
                <li>• International training and certifications</li>
                <li>• Continuous technology updates</li>
                <li>• Comprehensive after-sales service</li>
                <li>• Multi-lingual technical support</li>
                <li>• Global best practices implementation</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Our Partners */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 text-center border-primary/20">
          <h2 className="text-2xl font-bold text-primary mb-6">ICTCO is the Sole Agent in Egypt</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="font-semibold text-foreground">Flintec</div>
              <div className="text-sm text-muted-foreground">Germany</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground">Mettler Toledo</div>
              <div className="text-sm text-muted-foreground">Switzerland</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground">Baykon</div>
              <div className="text-sm text-muted-foreground">Turkey</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground">Cardinal</div>
              <div className="text-sm text-muted-foreground">USA</div>
            </div>
          </div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            As exclusive representatives of these world-renowned brands, we bring you the finest weighing solutions with full technical support and service.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Contact;