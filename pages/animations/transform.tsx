import type { NextPage } from "next";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const Transform: NextPage = () => {
  const x = useMotionValue(0);
  const xInput = [-200, 0, 200];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)",
  ]);
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)",
  ]);
  const borderRadius = useTransform(x, xInput, ["50%", "5%", "50%"]);
  const scale = useTransform(x, xInput, [1.5, 1, 1.5]);
  const dragConstraintsRef = useRef<HTMLDivElement>(null);

  const [center, setCenter] = useState<boolean>(true);

  const handleToggleCenter = () => setCenter((prev) => !prev);
  return (
    <div className="flex justify-around items-center h-screen w-screen bg-rose-500">
      <motion.div
        className="w-[700px] h-[700px] flex rounded-md shadow-md overflow-hidden p-4"
        style={{
          background,
          justifyContent: center ? "center" : "flex-start",
          alignItems: center ? "center" : "flex-start",
        }}
        ref={dragConstraintsRef}
      >
        <motion.div
          layout
          drag="x"
          dragSnapToOrigin
          dragConstraints={dragConstraintsRef}
          dragElastic={0.1}
          style={{ x, background: color, borderRadius, scale }}
          className="w-36 h-36 shadow-2xl"
          onClick={handleToggleCenter}
        />
      </motion.div>
    </div>
  );
};

export default Transform;
