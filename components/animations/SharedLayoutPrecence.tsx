import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

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
    <motion.div className="w-96  bg-white rounded-lg shadow-lg flex flex-col">
      <motion.div className="w-full  flex items-center justify-around">
        {data.map((item) => (
          <motion.div
            key={item.id}
            className="flex w-full justify-center h-12 items-center text-xs font-semibold relative cursor-pointer"
            onClick={() => handleClickSelectedId(item.id)}
          >
            {item.icon} {item.name}
            {selectedId === item.id && (
              <motion.div
                layoutId="underline"
                className="w-full h-[2px] bg-rose-400 absolute bottom-0"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence exitBeforeEnter>
        {data.map(
          (item) =>
            item.id === selectedId && (
              <motion.div
                key={item.id}
                className="flex justify-center items-center text-9xl h-60"
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
    </motion.div>
  );
};

export default SharedLayoutPrecence;
