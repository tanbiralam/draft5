import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  return (
    <div className="relative bg-gray-900 pt-24 pb-16 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-transparent to-black opacity-80 z-0" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mesh.png')] opacity-20 z-0" />

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
              >
                Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-500 px-8 py-3 rounded-full hover:bg-blue-600/10 transition"
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
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Product Management Workshop"
              className="rounded-lg shadow-2xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                  alt="Student"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Sarah Johnson</p>
                  <p className="text-sm text-gray-400">PM at Google</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
