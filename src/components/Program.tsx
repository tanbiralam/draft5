import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { modules } from "../utils/constants";

const Program = () => {
  return (
    <section
      id="program"
      className="relative py-24 px-6 overflow-hidden bg-navy-950"
    >
      <div className="relative z-50 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-4">
            Program Highlights
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative p-8 rounded-2xl bg-blue-900/10 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl" />
                <h3 className="text-2xl font-semibold mb-4 text-blue-400 relative">
                  {module.title}
                </h3>
                <p className="text-gray-300 mb-6 relative">
                  {module.description}
                </p>
                <ul className="space-y-3 relative">
                  {module.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-blue-500 group-hover:text-blue-400 transition-colors"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Divider and Heading */}
              {(index + 1) % 3 === 0 && index + 1 !== modules.length && (
                <div className="col-span-full mt-10 mb-4 text-center">
                  <hr className="border-blue-500/20 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-300">
                    Continue Exploring Our Comprehensive Program
                  </h3>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
