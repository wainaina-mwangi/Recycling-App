import { motion } from "framer-motion";
import { Users, Play, ArrowRight, Quote, Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Community() {
  const videos = [
    { title: "Why Recycling Matters", url: "https://www.youtube.com/embed/belXC_IoW4o" },
    { title: "Clean Kenya Initiative", url: "https://www.youtube.com/embed/P5OBWbZDZIc" },
    { title: "Recycler Interviews", url: "https://www.youtube.com/embed/9GV4OKPkgTQ" },
  ];

  const userImages = [
    "https://ik.imagekit.io/tba7zelzb/hero1.jpeg.jpg?updatedAt=1752762531982",
    "https://ik.imagekit.io/tba7zelzb/5.jpg?updatedAt=1752762529312",
    "https://ik.imagekit.io/tba7zelzb/hero3.jpeg.jpg?updatedAt=1752762529811",
    "https://ik.imagekit.io/tba7zelzb/hero1.jpeg.jpg?updatedAt=1752762531982", // Repeated for smooth scroll
  ];

  const testimonials = [
    { name: "Asha Mwangi", location: "Nairobi", quote: "I can now report illegal dumping sites near my home. It feels great to be part of keeping Kenya clean!" },
    { name: "Brian Otieno", location: "Mombasa", quote: "The app is simple and effective. I used it to schedule my pickup and it was seamless!" },
    { name: "Faith Wanjiku", location: "Kisumu", quote: "I love the community impact. I’ve seen cleaner streets and more awareness." },
    { name: "Kevin Kiprotich", location: "Eldoret", quote: "RecyConnect connects recyclers and citizens so well. Brilliant initiative!" },
  ];

  return (
    <section className="bg-white dark:bg-gray-950 min-h-screen pt-32 pb-20 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4">
              <Users size={18} /> Community Hub
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[0.9]">
              The People of <span className="text-emerald-500">RecyConnect.</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 dark:text-gray-400 text-lg md:text-right max-w-xs"
          >
            Join thousands of Kenyans turning waste into worth every single day.
          </motion.p>
        </div>

        {/* --- VIDEO FEATURE (Cinematic) --- */}
        <div className="grid gap-6 md:grid-cols-12 mb-20">
          <motion.div 
            className="md:col-span-8 rounded-[2.5rem] overflow-hidden shadow-2xl bg-black aspect-video relative group"
            whileHover={{ y: -5 }}
          >
             <iframe
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                src={videos[0].url}
                title={videos[0].title}
                allowFullScreen
              ></iframe>
              <div className="absolute bottom-6 left-6 pointer-events-none">
                <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Featured Story</span>
              </div>
          </motion.div>

          <div className="md:col-span-4 flex flex-col gap-6">
            {videos.slice(1, 3).map((video, i) => (
              <motion.div 
                key={i}
                className="flex-1 rounded-[2rem] overflow-hidden relative group bg-emerald-900"
                whileHover={{ scale: 1.02 }}
              >
                <iframe className="w-full h-full" src={video.url} title={video.title}></iframe>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- AUTO-SCROLLING GALLERY --- */}
        <div className="relative mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold dark:text-white">Impact Gallery</h2>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
          </div>
          <div className="flex gap-6 overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {[...userImages, ...userImages].map((src, idx) => (
                <div key={idx} className="w-[350px] h-[450px] flex-shrink-0 rounded-[2rem] overflow-hidden border-8 border-white dark:border-gray-900 shadow-xl">
                  <img src={src} className="w-full h-full object-cover" alt="Community" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- TESTIMONIAL BENTO GRID --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50 relative group"
              >
                <Quote className="absolute top-6 right-8 text-emerald-200 dark:text-emerald-800" size={40} />
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-6 relative z-10 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white">{t.name}</h4>
                    <span className="flex items-center gap-1 text-xs text-emerald-600 font-bold uppercase">
                      <MapPin size={12} /> {t.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* JOIN CARD */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-emerald-600 rounded-[2.5rem] p-10 flex flex-col justify-between text-white shadow-2xl shadow-emerald-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Heart size={120} />
            </div>
            <div>
              <h3 className="text-3xl font-black mb-4">Be the change <br/> Kenya needs.</h3>
              <p className="text-emerald-100">Your efforts contribute to a cleaner environment and a greener future.</p>
            </div>
            <Link 
              to="/join"
              className="mt-8 bg-white text-emerald-600 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-emerald-50 transition-colors"
            >
              JOIN US NOW <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}