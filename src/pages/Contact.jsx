import { motion } from "framer-motion";

function Contact() {
    return (
      <section className="h-screen flex flex-col justify-center items-center bg-white text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="mt-4 text-gray-600">Reach out today and let's discuss your project!</p>
        <motion.a 
          href="mailto:example@business.com" 
          className="mt-6 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-xl transition-transform"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          Email Us
        </motion.a>
      </section>
    );
  }
  
  export default Contact;