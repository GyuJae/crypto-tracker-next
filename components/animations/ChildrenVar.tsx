import { motion, Variants } from "framer-motion";
import { useState } from "react";

const styles = {
  container:
    "bg-rose-700 w-52 h-52 flex justify-center items-center flex-col space-y-2 rounded-lg shadow-lg overflow-hidden",
  item: "w-11/12 h-5 bg-white rounded-sm",
};

const containerVar: Variants = {
  hidden: {
    opacity: 1,
    scale: 0,
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {},
};

const itemVar: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {
        stiffness: 1000,
      },
    },
  },
};

const ChildrenVar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleOpen = () => setOpen((prev) => !prev);
  return (
    <motion.div
      variants={containerVar}
      animate={open ? "open" : "closed"}
      className={styles.container}
      onClick={handleToggleOpen}
    >
      {Array(7)
        .fill(1)
        .map((item, index) => (
          <motion.div
            key={item + index}
            variants={itemVar}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className={styles.item}
          />
        ))}
    </motion.div>
  );
};

export default ChildrenVar;
