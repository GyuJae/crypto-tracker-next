import React from "react";
import { m, motion, Variants } from "framer-motion";

const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];

interface IFruits {
  emoji: string;
  hueA: number;
  hueB: number;
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const variants: Variants = {
  initial: {
    y: 300,
    opacity: 0,
  },
  onview: {
    y: 0,
    opacity: 1,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Fruits: React.FC<IFruits> = ({ emoji, hueA, hueB }) => {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="flex relative justify-center items-center mx-auto max-w-sm"
      initial="initial"
      whileInView="onview"
      viewport={{ amount: 0.8, once: true }}
    >
      <div
        className="absolute top-48 z-10 w-full h-40 bg-clip-padding rounded-md shadow-lg"
        style={{ background }}
      />
      <motion.div
        variants={variants}
        className="flex justify-center items-center w-48 h-64 text-7xl bg-white rounded-lg shadow-2xl shadow-gray-500"
      >
        {emoji}
      </motion.div>
    </motion.div>
  );
};

const Card = () => {
  return (
    <div className="py-48 space-y-32">
      {food.map(([emoji, hueA, hueB]) => (
        <Fruits key={emoji} emoji={emoji} hueA={hueA} hueB={hueB} />
      ))}
    </div>
  );
};

export default Card;
