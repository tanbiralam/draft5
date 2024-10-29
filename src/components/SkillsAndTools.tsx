import { motion } from "framer-motion";

const tools = [
  "Jira",
  "Figma",
  "Google Analytics",
  "Amplitude",
  "Mixpanel",
  "Notion",
  "Slack",
  "GitHub",
];

const skills = [
  "Product Strategy",
  "User Research",
  "Data Analysis",
  "Agile Management",
  "Stakeholder Communication",
  "Technical Understanding",
  "Business Acumen",
  "Design Thinking",
];

export default function SkillsAndTools() {
  return (
    <div className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white">Skills & Tools</h2>
          <p className="mt-4 text-lg text-gray-400">
            Master the essential skills and tools used by top Product Managers
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {/* Tools Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-8">
              Tools You'll Master
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900 p-4 rounded-lg text-center"
                >
                  <span className="text-gray-300">{tool}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-8">
              Skills You'll Develop
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900 p-4 rounded-lg"
                >
                  <span className="text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
