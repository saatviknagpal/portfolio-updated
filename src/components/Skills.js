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
          Full-Stack & AI
        </motion.div>
        <Skill name="Python" x="11vw" y="13vw" />
        <Skill name="TypeScript" x="15vw" y="8vw" />
        <Skill name="JavaScript" x="-15vw" y="-8vw" />
        <Skill name="Java" x="10vw" y="-12vw" />
        <Skill name="SQL" x="13vw" y="18vw" />
        <Skill name="React" x="5vw" y="-18vw" />
        <Skill name="Next.js" x="-18vw" y="5vw" />
        <Skill name="FastAPI" x="22vw" y="-5vw" />
        <Skill name="Node.js" x="-8vw" y="22vw" />
        <Skill name="GraphQL" x="-22vw" y="-5vw" />
        <Skill name="PostgreSQL" x="0vw" y="25vw" />
        <Skill name="Temporal" x="18vw" y="0vw" />
        <Skill name="Docker" x="-22vw" y="12vw" />
        <Skill name="AWS" x="4vw" y="20vw" />
        <Skill name="GCP" x="-5vw" y="18vw" />
        <Skill name="Modal" x="-12vw" y="25vw" />
        <Skill name="Claude / OpenAI" x="18vw" y="-15vw" />
        <Skill name="LangChain" x="-15vw" y="20vw" />
      </div>
    </>
  );
}
