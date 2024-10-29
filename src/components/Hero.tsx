import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import EnrollmentModal from "./EnrollmentModal"; // Import the EnrollmentModal

interface CounterProps {
  end: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.round(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <span className="text-lg font-bold text-white">
      {count}
      {suffix}
    </span>
  );
};

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Array of testimonials
  const testimonials = [
    { name: "Udit Bhatia", position: "PM at M3 Inc | Walmart" },
    { name: "Ruchir Rana", position: "PM at AcceleartorX" },
    { name: "Ravi Ahlawat", position: "PM at Paytm" },
  ];

  return (
    <div className="relative pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Launch Your Career in
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Product Management
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Master the skills needed to become a successful Product Manager.
              Join our comprehensive program designed by industry experts from
              top tech companies.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center justify-center"
                onClick={() => setIsModalOpen(true)} // Open modal on click
              >
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-600/10 transition"
              >
                Download Syllabus
              </motion.button>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div>
                <Counter end={16} />
                <p className="text-sm text-gray-400">Week Program</p>
              </div>
              <div>
                <Counter end={2} />
                <p className="text-sm text-gray-400">Specialisations</p>
              </div>
              <div>
                <Counter end={32000} suffix="+" />
                <p className="text-sm text-gray-400">Jobs</p>
              </div>
              <div>
                <Counter end={48} suffix="LPA+" />
                <p className="text-sm text-gray-400">Salary</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/assets/bg.jpg"
              alt="Product Management Workshop"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 flex flex-row gap-4">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className="flex flex-col items-center bg-slate-950 p-2 rounded-lg shadow-lg w-32 md:w-48"
                >
                  <p className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {testimonial.position}
                  </p>{" "}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
