import { motion } from "framer-motion";
import { skills, tools } from "../utils/constants";
import { useEffect, useState } from "react";
import { ToolCard } from "./ToolCard";
import { SkillCard } from "./SkillCard";

export default function SkillsAndTools() {
  const [visibleSkills, setVisibleSkills] = useState(skills.slice(0, 4));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 4) % skills.length;
        setVisibleSkills(skills.slice(newIndex, newIndex + 4));
        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,255,0.1)_0%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Master the essential skills and tools used by top Product Managers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Tools You'll Master
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <ToolCard key={tool.name} tool={tool} index={index} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Skills You'll Develop
            </h3>
            <div className="space-y-4">
              {visibleSkills.map((skill, index) => (
                <SkillCard key={skill} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
