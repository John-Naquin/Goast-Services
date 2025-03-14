import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";

const slides = [
  {
    title: "Building Automation & Controls",
    description: "We provide top-notch services to help your business grow.",
    image: image1,
    buttonText: "Learn More",
    buttonLink: "/contact",
  },
  {
    title: "Preventative Maintenance & Contracts",
    description: "Stay ahead of downtime with our tailored solutions.",
    image: image2,
    buttonText: "Our Services",
    buttonLink: "/contact",
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
    const timer = setInterval(nextSlide, 5000);
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
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[index].image}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-20 sm:bottom-0 left-4 right-4 sm:left-8 sm:right-auto lg:left-24 lg:bottom-8 px-4 pb-4 sm:pb-8 lg:pb-12 max-w-2xl">
            <div className="bg-black/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-brandGold leading-snug sm:leading-tight">
                  {slides[index].title}
                </h1>
                <p className="mt-2 sm:mt-3 lg:mt-4 text-sm sm:text-base lg:text-lg xl:text-xl text-gray-100">
                  {slides[index].description}
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 sm:mt-5 lg:mt-6"
              >
                <Link
                  to={slides[index].buttonLink}
                  className="inline-flex items-center bg-brandGold/90 hover:bg-brandGold border-2 border-brandGold/80 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-md sm:rounded-lg transition-all group"
                >
                  <span className="text-brandDark text-sm sm:text-base lg:text-lg font-semibold mr-2 sm:mr-3">
                    {slides[index].buttonText}
                  </span>
                  <FiChevronRight className="text-brandDark w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="hidden sm:flex items-center justify-between absolute inset-x-0 top-1/2 -translate-y-1/2 px-4">
        <button
          onClick={prevSlide}
          className="p-2 sm:p-3 bg-brandGold/90 hover:bg-brandGold border-2 border-brandGold/80 rounded-lg transition-all shadow-lg"
        >
          <FiChevronLeft className="text-brandDark w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 sm:p-3 bg-brandGold/90 hover:bg-brandGold border-2 border-brandGold/80 rounded-lg transition-all shadow-lg"
        >
          <FiChevronRight className="text-brandDark w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              i === index ? 'bg-brandGold' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
