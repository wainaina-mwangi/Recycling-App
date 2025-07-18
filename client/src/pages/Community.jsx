import { motion } from "framer-motion";
import { Users, Video, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Community() {
 const videos = [
  {
    title: "Why Recycling Matters – RecyConnect",
    url: "https://www.youtube.com/embed/belXC_IoW4o",
  },
  {
    title: "Clean Kenya Initiative Highlights",
    url: "https://www.youtube.com/embed/P5OBWbZDZIc",
  },
  {
    title: "Interview with Local Recyclers",
    url: "https://www.youtube.com/embed/9GV4OKPkgTQ",
  },
   {
    title: "Interview with Local Recyclers",
    url: "https://www.youtube.com/embed/9GV4OKPkgTQ",
  },
   {
    title: "Interview with Local Recyclers",
    url: "https://www.youtube.com/embed/9GV4OKPkgTQ",
  },
  {
    title: "Interview with Local Recyclers",
    url: "https://www.youtube.com/embed/QQYgCxu988s",
  },
  
];


  const userImages = [
    "https://ik.imagekit.io/tba7zelzb/hero1.jpeg.jpg?updatedAt=1752762531982",
    "https://ik.imagekit.io/tba7zelzb/5.jpg?updatedAt=1752762529312",
    "https://ik.imagekit.io/tba7zelzb/hero3.jpeg.jpg?updatedAt=1752762529811"
  ];


  const testimonials = [
    {
      name: "Asha Mwangi",
      location: "Nairobi",
      quote: "Thanks to RecyConnect, I can now report illegal dumping sites near my home. It feels great to be part of something bigger — keeping Kenya clean!",
    },
    {
      name: "Brian Otieno",
      location: "Mombasa",
      quote: "The app is simple and effective. I used it to schedule my garbage pickup and it was seamless!",
    },
    {
      name: "Faith Wanjiku",
      location: "Kisumu",
      quote: "I love the community impact. I’ve seen cleaner streets and more awareness around waste disposal.",
    },
    {
      name: "Kevin Kiprotich",
      location: "Eldoret",
      quote: "RecyConnect connects recyclers and citizens so well. It's a brilliant initiative!",
    },
  ];
  

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen mt-16 py-16 px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white flex justify-center items-center gap-2">
            <Users className="text-green-600" /> Our Community
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Dive into our impactful journey through stories, conversations, and recycling transformations across Kenya.
          </p>
        </div>

        {/* YouTube Videos */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <iframe
                className="w-full h-56 md:h-64"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4 bg-gray-100 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* User Image Carousel */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">RecyConnect in Action</h2>
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {userImages.map((src, idx) => (
              <motion.img
                key={idx}
                src={src}
                alt={`Community ${idx + 1}`}
                className="h-60 w-96 object-cover rounded-xl shadow-md flex-shrink-0"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* Community Voices */}
        <motion.div
          className="bg-green-100 dark:bg-green-900 rounded-2xl p-10 shadow-lg text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Video className="mx-auto mb-4 w-10 h-10 text-green-600" />
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Community Voices
          </h2>
          <p className="text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
            “Thanks to RecyConnect, I can now report illegal dumping sites near my home. It feels great to be part of something bigger — keeping Kenya clean!” <br />— <span className="font-semibold text-green-700">Asha Mwangi, Nairobi</span>
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link
            to="/join"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full text-lg font-medium transition"
          >
            Join the Community <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
