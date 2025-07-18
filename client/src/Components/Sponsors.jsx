import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

const sponsors = [
  {
    id: 1,
    name: "EcoWaste Ltd",
    logo: "https://ik.imagekit.io/tba7zelzb/6.webp?updatedAt=1752769206679",
  },
  {
    id: 2,
    name: "Green Planet Org",
    logo: "https://ik.imagekit.io/tba7zelzb/3.webp?updatedAt=1752769207759",
  },
  {
    id: 3,
    name: "Plastic Bank",
    logo: "https://ik.imagekit.io/tba7zelzb/1.webp?updatedAt=1752769206331",
  },
  {
    id: 4,
    name: "Kenya Recyclers",
    logo: "https://ik.imagekit.io/tba7zelzb/7.webp?updatedAt=1752769185001",
  },
  {
    id: 5,
    name: "Clean Earth Initiative",
    logo: "https://ik.imagekit.io/tba7zelzb/4.webp?updatedAt=1752769207699",
  },
];

export default function Sponsors() {
  return (
    <section className="py-16 bg-gray-50 mt-10 dark:bg-gray-900" id="sponsors">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl font-bold mb-10 text-gray-700 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Environmental Partners
        </motion.h2>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
        >
          {sponsors.map((sponsor) => (
            <SwiperSlide key={sponsor.id}>
              <motion.div
                className="flex justify-center items-center h-30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
