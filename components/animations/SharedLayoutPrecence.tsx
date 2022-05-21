import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

const styles = {
  wrapper: "w-96 bg-white rounded-lg shadow-lg flex flex-col",
  headerContainer: "w-full flex items-center justify-around",
  headerItemContainer:
    "flex w-full justify-center h-12 items-center text-xs font-semibold relative cursor-pointer",
  headerUnderline: "w-full h-[2px] bg-rose-400 absolute bottom-0",
  item: "flex justify-center items-center text-9xl h-60",
};

interface IData {
  id: string;
  name: string;
  icon: string;
}

const data: IData[] = [
  { id: `tomato-${1}`, name: "tomato", icon: "🍅" },
  { id: `blueberry-${2}`, name: "blueberry", icon: "🫐" },
  { id: `con-${3}`, name: "con", icon: "🌽" },
];

const variants: Variants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const SharedLayoutPrecence = () => {
  const [selectedId, setSelcetedId] = useState<string>(data[0].id);

  const handleClickSelectedId = (id: string) => setSelcetedId(id);
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        {data.map((item) => (
          <div
            key={item.id}
            className={styles.headerItemContainer}
            onClick={() => handleClickSelectedId(item.id)}
          >
            {item.icon} {item.name}
            {selectedId === item.id && (
              <motion.div
                layoutId="underline"
                className={styles.headerUnderline}
              />
            )}
          </div>
        ))}
      </div>
      <AnimatePresence exitBeforeEnter>
        {data.map(
          (item) =>
            item.id === selectedId && (
              <motion.div
                key={item.id}
                className={styles.item}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.15 }}
              >
                {item.icon}
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default SharedLayoutPrecence;
