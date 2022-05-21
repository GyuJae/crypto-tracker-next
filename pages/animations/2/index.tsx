import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

const variants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const childVar: Variants = {
  initial: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
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
      y: { stiffness: 1000 },
    },
  },
};

const Animations = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex overflow-y-hidden justify-center items-center h-screen bg-blue-400">
      <motion.div className="w-96 h-screen bg-pink-400">
        <motion.div
          className="m-8 w-20 h-20 bg-green-400 rounded-full"
          onClick={handleToggleOpen}
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="space-y-2"
              variants={variants}
              initial="initial"
              animate="open"
              exit={"closed"}
              transition={{
                type: "tween",
                staggerChildren: 0.5,
              }}
            >
              {Array(10)
                .fill(1)
                .map((item, idx) => (
                  <motion.div
                    key={`${item + idx}`}
                    className="mx-8 w-44 h-12 bg-indigo-400 rounded-md shadow-sm"
                    variants={childVar}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Animations;
