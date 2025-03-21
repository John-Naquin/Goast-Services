import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from "react-icons/fi";

export function Contact() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-gray-100 opacity-30 rounded-br-3xl" />
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-brandGold opacity-5 rounded-tl-3xl" />
        <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-brandGold/5 rounded-full blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 w-32 h-32 border border-brandGold/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="uppercase text-sm font-medium tracking-widest text-gray-500">Get In Touch</span>
            <div className="h-1 w-12 bg-brandGold mx-auto mt-2 rounded-full" />
          </motion.div>
          <motion.h2 
            className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact <span className="text-brandGold">Us</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have questions about our services? Our team is ready to help you find the perfect automation solution.
          </motion.p>
        </div>

        <div className="flex justify-center">
          <motion.div
            className="w-full max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative bg-white shadow-xl rounded-2xl overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-brandGold to-amber-500/70 rounded-2xl blur-sm z-0"></div>
              
              <div className="relative grid grid-cols-1 md:grid-cols-5 z-10">
                <div className="md:col-span-2 bg-gray-800 p-8 sm:p-10 text-white">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-8 mt-10">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-brandGold/90 rounded-full">
                        <FiMail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white/70 mb-1 text-sm">Email Us At</p>
                        <p className="font-medium">Kimmies@goastservices.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-brandGold/90 rounded-full">
                        <FiPhone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white/70 mb-1 text-sm">Call Us At</p>
                        <p className="font-medium">+1 (850) 982-7559</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-brandGold/90 rounded-full">
                        <FiMapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white/70 mb-1 text-sm">Our Office</p>
                        <p className="font-medium">123 Automation Way, Suite 100</p>
                        <p className="font-medium">Tech City, FL 32501</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-10 left-10 w-20 h-20 border-b-4 border-l-4 border-brandGold/20 rounded-bl-2xl"></div>
                  <div className="absolute top-10 right-10 w-20 h-20 border-t-4 border-r-4 border-brandGold/20 rounded-tr-2xl"></div>
                </div>
                
                <div className="md:col-span-3 p-8 sm:p-10 bg-white">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                  
                  <form action="https://formspree.io/f/myyqeqzz" method="POST" className="space-y-6">
                    <div>
                      <label className="flex items-center text-gray-700 font-medium mb-2">
                        <FiUser className="w-5 h-5 mr-2 text-brandGold" />
                        <span>Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brandGold/50 focus:border-brandGold transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div>
                      <label className="flex items-center text-gray-700 font-medium mb-2">
                        <FiMail className="w-5 h-5 mr-2 text-brandGold" />
                        <span>Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brandGold/50 focus:border-brandGold transition-all"
                        placeholder="Your Email"
                      />
                    </div>
                    
                    <div>
                      <label className="flex items-center text-gray-700 font-medium mb-2">
                        <FiMessageSquare className="w-5 h-5 mr-2 text-brandGold" />
                        <span>Message</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brandGold/50 focus:border-brandGold transition-all"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        className="w-full bg-brandGold text-white font-semibold py-3 px-6 rounded-lg hover:bg-amber-600 transition-all flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiSend className="mr-2" />
                        Send Message
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    
  );
}

export default Contact;