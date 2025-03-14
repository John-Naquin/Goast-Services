import { motion } from "framer-motion";

export function Mission() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-24 py-10 sm:py-14 md:py-16 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-serif text-brandGold mb-6">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            At <strong className="text-brandGold">Goast Services</strong>, our mission is to empower organizations with cutting-edge automation solutions that improve operational performance, reduce costs, and support long-term sustainability. We are dedicated to:
          </p>
        </motion.div>

        <motion.ul
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {[
            "Delivering innovative and tailored automation strategies",
            "Enhancing facility efficiency and reliability",
            "Providing exceptional service and support",
            "Fostering long-term partnerships with our clients",
            "Staying at the forefront of technological advancements",
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-6 h-6 text-brandGold flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          Through our commitment to excellence and innovation, we aim to be the trusted partner that helps organizations optimize their operations, achieve their goals, and thrive in an increasingly automated world.
        </motion.p>
      </div>
    </section>
  );
}
