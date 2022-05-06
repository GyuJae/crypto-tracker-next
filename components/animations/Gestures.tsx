import { motion, Variants } from "framer-motion";

const styles = {
  box: "w-52 h-52  shadow-md rounded-lg bg-white",
};

const variants: Variants = {
  hover: {
    scale: 1.2,
    rotate: 90,
    transition: {
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%",
    transition: {
      duration: 0.3,
    },
  },
  drag: {
    backgroundColor: "rgb(244, 63, 94)",
    transition: { duration: 0.5 },
  },
};

const Gestures = () => {
  return (
    <motion.div
      drag
      dragSnapToOrigin
      className={styles.box}
      variants={variants}
      whileHover="hover"
      whileDrag="drag"
      whileTap="tap"
    />
  );
};

export default Gestures;
