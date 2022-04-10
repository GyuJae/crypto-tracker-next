import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";
import { useEffect, useState } from "react";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

const navVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "black",
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    color: "white",
  },
};

const MovieHeader = () => {
  const { scrollY } = useViewportScroll();
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const toggleSearch = () => setSearchOpen((prev) => !prev);
  const navAnimation = useAnimation();
  const InputAnimation = useAnimation();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
        InputAnimation.start("scroll");
      } else {
        navAnimation.start("top");
        InputAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation, InputAnimation]);

  return (
    <div className="relative">
      <motion.div
        variants={navVariants}
        animate={navAnimation}
        className="w-full h-20 flex justify-between items-center px-4 fixed"
      >
        <div className="flex justify-center items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 1.2,
                },
                fill: {
                  duration: 1,
                  delay: 1,
                },
              }}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <div className="text-xs font-semibold cursor-pointer">Movie</div>
          <div className="text-xs font-semibold cursor-pointer">TV</div>
        </div>
        <div>
          {searchOpen ? (
            <motion.input
              className="py-1 pl-8 w-56 border-black bg-transparent"
              variants={navVariants}
            />
          ) : null}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer absolute top-8 right-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={toggleSearch}
            animate={{
              x: searchOpen ? -195 : 0,
            }}
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </motion.svg>
        </div>
      </motion.div>
    </div>
  );
};

export default MovieHeader;
