import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";

const ClientsCarousel = ({ clients }) => {
  const { t } = useTranslation();

  // Track language to trigger re-render
  const [lang, setLang] = useState(i18n.language);

  // Track a key to force Swiper re-mount on language change
  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    const handleLangChange = (lng) => {
      setLang(lng);
      setSwiperKey(prev => prev + 1); // force Swiper to re-mount
    };

    i18n.on("languageChanged", handleLangChange);
    return () => i18n.off("languageChanged", handleLangChange);
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">{t("carousel.clients")}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Use a key to force re-mount on language change */}
        <Swiper
          key={swiperKey}
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3.2}
          centeredSlides
          loop
          grabCursor
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.name}>
              <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg bg-background/80 backdrop-blur-sm">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shadow-md">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="text-base font-semibold text-muted-foreground">{client.name}</p>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsCarousel;
