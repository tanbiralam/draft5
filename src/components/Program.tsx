import { BookOpen, Code, PieChart, Users, MessageSquare, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const modules = [
  {
    icon: <BookOpen className="h-6 w-6 text-blue-500" />,
    title: "Product Fundamentals",
    duration: "2 weeks",
    topics: ["Product Thinking", "Market Research", "User Psychology", "Product Strategy"]
  },
  {
    icon: <Code className="h-6 w-6 text-blue-500" />,
    title: "Technical Skills",
    duration: "3 weeks",
    topics: ["Product Analytics", "Agile Methodologies", "Product Requirements", "Technical Architecture"]
  },
  {
    icon: <PieChart className="h-6 w-6 text-blue-500" />,
    title: "Business Acumen",
    duration: "2 weeks",
    topics: ["Business Models", "Monetization", "Growth Metrics", "Go-to-Market Strategy"]
  }
];

export default function Program() {
  return (
    <div className="py-24 bg-gray-900" id="program">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white">Program Curriculum</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Master product management through our comprehensive curriculum
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-block p-3 bg-blue-500/10 rounded-lg">
                {module.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{module.title}</h3>
              <p className="mt-1 text-sm text-blue-400">{module.duration}</p>
              <ul className="mt-4 space-y-2">
                {module.topics.map((topic, idx) => (
                  <li key={idx} className="text-gray-400 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}