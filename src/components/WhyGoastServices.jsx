import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaClock, FaMedal, FaCheckCircle, FaCogs, FaHandshake, FaHeadset } from 'react-icons/fa';

export function WhyGoastServices() {
  const items = [
    { text: "21+ Years of Expertise", icon: FaClock },
    { text: "8(a) Certified, Veteran-Owned", icon: FaMedal },
    { text: "Fully Government Compliant", icon: FaCheckCircle },
    { text: "Precision-Driven Automation", icon: FaCogs },
    { text: "Partnerships with Licensed Contractors", icon: FaHandshake },
    { text: "24/7 Support, 100% Client Retention", icon: FaHeadset },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-brandGold opacity-5 rounded-br-full" />
        <div className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-brandGold/5 rounded-full blur-3xl" />
        <div className="absolute right-1/4 top-1/3 w-32 h-32 border border-brandGold/20 rounded-full" />
        <div className="absolute right-1/3 top-1/4 w-16 h-16 border border-brandGold/30 rounded-full" />
        <div className="absolute left-1/3 bottom-1/4 w-24 h-24 border border-brandGold/20 rounded-full" />
        <svg className="absolute left-0 top-0 h-64 w-64 text-brandGold/5" viewBox="0 0 200 200" fill="currentColor">
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
            <span className="uppercase text-sm font-medium tracking-widest text-gray-500">Our Advantages</span>
            <div className="h-1 w-12 bg-brandGold mx-auto mt-2 rounded-full" />
          </motion.div>
          <motion.h2 
            className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-white">Why</span> <span className="text-brandGold">Goast</span> <span className="text-white">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            className="space-y-8 relative lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brandGold/20 to-transparent blur-sm rounded-lg" />
              <div className="relative bg-white backdrop-blur-sm p-6 rounded-lg border border-brandGold/10 shadow-md space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  At <span className="font-semibold text-brandGold">Goast Services</span>, we deliver customized, high-performance automation strategies tailored to each facility's needs. With 21+ years of expertise, we help clients optimize operations, reduce costs, and ensure long-term reliability.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As an <strong>8(a) certified, veteran-owned company</strong>, we're fully compliant with government requirements, serving federal, state, and commercial clients. Our precision-driven approach ensures top-level performance across all facilities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We partner with licensed contractors to guarantee compliance with industry standards. With a <strong>100% client retention rate</strong>, we offer reliable service, 24/7 support, and adaptable automation solutions.
                </p>
                <p className="text-gray-800 font-medium leading-relaxed">
                  Choose Goast Services to control, optimize, and maintain your facility's performance.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-7 relative z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              {items.map(({ text, icon: Icon }, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-brandGold to-amber-500 rounded-2xl blur-sm group-hover:blur opacity-80 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 border border-white/50">
                    <div className="absolute right-0 top-0 w-20 h-20 bg-brandGold/5 rounded-bl-full" />
                    <div className="p-4 bg-brandGold/10 rounded-full mb-4 relative">
                      <Icon className="text-3xl text-brandGold" />
                    </div>
                    <p className="text-lg font-medium text-center text-gray-800 relative">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}