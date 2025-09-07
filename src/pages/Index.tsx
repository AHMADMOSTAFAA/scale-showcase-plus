import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-weighing.jpg";
import unilever from "@/assets/unilever.png";
import carrefour from "@/assets/carrefour.png";
import spinneys from "@/assets/spinneys.png";
import pandg from "@/assets/pandg.jpg";
import petrojet from "@/assets/petrojet.png";
import egair from "@/assets/egair.jpg";
import egpost from "@/assets/egpost.jpg";
import eipico from "@/assets/eipico.jpg";
import TypedText from "@/components/ui/TypedText";
import 'animate.css';
import flintech from "@/assets/lintec-logo.jpg"
import mettler from "@/assets/toledo.png"
import baykon from "@/assets/baykon.png"
import cardinal from "@/assets/cardinal.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ClientsCarousel from "@/components/ui/clients";
import turnkey from "@/assets/turnkey.jpg"
import weigh from "@/assets/icon-weigh.jpg"
import maintenance from "@/assets/maintenance.jpg"
import software from "@/assets/software.jpg"
import WowInit from "@/components/ui/wow";
import { useTranslation } from "react-i18next";


const clients = [
  { name: "Unilever", logo: unilever },
  { name: "Carrefour", logo: carrefour },
  { name: "Spinneys", logo: spinneys },
  { name: "P&G", logo: pandg },
  { name: "Petrojet", logo: petrojet },
  { name: "Egypt Air", logo: egair },
  { name: "Egypt Post", logo: egpost },
  { name: "Eipico", logo: eipico },
];


const Index = () => {
  const {t}= useTranslation();
  return (
    <div className="min-h-screen bg-background ">
      <Navbar />
      
      {/* Hero Section - Enhanced but keeping original structure */}
      <section 
        className="relative min-h-[100vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3x2">
            <p className="text-primary text-xl mb-6 font-semibold tracking-wide">
              {t("index.hero.tagline")}
            </p>
              
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              <span className="text-primary">ICTCO</span><br />
            
              <TypedText/>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
             {t("index.hero.description")}
            </p>
            
            <div className="flex gap-6">
              <Button asChild size="lg" className="px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link to="/products">{t("index.hero.learnMore")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link to="/contact">{t("index.hero.contactUs")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
 <WowInit /> 
      {/* Stats Section - Enhanced with better spacing */}
      <section className="py-20 bg-muted/30 wow animate__animated animate__fadeInUp ">
      
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-black text-primary mb-4">30+</div>
              <div className="text-muted-foreground text-lg font-semibold">{t("index.hero.years")}</div>
            </div>
            <div className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-black text-primary mb-4">50+</div>
              <div className="text-muted-foreground text-lg font-semibold">{t("index.hero.employees")}</div>
            </div>
            <div className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-black text-primary mb-4">ISO</div>
              <div className="text-muted-foreground text-lg font-semibold">{t("index.hero.quality")}</div>
            </div>
          </div>
        </div>
      </section>

   {/* Services Section - Enhanced with better cards */}
<section className="py-20 wow animate__animated animate__fadeInUp animate__alternate ">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-6">{t("index.services.title")}</h2>
      <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg bg-background/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/5 flex items-center justify-center shadow-lg">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center">
              <img src={weigh} alt="" className="w-10 h-10 object-contain" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">{t("index.services.weighingSolutions.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            {t("index.services.weighingSolutions.description")}
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg bg-background/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/5 flex items-center justify-center shadow-lg">
            <div className="w-14 h-14  rounded-xl flex items-center justify-center">
              <img src={turnkey} alt="" className="w-10 h-10 object-contain" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">{t("index.services.turnkeyProjects.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            {t("index.services.turnkeyProjects.description")}
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg bg-background/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/5 flex items-center justify-center shadow-lg">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center">
              <img src={maintenance} alt="" className="w-10 h-10 object-contain" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">{t("index.services.maintenance.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            {t("index.services.maintenance.description")}
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg bg-background/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/5 flex items-center justify-center shadow-lg">
            <div className="w-14 h-14  rounded-xl flex items-center justify-center">
              <img src={software} alt="" className="w-10 h-10 object-contain" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">{t("index.services.softwareSolutions.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            {t("index.services.softwareSolutions.description")}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


{/* About ICTCO Section */}
<section className="py-20 bg-muted/50">
  <div className="container mx-auto px-6">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-6">{t("index.about.title")}</h2>
      <div className="mx-auto rounded-full mb-12"></div>
      <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
        <p className="p-8 backdrop-blur-sm rounded-2xl shadow-lg">
          {t("index.about.description")}
        </p>
      </div>
    </div>
  </div>
</section>

{/* Partners Section */}
<section className="py-20">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-6">{t("index.partners.title")}</h2>
      <p className="text-2xl text-muted-foreground mb-6">{t("index.partners.subtitle")}</p>
      <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg bg-background/80 backdrop-blur-sm">
        <div className="h-20 mb-6 flex items-center justify-center">
          <div className="w-36 h-16 rounded-xl flex items-center justify-center shadow-md">
            <img src={flintech} alt="" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
        <CardTitle className="text-2xl text-primary mb-3 font-bold">{t("index.partners.flintec.name")}</CardTitle>
        <CardDescription className="text-lg font-semibold">{t("index.partners.flintec.country")}</CardDescription>
      </Card>

      <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg bg-background/80 backdrop-blur-sm">
        <div className="h-20 mb-6 flex items-center justify-center">
          <div className="w-36 h-16 rounded-xl flex items-center justify-center shadow-md">
            <img src={mettler} alt="" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
        <CardTitle className="text-2xl text-primary mb-3 font-bold">{t("index.partners.mettlerToledo.name")}</CardTitle>
        <CardDescription className="text-lg font-semibold">{t("index.partners.mettlerToledo.country")}</CardDescription>
      </Card>

      <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg bg-background/80 backdrop-blur-sm">
        <div className="h-20 mb-6 flex items-center justify-center">
          <div className="w-36 h-16 rounded-xl flex items-center justify-center shadow-md">
            <img src={baykon} alt="" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
        <CardTitle className="text-2xl text-primary mb-3 font-bold">{t("index.partners.baykon.name")}</CardTitle>
        <CardDescription className="text-lg font-semibold">{t("index.partners.baykon.country")}</CardDescription>
      </Card>

      <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg bg-background/80 backdrop-blur-sm">
        <div className="h-20 mb-6 flex items-center justify-center">
          <div className="w-36 h-16 rounded-xl flex items-center justify-center shadow-md">
            <img src={cardinal} alt="" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
        <CardTitle className="text-2xl text-primary mb-3 font-bold">{t("index.partners.cardinal.name")}</CardTitle>
        <CardDescription className="text-lg font-semibold">{t("index.partners.cardinal.country")}</CardDescription>
      </Card>
    </div>
  </div>
</section>

{/* Additional Stats Section */}
<section className="py-20">
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-4 gap-8 text-center">
      <div className="p-8 rounded-2xl bg-background shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="text-4xl font-black text-primary mb-4">{t("index.additionalStats.maintenanceBranches.number")}</div>
        <div className="text-muted-foreground text-lg font-semibold mb-2">{t("index.additionalStats.maintenanceBranches.title")}</div>
        <div className="text-base text-muted-foreground">{t("index.additionalStats.maintenanceBranches.subtitle")}</div>
      </div>

      <div className="p-8 rounded-2xl bg-background shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="text-4xl font-black text-primary mb-4">{t("index.additionalStats.engineers.number")}</div>
        <div className="text-muted-foreground text-lg font-semibold mb-2">{t("index.additionalStats.engineers.title")}</div>
        <div className="text-base text-muted-foreground">{t("index.additionalStats.engineers.subtitle")}</div>
      </div>

      <div className="p-8 rounded-2xl bg-background shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="text-4xl font-black text-primary mb-4">{t("index.additionalStats.globalTraining.number")}</div>
        <div className="text-muted-foreground text-lg font-semibold mb-2">{t("index.additionalStats.globalTraining.title")}</div>
        <div className="text-base text-muted-foreground">{t("index.additionalStats.globalTraining.subtitle")}</div>
      </div>

      <div className="p-8 rounded-2xl bg-background shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="text-4xl font-black text-primary mb-4">{t("index.additionalStats.support.number")}</div>
        <div className="text-muted-foreground text-lg font-semibold mb-2">{t("index.additionalStats.support.title")}</div>
        <div className="text-base text-muted-foreground">{t("index.additionalStats.support.subtitle")}</div>
      </div>
    </div>
  </div>
</section>

<div className="wow animate__animated animate__fadeInUp">
  
<ClientsCarousel clients={clients} />
</div>
{/* CTA Section */}
<section className="py-20 bg-primary text-primary-foreground">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-5xl font-bold mb-6">{t("index.cta.title")}</h2>
    <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
      {t("index.cta.description")}
    </p>
    <div className="flex justify-center gap-6">
      <Button asChild size="lg" variant="secondary" className="px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <Link to="/products">{t("index.cta.viewProducts")}</Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="px-10 py-4 text-lg font-semibold rounded-xl bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <Link to="/contact">{t("index.cta.contactUs")}</Link>
      </Button>
    </div>
  </div>
</section>

    </div>
  );
};

export default Index;