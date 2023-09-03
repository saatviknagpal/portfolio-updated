import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark dark:text-dark dark:bg-light text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
export default function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center ">Skills</h2>

      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark dark:text-dark dark:bg-light text-light p-7 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-13vw" y="-2vw" />
        <Skill name="CSS" x="0vw" y="-7.5vw" />
        <Skill name="React.js" x="8vw" y="6vw" />
        <Skill name="JavaScript" x="-5vw" y="7vw" />
        <Skill name="Next.js" x="13vw" y="-2vw" />
        <Skill name="GraphQL" x="-20vw" y="-10vw" />
        <Skill name="NodeJS" x="20vw" y="-10vw" />
        <Skill name="Expressjs" x="-12vw" y="13vw" />
        <Skill name="Redux" x="2vw" y="-15vw" />
        <Skill name="Spring" x="-25vw" y="3vw" />
        <Skill name="MongoDB" x="25vw" y="3vw" />
        <Skill name="Java" x="11vw" y="13vw" />
        <Skill name="TailwindCSS" x="0vw" y="19vw" />
        <Skill name="Github" x="-35vw" y="9vw" />
        <Skill name="Figma" x="-10vw" y="-22vw" />
        <Skill name="Firebase" x="35vw" y="9vw" />
      </div>
    </>
  );
}
