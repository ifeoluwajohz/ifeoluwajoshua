// RippleLoader.jsx
import { motion } from "framer-motion";

const rippleVariants = {
  animate: {
    scale: [0, 1],
    opacity: [1, 0],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.2,
    },
  },
};

const RippleLoader = () => {
  return (
    <div className="relative w-20 h-20">
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-4 border-blue-500"
          variants={rippleVariants}
          animate="animate"
          style={{ animationDelay: `${i * 0.6}s` }}
        />
      ))}
      <div className="absolute inset-0 rounded-full bg-blue-500" />
    </div>
  );
};

export default RippleLoader;
