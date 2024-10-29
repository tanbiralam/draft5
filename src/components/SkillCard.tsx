import { motion } from "framer-motion";

interface SkillCardProps {
  skill: string;
  index: number;
}

export const SkillCard = ({ skill, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="p-4 bg-navy-900/50 border border-blue-500/20 rounded-xl backdrop-blur-sm transition-all duration-300 group-hover:border-blue-500/50">
        <div className="flex items-center space-x-3">
          <div className="h-2 w-2 rounded-full bg-blue-400 group-hover:bg-blue-300" />
          <span className="text-white group-hover:text-white transition-colors font-semibold">
            {skill}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
