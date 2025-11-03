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
    <section
      id="sponsors"
      className="py-20  bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
            Our Environmental Partners
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10">
            Working together for a cleaner, greener future
          </p>
        </motion.div>

        {/* Sponsor Logos Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          speed={800}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {sponsors.map((sponsor) => (
            <SwiperSlide key={sponsor.id}>
              <motion.div
                className="flex justify-center items-center h-30"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-16 object-contain grayscale hover:grayscale-0 hover:scale-105 transition duration-300"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
