import type { NextPage } from "next";
import { AnimatePresence, motion, Variants } from "framer-motion";

import Animation from "@components/animations/Animation";
import VariantsComponent from "@components/animations/Variants";
import Gestures from "@components/animations/Gestures";
import Drag from "@components/animations/Drag";
import XScroll from "@components/animations/XScroll";
import YScroll from "@components/animations/YScroll";
import Svg from "@components/animations/Svg";
import InfinityBox from "@components/animations/InfinityBox";
import ChildrenVar from "@components/animations/ChildrenVar";
import Toggle from "@components/animations/Toggle";
import SharedLayoutPrecence from "@components/animations/SharedLayoutPrecence";

const styles = {
  container:
    "bg-rose-500 flex justify-center px-20 py-20 flex-wrap gap-8 h-full",
};

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Svg />
      <Animation />
      <VariantsComponent />
      <YScroll />
      <Gestures />
      <Drag />
      <XScroll />
      <InfinityBox />
      <ChildrenVar />
      <Toggle />
      <SharedLayoutPrecence />
    </div>
  );
};

export default Index;
