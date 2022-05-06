import { motion, useMotionValue, useTransform } from "framer-motion";

const XScroll = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const background = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(222, 138, 152), rgb(244, 63, 94))",
      "linear-gradient(135deg, rgb(108, 51, 61), rgb(85, 16, 28))",
    ]
  );
  return (
    <motion.div
      className="w-52 h-52 rounded-lg shadow-lg"
      drag="x"
      dragSnapToOrigin
      style={{
        x,
        scale,
        background,
      }}
    />
  );
};

export default XScroll;
