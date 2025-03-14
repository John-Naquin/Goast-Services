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
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-24 py-10 sm:py-14 md:py-16 bg-gray-100 bg-opacity-50 bg-[url('/subtle-pattern.png')] text-gray-800 relative z-10">
      <div className="max-w-5xl w-full space-y-8">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-serif text-brandGold">
            Why Goast Services?
          </h2>
        </motion.div>

        <motion.div
          className="space-y-6 text-base sm:text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <p>
            At <strong className="text-brandGold">Goast Services</strong>, we go beyond standard automation solutions by delivering customized, high-performance strategies tailored to the unique needs of each facility. With over 21 years of expertise, we have built a proven reputation for excellence, helping clients maintain operational efficiency, reduce costs, and ensure long-term reliability.
          </p>
          <p>
            As an <strong>8(a) certified, veteran-owned company</strong>, we are mission-ready and fully compliant with government contracting requirements, ensuring seamless service delivery for federal, state, and commercial clients. Our approach integrates precision-driven automation with advanced programming, allowing facilities to operate at peak performance.
          </p>
          <p>
            We take pride in our trusted partnerships with licensed electrical and mechanical contractors, guaranteeing that all work meets industry regulations and safety standards. With a <strong>100% client retention rate</strong>, we are dedicated to building lasting relationships through reliable service, 24/7 support, and innovative automation solutions that adapt to evolving facility needs.
          </p>
          <p>
            By choosing Goast Services, you gain a trusted partner who is committed to helping you control, optimize, and maintain your facility's efficiency and performance.
          </p>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {items.map(({ text, icon: Icon }, index) => (
            <motion.li
              key={index}
              className="
                relative 
                rounded-xl
                p-[2px]
                bg-gradient-to-tr
                from-brandGold
                to-amber-500
                transition-transform
                duration-150
              "
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="
                  bg-white
                  rounded-xl
                  p-6
                  text-center
                  h-full
                  flex
                  flex-col
                  items-center
                  justify-center
                  transition-all
                  duration-150
                "
              >
                <Icon className="text-3xl text-brandGold mb-2" />
                <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium">
                  {text}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
       
        {/* 
        <Link
          to="/contact"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-brandGold rounded-full hover:bg-amber-600 transition-colors duration-300"
        >
          Get Started Today
        </Link>
        */}
       
        </motion.div>
      </div>
    </section>
  );
}
