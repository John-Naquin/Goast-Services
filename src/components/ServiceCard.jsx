import { motion } from "framer-motion";

export function ServiceCard({ title, subtitle, description, capabilities, whyChoose }) {
  return (
    <motion.div
      className="bg-white w-full mx-auto rounded-2xl overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-brandGold opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 w-48 h-48 bg-brandGold opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="p-1 bg-gradient-to-r from-brandGold to-amber-500/70 rounded-t-2xl">
          <div className="bg-white px-8 py-6 rounded-t-xl">
            <div className="flex flex-col items-start">
              <h3 className="text-3xl font-bold text-brandGold">{title}</h3>
              <p className="text-xl text-gray-700 mt-2">{subtitle}</p>
            </div>
          </div>
        </div>
        
        <div className="p-8 pb-6 border-b border-l border-r border-gray-200 rounded-b-2xl shadow-lg">
          <p className="text-gray-700 leading-relaxed">{description}</p>
          
          <div className="mt-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-1 bg-brandGold rounded-full mr-3"></div>
              <h4 className="text-xl font-semibold text-gray-800">Our Capabilities</h4>
            </div>
            <ul className="space-y-3 pl-2">
              {capabilities.map((capability, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-brandGold/10 rounded-full flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 bg-brandGold rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {whyChoose && (
            <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-1 bg-brandGold rounded-full mr-3"></div>
                <h4 className="text-xl font-semibold text-gray-800">Why Choose Goast Services?</h4>
              </div>
              <ul className="space-y-3 pl-2">
                {whyChoose.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-brandGold/10 rounded-full flex items-center justify-center mt-1 mr-3">
                      <div className="w-2 h-2 bg-brandGold rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}