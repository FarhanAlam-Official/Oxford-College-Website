import React from "react";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";

// Reusable Stat Item Component
const StatItem = ({ number, label }: { number: string; label: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center text-white"
  >
    <div className="text-3xl font-bold mb-1">{number}</div>
    <div className="text-sm text-white-100">{label}</div>
  </motion.div>
);

const Hero = () => {
  const images = [
    "Images/slider-image.jpg",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
  ];

  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "15,000+", label: "Alumni Worldwide" },
    { number: "96%", label: "Placement Rate" },
    { number: "50+", label: "Industry Partners" },
  ];

  return (
    <div className="relative h-[90vh] bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
      {/* Swiper Section */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="absolute inset-0 z-0"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Blue Overlay Section (semi-transparent) */}
      <div className="absolute inset-0 bg-blue-900 opacity-50 z-10" />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            Empowering Minds, <br />
            Shaping Futures
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-blue-100"
          >
            Join Oxford College of Engineering and Management for world-class
            education and unlock your potential with our innovative programs and
            exceptional faculty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition duration-200 flex items-center justify-center">
              Explore Programs
              <ArrowRight size={20} className="ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition duration-200">
              Virtual Tour
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatItem key={index} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
