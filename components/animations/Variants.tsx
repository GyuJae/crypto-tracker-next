import { motion, Variants } from "framer-motion";

const styles = {
  container:
    "w-52 h-52 bg-rose-800 rounded-lg shadow-2xl grid grid-cols-2 gap-3 p-3 shadow-rose-700",
  item: "bg-white rounded-full",
};

const containerVar: Variants = {
  hidden: {
    opacity: 1,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVar: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const VariantsComponent = () => {
  return (
    <motion.div
      variants={containerVar}
      initial="hidden"
      animate="visible"
      className={styles.container}
    >
      {Array(4)
        .fill(1)
        .map((item, index) => (
          <motion.div
            key={`VariantsComponent-item-${item + index}`}
            variants={itemVar}
            className={styles.item}
          />
        ))}
    </motion.div>
  );
};

export default VariantsComponent;
