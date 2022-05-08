import { motion, Variants } from "framer-motion";

const styles = {
  container: "w-52 h-52 bg-white shadow-lg rounded-lg",
};

const variants: Variants = {
  animate: {
    scale: [1, 1.5, 1.5, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const InfinityBox = () => {
  return (
    <motion.div
      className={styles.container}
      variants={variants}
      animate="animate"
    />
  );
};

export default InfinityBox;
