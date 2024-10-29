import { useState } from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import EnrollmentModal from "./EnrollmentModal";

const features = [
  "12-week intensive program",
  "1:1 mentorship sessions",
  "Real-world project experience",
  "Industry expert workshops",
  "Career support & placement",
  "Lifetime community access",
  "Certificate of completion",
  "Resume review & interview prep",
];

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-24 bg-gray-900" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Invest in your future with our comprehensive product management
            program
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 max-w-lg mx-auto"
        >
          <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white">Premium Program</h3>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-5xl font-bold text-white">$2,999</span>
                <span className="ml-2 text-gray-400">/one-time</span>
              </div>
              <p className="mt-4 text-gray-400">
                Everything you need to become a successful Product Manager
              </p>
            </div>

            <div className="px-8 pb-8">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <Check className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="mt-8 w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
              >
                Enroll Now
              </motion.button>

              <p className="mt-4 text-sm text-center text-gray-400">
                30-day money-back guarantee
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
