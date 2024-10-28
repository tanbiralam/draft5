import { motion } from 'framer-motion';

const mentors = [
  {
    name: "Sarah Chen",
    role: "Senior PM at Google",
    experience: "10+ years in Product",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Michael Rodriguez",
    role: "Director of Product at Meta",
    experience: "12+ years in Tech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Emily Wong",
    role: "Product Lead at Amazon",
    experience: "8+ years in Product",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "David Kim",
    role: "VP Product at Spotify",
    experience: "15+ years in Tech",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

export default function Mentors() {
  return (
    <div className="py-24 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white">Learn from the Best</h2>
          <p className="mt-4 text-lg text-gray-400">
            Our mentors are industry leaders with proven track records
          </p>
        </motion.div>
        <div className="mentor-scroll flex gap-8 py-4">
          {[...mentors, ...mentors].map((mentor, index) => (
            <div
              key={index}
              className="flex-none w-72 bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{mentor.name}</h3>
                  <p className="text-blue-400">{mentor.role}</p>
                  <p className="text-sm text-gray-400 mt-1">{mentor.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}