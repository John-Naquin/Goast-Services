import { motion } from "framer-motion";
import image1 from "../images/1.jpg";

export function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-24 py-10 sm:py-14 md:py-16 bg-gray-50">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-serif text-brandGold">
            About Goast Services
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            At <strong className="text-brandGold">Goast Services</strong>, we specialize in delivering
            <span className="font-semibold text-gray-900"> tailored automation solutions</span> that empower organizations to:
          </p>

          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              "Operate with maximum safety",
              "Boost operational efficiency",
              "Reduce energy costs",
              "Enhance system reliability",
              "Implement smart controls",
              "Future-proof infrastructure",
            ].map((item, index) => (
              <li
                key={index}
                className="
                  flex items-center gap-3
                  p-4
                  bg-white
                  border-l-4 border-brandGold
                  shadow-sm
                  rounded-lg
                  hover:shadow-md
                  transition-shadow
                "
              >
                {/* Brand "dot" bullet */}
                <div className="flex-shrink-0 w-6 h-6 bg-brandGold/10 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-brandGold rounded-full" />
                </div>
                <span className="text-sm sm:text-base md:text-lg text-gray-700">
                  {item}
                </span>
              </li>
            ))}
          </motion.ul>

          <div className="pt-4 sm:pt-6">
            <motion.button
              className="
                inline-flex items-center
                bg-brandGold
                hover:bg-amber-600
                px-6 sm:px-8
                py-3 sm:py-4
                rounded-lg
                transition-transform
                group
              "
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg mr-3">
                Explore Our Solutions
              </span>
              <svg
                className="w-4 sm:w-5 h-4 sm:h-5 text-white transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="relative h-80 sm:h-96 md:h-[36rem] rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={image1}
            alt="Automation systems"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/60 to-transparent">
            <p className="text-white text-sm sm:text-base md:text-lg font-light">
              "Precision-engineered solutions for modern infrastructure"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
