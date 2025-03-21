import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";

const slides = [
  {
    title: "Building Automation & Controls",
    description: "We provide top-notch services to help your business grow.",
    image: image1,
    buttonText: "Learn More",
    buttonLink: "/services",
  },
  {
    title: "Preventative Maintenance & Contracts",
    description: "Stay ahead of downtime with our tailored solutions.",
    image: image2,
    buttonText: "Our Services",
    buttonLink: "/services",
  },
  {
    title: "Troubleshooting & Problem Restoration",
    description: "Our experts are on call to get your system back on track.",
    image: image1,
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    title: "Remote Monitoring & Trend Analysis",
    description: "Keep track of performance and spot issues before they arise.",
    image: image2,
    buttonText: "Get Started",
    buttonLink: "/contact",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const touchContainerRef = useRef(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section
      ref={touchContainerRef}
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={(e) => {
        if (!touchContainerRef.current.contains(e.target)) return;
        handleTouchStart(e);
      }}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >

      
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.div 
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
          >
            <motion.img
              src={slides[index].image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/60" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 lg:col-start-3">
                  <motion.h2
                    className="text-sm sm:text-base uppercase tracking-widest text-brandGold font-medium mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Goast Services
                  </motion.h2>
                  
                  <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    {slides[index].title}
                  </motion.h1>
                  
                  <motion.div 
                    className="w-20 h-1.5 bg-brandGold rounded-full my-6"
                    initial={{ width: 0 }}
                    animate={{ width: "5rem" }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  />
                  
                  <motion.p 
                    className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {slides[index].description}
                  </motion.p>
                  
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Link
                      to={slides[index].buttonLink}
                      className="group relative inline-flex items-center bg-brandGold hover:bg-brandGold/90 px-6 py-3 sm:px-8 sm:py-4 rounded-lg overflow-hidden transition-all duration-300"
                    >
                      <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                        <div className="h-full w-0 bg-white/20 transition-all duration-300 group-hover:w-full" />
                      </div>
                      <span className="text-white text-base sm:text-lg font-semibold mr-2 relative z-10">
                        {slides[index].buttonText}
                      </span>
                      <FiArrowRight className="text-white w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="hidden sm:flex items-center justify-between absolute inset-x-0 top-1/2 -translate-y-1/2 px-8 sm:px-12 lg:px-20 z-20">
        <motion.button
          onClick={prevSlide}
          className="p-3 sm:p-4 bg-black/30 hover:bg-brandGold rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-transparent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiChevronLeft className="text-white w-6 h-6" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="p-3 sm:p-4 bg-black/30 hover:bg-brandGold rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-transparent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiChevronRight className="text-white w-6 h-6" />
        </motion.button>
      </div>

      <div className="absolute bottom-8 left-0 w-full px-4 sm:px-8 lg:px-16 z-30">
        <div className="flex w-full h-2 rounded-full overflow-hidden">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="relative flex-1 mx-0.5 first:ml-0 last:mr-0"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 rounded-full">
                {i === index && (
                  <motion.div
                    className="h-full bg-brandGold rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 7, ease: "linear" }}
                  />
                )}
                {i < index && (
                  <div className="h-full w-full bg-brandGold rounded-full" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}