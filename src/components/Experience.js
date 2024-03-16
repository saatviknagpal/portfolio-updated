import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Liicon from "./Liicon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] sm:text-xl xs:text-lg"
    >
      <Liicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl md:text-lg">
          {position}&nbsp;{" "}
          <a
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};
export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div
          className="w-[75%] lg:w-[90%] md:w-full mx-auto relative"
          ref={ref}
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full dark:bg-light bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
              <Details
              position="Software Developer Intern"
              company="Desi QnA"
              companyLink="https://www.desiqna.in/"
              time="04/23 - 08/23"
              address="Remote"
              work="In my role at Desi QnA, I spearheaded the design and development of a responsive section using HTML, CSS, JavaScript, and Bootstrap, which resulted in a 40% increase in user engagement. Leveraging PHP and custom algorithms, I significantly enhanced user authentication measures, cutting down bot activities and spam by 60%. Further bolstering site security, I successfully integrated Google reCAPTCHA with PHP and JavaScript, achieving a 70% enhancement in site security while maintaining a seamless user experience."
            />
            <Details
              position="Frontend Developer Intern"
              company="TGH Tech"
              companyLink="https://www.tghtech.com/"
              time="05/22 - 08/22"
              address="Remote"
              work="Worked on a collaborative team, contributing my skills as a full stack developer to deliver impactful projects. Notably, I spearheaded the frontend development of The Social Town (TST), an innovative virtual platform dedicated to community building and catalyzing social change. Leveraging React.js, I seamlessly managed state across diverse pages using Redux Toolkit. Additionally, I played a pivotal role in enhancing user engagement for Boring Bots, a web platform aimed at streamlining business and professional tasks. As a testament to my proficiency, I designed and constructed an intricate admin dashboard from scratch for a movie stock market application, integrating visually captivating Chart.js charts to elevate data visualization and overall user experience."
            />

            <Details
              position="Open Source Contributor"
              company="GirlScript Summer of Code"
              companyLink="https://gssoc.girlscript.tech/"
              time="03/21- 05/21"
              address="Remote"
              work="
I achieved the impressive rank of 34 out of over 1300 active participants in the Girlscript Summer of Code Program. My contributions spanned a diverse array of projects including NeoAlgo, NeoAlgo-Docs, React-Messenger-App, Periodo, CSwala-website, Awesome-Computer-Science, Delhi-Tourism, easya-website, pixelvibe, lifemedeasy, makesmatheasy-documentation, JagratiWebApp, and Kitabe Projects. My primary focus during GSSoC'2021 encompassed Data Structures, Algorithms, and Front-End Development. I actively collaborated using Git and Github, fostering my dedication to open-source development."
            />
          </ul>
        </div>
      </div>
    </>
  );
}
