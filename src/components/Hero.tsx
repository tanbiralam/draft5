import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Launch Your Career in
              <span className="gradient-text"> Product Management</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Master the skills needed to become a successful Product Manager. Join our comprehensive program designed by industry experts from top tech companies.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center justify-center"
              >
                Join AcceX Squad <ArrowRight className="ml-2 h-5 w-5" />
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
                <p className="text-3xl font-bold text-white">94%</p>
                <p className="text-sm text-gray-400">Placement Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">300+</p>
                <p className="text-sm text-gray-400">Alumni Network</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">12</p>
                <p className="text-sm text-gray-400">Week Program</p>
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