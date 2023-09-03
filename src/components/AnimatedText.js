import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function AnimatedText({ text, className = "" }) {
  return (
    <>
      <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
        <motion.h1
          variants={quote}
          initial="initial"
          animate="animate"
          className={`${className} inline-block w-full text-dark dark:text-light font-bold text-8xl capitalize`}
        >
          {text.split(" ").map((word, index) => (
            <motion.span
              variants={singleWord}
              className="inline-block"
              key={word + "-" + index}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </>
  );
}
