import { motion } from "framer-motion";
import { useRef } from "react";

const styles = {
  container:
    "bg-rose-700 w-52 h-52 shadow-lg rounded-lg flex justify-center items-center",
  item: "bg-white w-32 h-32 rounded-md",
};

const Drag = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return (
    <motion.div ref={constraintsRef} className={styles.container}>
      <motion.div
        className={styles.item}
        drag
        dragSnapToOrigin
        dragConstraints={constraintsRef}
        dragElastic={0.2}
      />
    </motion.div>
  );
};

export default Drag;
