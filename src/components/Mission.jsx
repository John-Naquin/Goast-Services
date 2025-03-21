import { motion } from "framer-motion";

export function Mission() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gray-100 opacity-30 rounded-bl-3xl" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-brandGold opacity-5 rounded-tr-3xl" />
        <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-brandGold/5 rounded-full blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 w-32 h-32 border border-brandGold/20 rounded-full" />
        <div className="absolute right-1/3 bottom-1/4 w-16 h-16 border border-brandGold/30 rounded-full" />
        <svg className="absolute right-0 bottom-0 h-64 w-64 text-brandGold/5" viewBox="0 0 200 200" fill="currentColor">
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
            <span className="uppercase text-sm font-medium tracking-widest text-gray-500">Our Purpose</span>
            <div className="h-1 w-12 bg-brandGold mx-auto mt-2 rounded-full" />
          </motion.div>
          <motion.h2 
            className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our <span className="text-brandGold">Mission</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-brandGold/20 to-transparent blur-sm rounded-lg" />
            <motion.div
              className="relative bg-white/80 backdrop-blur-sm p-8 rounded-lg border border-brandGold/10 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-xl text-gray-700 leading-relaxed">
                At <strong className="text-brandGold">Goast Services</strong>, our mission is to empower organizations with cutting-edge automation solutions that improve operational performance, reduce costs, and support long-term sustainability. We are dedicated to:
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {[
              "Delivering innovative and tailored automation strategies",
              "Enhancing facility efficiency and reliability",
              "Providing exceptional service and support",
              "Fostering long-term partnerships with our clients",
              "Staying at the forefront of technological advancements",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-b from-brandGold to-brandGold/50 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative bg-white rounded-xl h-full flex flex-col items-center text-center p-6 shadow-md group-hover:shadow-lg transition-all duration-300 border border-white/80">
                  <div className="w-12 h-12 bg-brandGold/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-brandGold/20 to-transparent blur-sm rounded-lg" />
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-lg border border-brandGold/10 shadow-md text-center">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                Through our commitment to excellence and innovation, we aim to be the trusted partner that helps organizations optimize their operations, achieve their goals, and thrive in an increasingly automated world.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}