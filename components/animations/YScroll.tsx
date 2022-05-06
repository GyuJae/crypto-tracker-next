import { motion, useTransform, useViewportScroll } from "framer-motion";

const YScroll = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      style={{
        scale,
      }}
      className="w-52 h-52 bg-rose-700 shadow-lg rounded-lg "
    >
      <motion.div
        style={{
          scaleY: scrollYProgress,
        }}
        className="w-full h-full origin-bottom-right bg-white shadow-lg rounded-lg "
      />
    </motion.div>
  );
};

export default YScroll;
