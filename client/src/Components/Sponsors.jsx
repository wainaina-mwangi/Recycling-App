import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

const sponsors = [
  { id: 1, name: "EcoWaste Ltd", logo: "https://ik.imagekit.io/tba7zelzb/6.webp" },
  { id: 2, name: "Green Planet Org", logo: "https://ik.imagekit.io/tba7zelzb/3.webp" },
  { id: 3, name: "Plastic Bank", logo: "https://ik.imagekit.io/tba7zelzb/1.webp" },
  { id: 4, name: "Kenya Recyclers", logo: "https://ik.imagekit.io/tba7zelzb/7.webp" },
  { id: 5, name: "Clean Earth Initiative", logo: "https://ik.imagekit.io/tba7zelzb/4.webp" },
  // Duplicate for seamless loop if needed
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with floating badge */}
        <div className="flex flex-col items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            Global Partnerships
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-black text-stone-900 dark:text-white text-center">
            Trusted by the World's <br />
            <span className="text-emerald-600">Greenest Organizations</span>
          </h2>
        </div>

        {/* The Magic Marquee Container */}
        <div className="relative group">
          {/* Glass Blurs - These make the logos "fade" in and out at the edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />

          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            speed={4000} // Super slow for a smooth "drift" effect
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="swiper-linear-behavior" // Add this to your index.css if needed
          >
            {sponsors.map((sponsor) => (
              <SwiperSlide key={sponsor.id} className="flex items-center justify-center py-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-center justify-center p-8 bg-stone-50 dark:bg-gray-900/50 rounded-2xl border border-transparent hover:border-emerald-500/20 hover:bg-white dark:hover:bg-gray-800 transition-all duration-500 group/item shadow-sm hover:shadow-xl"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-12 md:h-16 w-auto object-contain transition-all duration-500 grayscale opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-110"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Support Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12 text-stone-400 text-sm font-medium tracking-wide"
        >
          Join 50+ partners building a waste-free world. <a href="#" className="text-emerald-600 underline underline-offset-4 decoration-2">Partner with us →</a>
        </motion.p>
      </div>
    </section>
  );
}