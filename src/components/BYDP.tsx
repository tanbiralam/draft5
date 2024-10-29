import { Lightbulb, Target, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const bydpSteps = [
  {
    icon: <Lightbulb className="h-6 w-6 text-blue-500" />,
    title: "Ideation Phase",
    description:
      "Develop your unique product idea with guidance from industry experts",
    duration: "Week 1-2",
  },
  {
    icon: <Target className="h-6 w-6 text-blue-500" />,
    title: "Market Research",
    description: "Validate your idea through comprehensive market analysis",
    duration: "Week 3-4",
  },
  {
    icon: <Users className="h-6 w-6 text-blue-500" />,
    title: "Product Development",
    description: "Build your MVP with technical and design support",
    duration: "Week 5-8",
  },
  {
    icon: <Rocket className="h-6 w-6 text-blue-500" />,
    title: "Launch Strategy",
    description: "Create and execute your go-to-market strategy",
    duration: "Week 9-12",
  },
];

export default function BYDP() {
  return (
    <div className="relative py-24 overflow-hidden" id="bydp">
      {/* Content Layer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white">
            Build Your Own Product
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Transform your idea into a real product through our guided BYDP
            program
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {bydpSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/60 p-6 rounded-xl hover:shadow-xl group-hover:text-blue-400 transition-colors duration-300 border"
            >
              <div className="inline-block p-3 bg-blue-500/10 rounded-lg">
                {step.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-400">{step.description}</p>
              <p className="mt-4 text-sm text-blue-400">{step.duration}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-xl bg-blue-900/20 border border-blue-900/40">
          <h3 className="text-xl font-semibold mb-4 text-center text-blue-400">
            What You'll Achieve
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500 mb-2">
                Portfolio
              </div>
              <p className="text-gray-300">A real product in your portfolio</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500 mb-2">
                Experience
              </div>
              <p className="text-gray-300">
                Hands-on product development experience
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500 mb-2">
                Network
              </div>
              <p className="text-gray-300">Connect with industry experts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
