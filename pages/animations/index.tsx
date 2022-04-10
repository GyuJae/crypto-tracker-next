import type { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Index: NextPage = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-rose-700">
      <div className="grid grid-cols-3 w-[650px] h-[420px] gap-5">
        <motion.div
          layoutId="1"
          className="col-span-2 bg-white rounded-md shadow-lg cursor-pointer"
          onClick={() => setSelectedId("1")}
        />
        <motion.div
          layoutId="2"
          className="col-span-1 bg-white rounded-md shadow-lg cursor-pointer"
          onClick={() => setSelectedId("2")}
        />
        <motion.div
          layoutId="3"
          className="col-span-1 bg-white rounded-md shadow-lg cursor-pointer"
          onClick={() => setSelectedId("3")}
        />
        <motion.div
          layoutId="4"
          className="col-span-2 bg-white rounded-md shadow-lg cursor-pointer"
          onClick={() => setSelectedId("4")}
        />
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div className="w-full h-full absolute left-0">
            <motion.div
              layoutId={selectedId}
              className="absolute bottom-64 left-[520px] z-10"
            >
              <motion.div className="w-96 h-48 bg-white rounded-md shadow-lg cursor-pointer z-10" />
            </motion.div>
            <motion.div
              onClick={() => setSelectedId(null)}
              className="absolute left-0 top-0 w-full h-full bg-rose-900"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.7,
              }}
              exit={{
                opacity: 0,
              }}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
