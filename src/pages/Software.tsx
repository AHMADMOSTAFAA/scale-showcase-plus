import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";

const Software = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <Navbar />
      <div className="container py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl p-9 font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            {t("software.smartWeighingSoftware")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("software.softwareSubtitle")}
          </p>
        </div>

        {/* Software Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 border-primary/20 bg-white/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {t("software.features")}
            </h2>
            <div className="space-y-4">
              {/* Data Entry */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t("software.featuresList.dataEntryTitle")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("software.featuresList.dataEntryDesc")}
                  </p>
                </div>
              </div>

              {/* Print Cards */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("software.featuresList.printCardsTitle")}
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <li key={i}>
                        {t(`software.featuresList.printCardsList.${i}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Reporting */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t("software.featuresList.reportingTitle")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("software.featuresList.reportingDesc")}
                  </p>
                </div>
              </div>

              {/* Printer */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t("software.featuresList.printerTitle")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("software.featuresList.printerDesc")}
                  </p>
                </div>
              </div>

              {/* Connectivity */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t("software.featuresList.connectivityTitle")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("software.featuresList.connectivityDesc")}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Solutions */}
          <Card className="p-8 border-primary/20 bg-white/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {t("software.solutions")}
            </h2>
            <div className="space-y-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {t(`software.solutionsList.${i}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`software.solutionsList.${i}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Technical Specifications */}
        <Card className="p-8 border-primary/20 bg-white/50 backdrop-blur-sm mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t("software.technicalSpecs")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i}>
                <h3 className="font-semibold text-foreground mb-2">
                  {t(`software.specs.${i}.title`)}
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <li key={j}>
                      {t(`software.specs.${i}.items.${j}`)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 text-center border-primary/20">
          <h2 className="text-2xl font-bold text-primary mb-4">
            {t("software.ctaTitle")}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t("software.ctaDesc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t("software.ctaContact")}
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              {t("software.ctaProducts")}
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Software;
