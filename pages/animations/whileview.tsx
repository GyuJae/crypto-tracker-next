import type { NextPage } from "next";
import React from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

const variants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: -3,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const WhileView: NextPage = () => {
  return (
    <div className="w-screen h-full  bg-rose-500 py-20 space-y-10">
      <AnimatePresence>
        {Array(10)
          .fill(1)
          .map((item, index) => (
            <motion.div
              key={item + index}
              className="w-52 h-72 bg-white rounded-md shadow-md m-auto"
              variants={variants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            />
          ))}
      </AnimatePresence>
    </div>
  );
};

export default WhileView;
