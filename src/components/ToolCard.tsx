import { motion } from "framer-motion";

interface ToolCardProps {
  tool: {
    name: string;
    image: string;
  };
  index: number;
}

export const ToolCard = ({ tool, index }: ToolCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
      <div className="relative p-4 bg-navy-900/50 border border-blue-500/10 rounded-xl backdrop-blur-sm transition-all duration-300 group-hover:border-blue-500/30">
        <img
          src={tool.image}
          alt={tool.name}
          className="h-14 w-14 mx-auto object-contain filter brightness-90 group-hover:brightness-100"
        />
      </div>
    </motion.div>
  );
};
