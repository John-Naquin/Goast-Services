import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import image1 from "../images/1.jpg";

export function About() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-brandGold opacity-5 rounded-bl-full" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gray-100 opacity-30 rounded-tr-3xl" />
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gray-100 opacity-30 rounded-tl-3xl" />
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-brandGold/5 rounded-full blur-3xl" />
        <div className="absolute left-1/4 top-1/3 w-32 h-32 border border-brandGold/20 rounded-full" />
        <div className="absolute left-1/3 top-1/4 w-16 h-16 border border-brandGold/30 rounded-full" />
        <div className="absolute right-1/3 bottom-1/4 w-24 h-24 border border-brandGold/20 rounded-full" />
        <svg className="absolute right-0 top-0 h-64 w-64 text-brandGold/5" viewBox="0 0 200 200" fill="currentColor">
          <path d="M44.1,-76.5C58.2,-69.7,71.3,-59.5,79.4,-46.1C87.5,-32.7,90.6,-16.4,89.9,-0.4C89.2,15.6,84.8,31.2,76.6,44.9C68.3,58.6,56.3,70.4,42.1,77.8C27.9,85.2,14,88.2,-0.6,89.2C-15.1,90.2,-30.2,89.3,-44.1,83.1C-58,77,-70.8,65.6,-78.3,51.3C-85.8,37,-88,19.5,-87.3,2.5C-86.6,-14.5,-83,-29,-76,-41.7C-69,-54.3,-58.6,-65.2,-45.8,-72.6C-33,-80,-16.5,-84,-0.8,-82.6C14.9,-81.3,29.9,-74.6,44.1,-76.5Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="absolute -right-16 top-32 w-32 h-32 border-t-4 border-r-4 border-brandGold/20 rounded-tr-2xl hidden lg:block" />
        <div className="absolute -left-12 bottom-20 w-24 h-24 border-b-4 border-l-4 border-brandGold/20 rounded-bl-2xl hidden lg:block" />
        
        <div className="mb-16 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="uppercase text-sm font-medium tracking-widest text-gray-500">Who We Are</span>
            <div className="h-1 w-12 bg-brandGold mx-auto mt-2 rounded-full" />
          </motion.div>
          <motion.h2 
            className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            About <span className="text-brandGold">Goast</span> Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl group z-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 border-2 border-white/50 rounded-2xl z-10 m-3" />
            <div className="absolute -inset-1 bg-gradient-to-tr from-brandGold/20 to-transparent rounded-2xl blur-sm z-0" />
            
            <div className="aspect-w-4 aspect-h-3 lg:aspect-h-5 relative z-0">
              <img 
                src={image1} 
                alt="Goast Services automation solution in action" 
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent z-10" />
            
            <div className="absolute top-6 right-6 w-20 h-20 border-t-4 border-r-4 border-brandGold/70 rounded-tr-2xl z-10" />
            <div className="absolute top-10 right-10 w-16 h-16 border-t-4 border-r-4 border-brandGold/40 rounded-tr-2xl z-10" />
            <div className="absolute bottom-6 left-6 w-20 h-20 border-b-4 border-l-4 border-brandGold/70 rounded-bl-2xl z-10" />
            <div className="absolute bottom-10 left-10 w-16 h-16 border-b-4 border-l-4 border-brandGold/40 rounded-bl-2xl z-10" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
              <div className="bg-gray-900/60 backdrop-blur-sm p-4 rounded-lg border border-white/10 shadow-lg transform -translate-y-0 transition-transform duration-300 group-hover:-translate-y-2">
                <p className="text-white text-lg sm:text-xl font-light italic">
                  "Precision-engineered solutions for modern infrastructure"
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-brandGold opacity-5 rounded-full blur-3xl" />
            
            <div className="space-y-6 relative">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-brandGold/20 to-transparent blur-sm rounded-lg" />
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-brandGold/10 shadow-md">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    At <span className="font-semibold text-brandGold">Goast Services</span>, we provide <span className="font-semibold">customized automation solutions</span> to help <span className="font-semibold">commercial, industrial, institutional, and government organizations</span> operate safely, efficiently, and cost-effectively.
                  </p>
                  <p className="text-gray-700 mt-4">
                    Our expertise in <span className="font-semibold">Building Automation Systems (BAS) integration, lighting controls, and energy efficiency analysis</span> helps clients reduce costs, minimize downtime, and keep critical systems running at peak performance.
                  </p>
                  <p className="text-gray-700 mt-4">
                    Advanced-engineered programming is what allows facilities to control their systems, optimize energy efficiency, and maintain peak performance—because no two operations are the same.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5 relative z-10">
              <h3 className="text-xl font-bold text-gray-800 pl-4 border-l-4 border-brandGold">Our solutions empower you to:</h3>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              >
                {[
                  "Operate with maximum safety",
                  "Boost operational efficiency",
                  "Reduce energy costs",
                  "Enhance system reliability",
                  "Implement smart controls",
                  "Future-proof infrastructure",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-brandGold/20 to-transparent opacity-0 group-hover:opacity-100 rounded-lg blur-sm transition-opacity duration-300" />
                    <div className="flex items-center p-4 bg-white border-l-4 border-brandGold rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 relative">
                      <div className="flex-shrink-0 mr-4 w-8 h-8 bg-brandGold/10 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-brandGold rounded-full" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="pt-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="relative group inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-brandGold to-brandGold/50 rounded-lg blur group-hover:blur-md transition-all duration-300" />
                <Link
                  to="/services"
                  className="relative group inline-flex items-center bg-brandGold hover:bg-brandGold/90 px-6 py-3 rounded-lg shadow-lg hover:shadow-brandGold/20 transition-all duration-300"
                >
                  <span className="text-white font-semibold mr-2">
                    Explore Our Solutions
                  </span>
                  <FiArrowRight className="text-white w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}