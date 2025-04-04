import { motion } from "framer-motion";

export function ServiceCard({ title, subtitle, description, capabilities, whyChoose }) {
  return (
    <motion.div
      className="bg-white w-full mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-100 relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-brandGold opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 w-48 h-48 bg-brandGold opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="h-2 bg-gradient-to-r from-brandGold to-brandGold/70"></div>
        
        <div className="px-8 py-6">
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-bold text-brandGold">{title}</h3>
            <p className="text-xl text-gray-700 mt-2 font-light">{subtitle}</p>
          </div>
        </div>
        
        <div className="px-8 pb-8">
          <p className="text-gray-700 leading-relaxed">{description}</p>
          
          <div className="mt-8">
            <div className="flex items-center mb-5">
              <h4 className="text-xl font-semibold text-gray-800 flex items-center">
                <span className="inline-block w-6 h-1 bg-brandGold rounded-full mr-3"></span>
                Our Capabilities
              </h4>
            </div>
            <ul className="space-y-4 pl-2">
              {capabilities.map((capability, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start group/item"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-brandGold/10 rounded-full flex items-center justify-center mt-0.5 mr-3 group-hover/item:bg-brandGold/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-brandGold rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                  </div>
                  <span className="text-gray-700">{capability}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {whyChoose && (
            <div className="mt-10">
              <motion.div 
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-5">
                  <h4 className="text-xl font-semibold text-gray-800 flex items-center">
                    <span className="inline-block w-6 h-1 bg-brandGold rounded-full mr-3"></span>
                    Why Choose Goast Services?
                  </h4>
                </div>
                <ul className="space-y-4 pl-2">
                  {whyChoose.map((reason, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start group/reason"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-brandGold/10 rounded-full flex items-center justify-center mt-0.5 mr-3 group-hover/reason:bg-brandGold/20 transition-colors duration-300">
                        <div className="w-2 h-2 bg-brandGold rounded-full group-hover/reason:scale-125 transition-transform duration-300"></div>
                      </div>
                      <span className="text-gray-700">{reason}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}