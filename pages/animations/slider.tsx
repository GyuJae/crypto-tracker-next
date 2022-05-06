import { AnimatePresence, Variants, motion } from "framer-motion";
import type { NextPage } from "next";
import { useState } from "react";

const styles = {
  wrapper:
    "flex flex-col justify-center items-center py-20 px-20 bg-rose-500 h-screen justify-center",
  buttonContainer: "flex justify-evenly items-center py-16 w-52",
  visibleButton: "font-semibold text-lg",
};

const variants: Variants = {
  initial: {
    x: typeof window !== "undefined" ? -window.outerWidth : -500,
  },
  animate: {
    x: 0,
  },
  exit: {
    x: typeof window !== "undefined" ? window.outerWidth : 500,
  },
};

const Slider: NextPage = () => {
  const TOTAL_NUMBER = 22;
  const PER_NUMBER = 7;
  const TOTAL_PAGE = Math.ceil(TOTAL_NUMBER / PER_NUMBER);

  const [visibleNumber, setVisibleNumber] = useState<number>(1);

  const handlePrevVisible = () => {
    if (visibleNumber === 1) return;
    setVisibleNumber((prev) => prev - 1);
  };

  const handleNextVisible = () => {
    if (TOTAL_PAGE === visibleNumber) return setVisibleNumber(1);
    setVisibleNumber((prev) => prev + 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonContainer}>
        <button onClick={handlePrevVisible} className={styles.visibleButton}>
          Prev
        </button>
        <button onClick={handleNextVisible} className={styles.visibleButton}>
          Next
        </button>
      </div>
      <div className="flex justify-start items-center space-x-2">
        <AnimatePresence initial={false} exitBeforeEnter>
          {Array(TOTAL_NUMBER)
            .fill(1)
            .map(
              (item, index) =>
                visibleNumber === Math.ceil((item + index) / PER_NUMBER) && (
                  <motion.div
                    key={`${item}-${item + index}`}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                      duration: 0.5,
                      type: "tween",
                    }}
                    className="bg-rose-200 w-24 h-20 flex justify-center items-center shadow-2xl rounded-md"
                  >
                    {item + index}
                  </motion.div>
                )
            )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slider;
