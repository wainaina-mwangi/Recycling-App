// src/components/HeroSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSlider() {
  const slides = [
    {
      title: 'Report Litter Instantly',
      description: 'Help us keep communities clean by reporting illegal dumping and litter hotspots.',
      image: 'https://www.istockphoto.com/photo/garbage-collection-day-gm484189111-38371464',
    },
    {
      title: 'Connect with Recyclers Near You',
      description: 'Find nearby recycling points and drop-off locations easily.',
      image: 'https://www.istockphoto.com/photo/hand-holding-recycle-symbol-on-green-bokeh-background-eco-and-save-the-earth-concept-gm1023963786-274786149?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frecycling-pictures&utm_medium=affiliate&utm_source=unsplash&utm_term=recycling+pictures%3A%3A%3A',
    },
    {
      title: 'Request Pickup for Waste',
      description: 'Schedule eco-friendly waste collection from certified recyclers.',
      image: 'https://www.istockphoto.com/photo/close-up-of-children-holding-a-planet-at-the-beach-gm1435661969-476936528?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frecycling-pictures&utm_medium=affiliate&utm_source=unsplash&utm_term=recycling+pictures%3A%3A%3A',
    },
  ];

  return (
    <div className="relative w-full h-[70vh]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="w-full h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-green-800 bg-opacity-60 w-full h-full flex flex-col justify-center items-start text-white text-start px-6">
                <motion.h1
                  className="text-4xl uppercase md:text-6xl font-bold mb-4"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl mb-6 max-w-xl"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {slide.description}
                </motion.p>

                <motion.a
                  href="/report"
                  className="px-6 py-3 bg-green-600 text-white mb-3 rounded-md flex gap-2 hover:bg-green-500 transition"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Find Recyclers <ArrowRight className="font-bold text-2xl" />
                </motion.a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
