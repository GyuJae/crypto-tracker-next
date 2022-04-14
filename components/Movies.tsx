import Image from "next/image";
import { useState } from "react";
import { makeImagePath } from "../libs/utils";
import { motion, AnimatePresence } from "framer-motion";
import { IMovie } from "../libs/types";
import Link from "next/link";

interface IMoviesprops {
  movies: IMovie[];
}

const rowVariants = {
  hidden: (back: boolean) => ({
    x: back ? -window.outerWidth : window.outerWidth,
  }),
  visible: {
    x: 0,
  },
  exit: (back: boolean) => ({
    x: back ? window.outerWidth : -window.outerWidth,
  }),
};

const Movies: React.FC<IMoviesprops> = ({ movies }) => {
  const SHOW_MOVIES = 6;
  const [startIdx, setStartIdx] = useState<number>(0);
  const [back, setBack] = useState<boolean>(false);
  const nextButton = () => {
    setBack(false);
    if (movies) {
      if (startIdx > movies.length - SHOW_MOVIES) {
        setStartIdx(0);
      } else {
        setStartIdx((prev) => prev + SHOW_MOVIES);
      }
    }
  };
  const prevButton = () => {
    setBack(true);
    if (movies) {
      if (startIdx === 0) return;
      setStartIdx((prev) => prev - SHOW_MOVIES);
    }
  };

  return (
    <div className="flex justify-start items-center w-[1344px] relative">
      <div
        onClick={prevButton}
        className="bg-gray-400 bg-opacity-20 cursor-pointer h-32 flex jsutify-center items-center absolute left-0 rounded-l-md z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <AnimatePresence initial={false} custom={back}>
        <motion.div
          className="absolute grid grid-cols-6 gap-2 h-32 ml-7"
          custom={back}
          variants={rowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: "tween", duration: 0.7 }}
          key={startIdx}
        >
          {movies.slice(startIdx, startIdx + SHOW_MOVIES).map((movie) => (
            <motion.div
              key={movie.id}
              className="relative w-52 h-32 bg-gray-300"
            >
              <Link href={`/movies/${movie.id}`}>
                <a>
                  <Image
                    key={movie.backdrop_path}
                    className="absolute object-cover"
                    alt="background image"
                    src={makeImagePath(movie.backdrop_path)}
                    layout="fill"
                    priority
                  />
                </a>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <div
        onClick={nextButton}
        className="bg-gray-400 bg-opacity-20 cursor-pointer h-32 flex jsutify-center items-center absolute right-0 rounded-r-md z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Movies;
