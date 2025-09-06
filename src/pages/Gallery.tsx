import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();

  const cardinalImages = [
    "https://ictcoegypt.com/wp-content/uploads/2022/10/3cbb283d-c314-4979-ab1d-7902f18c621e-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/5c37436d-a572-4a7a-8f1c-2fec5f5c3d96-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/5d54116b-ec57-4694-bd64-aa588f8b3988-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/6b97b485-75cc-4bef-8c3c-41717bb82718-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/55790d16-859b-449b-93d6-78cb3ddc769f-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/c11b5fc7-fd25-4f31-b6b8-3da5cf876a43-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/ecbcf8cc-6e7c-4106-9234-0e96c8055b48-150x150.jpg"
  ];

  const mettlerImages = [
    "https://ictcoegypt.com/wp-content/uploads/2022/10/0aaf1abf-03a7-47ed-8d1b-1065fc07335d-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/0b5e8d37-7ed2-49ef-a10b-75ccfbeb841d-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/26e1f146-d077-4849-abc9-95cc25547465-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/66dfa78e-e0fa-44d4-b13d-f3a8632ed4c1-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/94c42594-09d6-438a-bb50-f47b53c1857c-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/109d6723-ca19-42cb-b01a-cd7dfba4f7a4-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/519cccce-7f3e-41db-ba83-f252c7d11e4d-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/807d9990-7352-48fb-ade5-4560362dd26f-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/829ed7a0-9f1c-4825-bb7b-4bbbd265a96c-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/6873eb55-ed87-46c8-9bba-a7a067e4c094-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/131277fd-faac-4205-9360-caa6a6f7e5d4-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/a4e6532e-34d5-4eba-b8ee-69ebde0ec266-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/b972bd64-e8db-49c1-bd0f-763118ca3f18-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/d41b4aeb-42a4-49bb-be74-da5c6a4cbaf9-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/d75f94a3-250c-4278-82f4-1307f439a982-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/dbc63df3-47fd-4226-9997-418b1e6d2afe-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/ebcf1346-703c-4918-8bac-ea39ae5b6d19-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/f2c7458c-7745-465c-9c7e-5919dc5efdb4-150x150.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/f3d61ab4-9842-4b0a-afc2-095506d64902-150x150.jpg"
  ];

  const teamImages = [
    "https://ictcoegypt.com/wp-content/uploads/2022/10/unnamed-300x286.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/unnamed-2-225x300.jpg",
    "https://ictcoegypt.com/wp-content/uploads/2022/10/unnamed-1-225x300.jpg"
  ];

 return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <Navbar />
      <div className="container py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-5x1 pb-2 font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            {t("gallery.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("gallery.subtitle")}
          </p>
        </div>

        {/* Cardinal Seminar */}
        <Card className="p-8 mb-12 border-primary/20 bg-white/50 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-primary mb-6">
            {t("gallery.cardinal.title")}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t("gallery.cardinal.description")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {cardinalImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden bg-muted hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Cardinal Seminar ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Mettler Toledo Seminar */}
        <Card className="p-8 mb-12 border-primary/20 bg-white/50 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-primary mb-6">
            {t("gallery.mettler.title")}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t("gallery.mettler.description")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {mettlerImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden bg-muted hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Mettler Toledo Seminar ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* ICTCO Team Celebration */}
        <Card className="p-8 mb-12 border-primary/20 bg-white/50 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-primary mb-6">
            {t("gallery.team.title")}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t("gallery.team.description")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamImages.map((image, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden h-68 bg-muted hover:scale-105 transition-transform duration-300 cursor-pointer "
              >
                <img
                  src={image}
                  alt={`ICTCO Team ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Gallery Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="text-3xl font-bold text-primary mb-2">7</div>
            <div className="text-muted-foreground">
              {t("gallery.stats.cardinal")}
            </div>
          </Card>
          <Card className="p-6 text-center border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="text-3xl font-bold text-primary mb-2">19</div>
            <div className="text-muted-foreground">
              {t("gallery.stats.mettler")}
            </div>
          </Card>
          <Card className="p-6 text-center border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-muted-foreground">
              {t("gallery.stats.team")}
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 text-center border-primary/20">
          <h2 className="text-2xl font-bold text-primary mb-4">
            {t("gallery.cta.title")}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t("gallery.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t("gallery.cta.contact")}
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              {t("gallery.cta.products")}
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Gallery;