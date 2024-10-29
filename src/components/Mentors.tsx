import { motion } from "framer-motion";
import { Users, Award } from "lucide-react";
import { mentors } from "../utils/constants";

export default function Mentors() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mx-auto">
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Learn from Industry Experts
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Connect with seasoned professionals who have transformed careers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-all duration-300 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 p-6 hover:border-blue-500/30 transition-all duration-300 h-64">
                {" "}
                {/* Set fixed height */}
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500">
                    Available
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {mentor.name}
                    </h3>
                    <p className="text-blue-500 font-medium">{mentor.role}</p>
                  </div>
                </div>
                <div className="mt-auto space-y-4">
                  {" "}
                  {/* Use mt-auto to push this section down */}
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <span>Experience</span>
                    <span className="font-medium text-white">
                      {mentor.experience}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <span>Transitions</span>
                    <span className="font-medium text-white">
                      {mentor.transitions}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
