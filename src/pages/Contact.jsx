import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6 sm:px-12 lg:px-24 py-12 pt-20 sm:pt-24">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg p-6 sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-brandGold">Contact Us</h2>
          <p className="text-gray-600 mt-2">Have questions? Get in touch with us.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <FiMail className="text-brandGold w-6 h-6" />
              <p className="text-gray-700 text-lg">Kimmies@goastservices.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FiPhone className="text-brandGold w-6 h-6" />
              <p className="text-gray-700 text-lg">+1 (850) 982-7559</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            action="https://formspree.io/f/myyqeqzz"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandGold"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandGold"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandGold"
                placeholder="Your Message"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-brandGold text-white font-semibold py-3 rounded-lg hover:bg-amber-600 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
