import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Liicon from "./Liicon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <Liicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}&nbsp; </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};
export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
          Education
        </h2>

        <div className="w-[75%] mx-auto relative" ref={ref}>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full dark:bg-light bg-dark origin-top"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 ">
            <Details
              type="Master of Science in Software Engineering Systems"
              time="2023-2025"
              place="Northeastern University, Boston"
              info="Relevant courses included Program Structure and Algorithms, Object Oriented Programming using Java"
            />
            <Details
              type="Bachelor of Technology in Computer Science and Engineering"
              time="2019-2023"
              place="Guru Gobind Singh University, Delhi"
              info="Relevant courses included Data Structures and Algorithms, Operating System, Object Oriented Programming and Database Management System."
            />
            <Details
              type="Higher Secondary"
              time="2018-2019"
              place="MM Public School, Delhi"
              info="Relevant courses included English, Physics, Chemistry, Maths and Physical Education"
            />
          </ul>
        </div>
      </div>
    </>
  );
}
