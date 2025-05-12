import React from "react";
import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
    // left: "100%",
  },
  animate: {
    top: "100%",
    // left: "0%",
    right: "0%",
  },
  exit: {
    top: ["100%", "0%"],
    // top: ["0%", "100%"],
    // left: ["100%", "0%"],
    // right: ["0%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totaSteps = 8;
  return totaSteps - index - 1;
};

const Stairs = () => {
  /* render 6 motion divs,each representing a step of stair each div will have same animation defined by the stairAnimation Object
    the delay for each duv will be calculated sinomically based on its reverse index  */
  return (
    <>
      {[...Array(5)].map((ele, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
