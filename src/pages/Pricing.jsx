import { motion } from "framer-motion";

function Pricing() {
    return (
      <section className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
        <h2 className="text-4xl font-bold">Pricing</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {["Basic", "Pro", "Enterprise"].map((plan, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 shadow-lg rounded-lg w-72 hover:shadow-2xl transition-transform"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-semibold">{plan}</h3>
              <p className="mt-2 text-gray-600">${(index + 1) * 99}/month - Premium features included.</p>
              <motion.a 
                href="/contact" 
                className="mt-4 px-6 py-2 block bg-blue-500 text-white rounded-lg shadow-md hover:shadow-xl transition-transform"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                Choose Plan
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Pricing;