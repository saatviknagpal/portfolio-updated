import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilepic from "../../public/images/profile/profilepic.png";
import { useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default function About() {
  return (
    <>
      <Head>
        <title>Saatvik Nagpal | About Page</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium ">
                Hello, I&apos;m Saatvik, a dedicated full stack developer deeply
                passionate about open source initiatives. I thrive on crafting
                seamless and innovative digital solutions that seamlessly merge
                form and function. My unwavering enthusiasm for open source
                fuels my drive to translate client&apos;s visions into
                captivating, user-centric experiences.
              </p>
              <p className="my-4 font-medium ">
                I firmly believe that design should transcend aesthetics and
                instead focus on problem-solving, resulting in intuitive and
                gratifying user journeys. Be it a web application, a mobile
                interface, or any digital platform, I channel my expertise in
                design excellence and user-focused principles into every facet
                of my work. I&pos;m excited about the prospect of channeling my
                skills and fervor into your upcoming project.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={profilepic}
                alt="Saatvik's Img"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-lg font-medium  capitalize dark:text-light/75 text-dark/75">
                  Open-Source Contributions
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75">
                  Hackathons won
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
