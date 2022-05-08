import { cls } from "@libs/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const styles = {
  container: (toggle: boolean) =>
    cls(
      "w-52 h-24 bg-rose-200 bg-opacity-70 rounded-full shadow-md flex items-center px-5 ",
      toggle ? "justify-start" : "justify-end"
    ),
  item: "w-20 h-20 bg-white rounded-full",
};

const Toggle = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  const handlerToggle = () => setToggle((prev) => !prev);

  return (
    <motion.div className={styles.container(toggle)}>
      <motion.div layout onClick={handlerToggle} className={styles.item} />
    </motion.div>
  );
};

export default Toggle;
