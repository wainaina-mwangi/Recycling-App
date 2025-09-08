// src/components/HeroSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ArrowRight, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"; 

export default function HeroSlider() {
  const slides = [
    {
      title: 'Report Litter Instantly',
      description: 'Help us keep communities clean by reporting illegal dumping and litter hotspots.',
    },
    {
      title: 'Connect with Recyclers Near You',
      description: 'Find nearby recycling points and drop-off locations easily.',
    },
    {
      title: 'Request Pickup for Waste',
      description: 'Schedule eco-friendly waste collection from certified recyclers.',
    },
  ];

  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="w-full h-full flex items-center justify-center text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-1 bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 opacity-90 z-0"></div>

              {/* Content */}
              <div className="relative z-10 text-left px-6 max-w-4xl">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <Leaf className="text-white w-8 h-8" />
                  <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
                </motion.div>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl mb-6 max-w-xl"
                >
                  {slide.description}
                </motion.p>

                <motion.a
                  href="/recyclers"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 font-semibold rounded-full hover:bg-green-100 transition"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  
                  Find Recyclers <ArrowRight />
                
                </motion.a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

     
      
    </div>
  );
}
