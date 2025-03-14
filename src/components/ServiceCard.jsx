import { motion } from "framer-motion";

export function ServiceCard({ title, subtitle, description, capabilities, whyChoose }) {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-3xl border border-gray-200"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-brandGold">{title}</h3>
      <p className="text-lg sm:text-xl text-gray-700 mt-2">{subtitle}</p>
      <p className="text-gray-600 mt-4">{description}</p>

      <div className="mt-6">
        <h4 className="text-xl font-semibold text-brandGold">Our Capabilities</h4>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          {capabilities.map((capability, index) => (
            <li key={index}>{capability}</li>
          ))}
        </ul>
      </div>

      {whyChoose && (
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-brandGold">Why Choose Goast Services?</h4>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            {whyChoose.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
