import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Program = () => {
  const modules = [
    {
      title: "Product Strategy",
      description: "Learn to develop and execute product strategies that drive business growth",
      points: ["Market Analysis", "Product Vision", "Go-to-Market Strategy"],
    },
    {
      title: "Product Development",
      description: "Master the end-to-end product development process",
      points: ["Agile Methodologies", "Product Roadmap", "Sprint Planning"],
    },
    {
      title: "User Research",
      description: "Understand user needs and validate product decisions",
      points: ["User Interviews", "Usability Testing", "Data Analysis"],
    },
    {
      title: "Product Analytics",
      description: "Make data-driven decisions to improve product performance",
      points: ["Metrics Definition", "A/B Testing", "Growth Analysis"],
    },
    {
      title: "Product Analytics",
      description: "Make data-driven decisions to improve product performance",
      points: ["Metrics Definition", "A/B Testing", "Growth Analysis"],
    },
    {
      title: "Product Analytics",
      description: "Make data-driven decisions to improve product performance",
      points: ["Metrics Definition", "A/B Testing", "Growth Analysis"],
    }
  ];

  return (
    <section id="program" className="py-20 px-4 bg-gradient-to-b from-black to-blue-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-50"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Program Curriculum
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
              className="p-6 rounded-xl bg-blue-900/10 border border-blue-900/20 hover:border-blue-500/50 transition group"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                {module.title}
              </h3>
              <p className="text-gray-300 mb-4">{module.description}</p>
              <ul className="space-y-2">
                {module.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-400">
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
