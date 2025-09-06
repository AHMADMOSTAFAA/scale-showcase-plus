import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Card } from "@/components/ui/card";

const ClientsCarousel = ({ clients }) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Our Valued Clients</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3.2} // peek effect
          centeredSlides
          loop
          grabCursor
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true} // adds arrows
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
