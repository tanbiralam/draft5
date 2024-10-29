import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { modules } from "../utils/constants";

const Program = () => {
  return (
    <section id="program" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-b from-black via-blue-900 to-black opacity-90 absolute inset-0" />
        <div
          className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-700/30 via-blue-900/20 to-transparent
          opacity-70 absolute -top-32 left-1/3 w-[120vw] h-[120vh] rotate-45"
        />
        <div
          className="bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-blue-700/20 to-transparent
          opacity-60 absolute bottom-0 right-0 w-[80vw] h-[80vh] -rotate-45"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Program
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-6 rounded-xl bg-blue-900/20 border border-blue-900/30 hover:border-blue-500/50 transition group"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                {module.title}
              </h3>
              <p className="text-gray-300 mb-4">{module.description}</p>
              <ul className="space-y-2">
                {module.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-400"
                  >
                    <CheckCircle2 size={18} className="text-blue-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
