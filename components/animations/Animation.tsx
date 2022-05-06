import { motion, Variants } from "framer-motion";

const styles = {
  container: "w-52 h-52 bg-white rounded-lg shadow-lg",
};

const variants: Variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    rotateZ: 180,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      duration: 5,
    },
  },
};

const Animation = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className={styles.container}
    />
  );
};

export default Animation;
