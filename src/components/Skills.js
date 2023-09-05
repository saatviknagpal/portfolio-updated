import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark dark:text-dark dark:bg-light text-light py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
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
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>

      <div className="w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark dark:text-dark dark:bg-light text-light p-7 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
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
