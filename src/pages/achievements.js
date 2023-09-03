import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import sih from "../../public/images/achievements/sih.jpg";
import tally from "../../public/images/achievements/tally.jpg";
import gssoc from "../../public/images/achievements/gssoc1.jpg";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
const FramerImage = motion(Image);

const FeaturedAchievements = ({
  type,
  title,
  summary,
  img,
  link,
  readMore,
}) => {
  return (
    <article className="w-full flex items-center justify-center rounded-2xl border border-solid border-dark dark:border-light dark:bg-dark bg-light p-6 relative flex-col h-">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] dark:bg-light bg-dark rounded-br-3xl " />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between pl-3 mt-5">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-3 flex items-center">
          {readMore ? (
            <>
              <Link
                href={readMore}
                target="_blank"
                className=" -ml-1 rounded-md dark:text-dark dark:bg-light hover:scale-105 bg-dark text-light p-2 px-3 text-lg font-semibold"
              >
                Read More
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </article>
  );
};

const Achievement = ({ type, title, summary, img, link, readMore }) => {
  return (
    <article className="w-full flex items-center justify-center rounded-2xl border border-solid dark:border-light dark:bg-dark border-dark bg-light p-6 relative ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] dark:bg-light bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full pl-6 flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
      </div>
    </article>
  );
};

export default function Achievements() {
  return (
    <>
      <Head>
        <title>Saatvik Nagpal | Achievements Page</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Triumph through perseverance" className="mb-16" />

          <div className="grid grid-cols-12 gap-24 gap-y-32 ">
            <div className="col-span-6">
              <FeaturedAchievements
                title="Winner of Smart India Hackathon"
                summary="Champions of Smart India Hackathon 2022 Grand Finale, Team 'Peaky Blinders' excelled under Problem Statement KK1182. Our winning solution: a user-friendly website enabling seamless lab bookings across institutions. Whether funded by the student's own institution or paid individually, our platform fosters efficient resource sharing. This achievement highlights our innovation and teamwork, addressing real-world challenges and amplifying access to quality education."
                type="Hackathon"
                link="https://www.linkedin.com/posts/iitg_smartindiahackathon2022-iitguwahati-sih2-activity-6969919562607702016-c0zb/"
                img={sih}
              />
            </div>
            <div className="col-span-6">
              <FeaturedAchievements
                title="2nd Runner Up in Tally CodeBrewers"
                summary="As part of Team Code Treasurer with Rajib Mondal and Shubham Jain, I played a vital role in clinching the 2nd runner-up spot at Tally Solutions' Tally CodeBrewers 2022. Our strategy focused on efficiency, managing core tasks and additional features. We overcame challenges, including a strenuous 10-hour effort on Google Authentication and a subsequent setback. Our collective determination, adaptability, and teamwork prevailed. My contributions, along with my teammates', showcased the strength of collaboration and tech expertise. The competition's structure and mentorship enriched our journey."
                type="Hackathon"
                link="https://www.linkedin.com/posts/tallysolutions_tally-codebrewers-winners-commander-of-activity-6955401069099122688-dbMo/"
                readMore="https://unstop.com/blog/tally-codebrewers-2022-runner-up-2"
                img={tally}
              />
            </div>
            <div className="col-span-12">
              <Achievement
                title="Ranked 34 in GirlScript Summer of Code"
                summary="GirlScript Summer of Code is an annual three-month-long open-source program launched by the GirlScript Foundation in 2018, designed to facilitate beginners' entry into open-source development while promoting diversity. I achieved a notable rank of 34 out of over 1300 active participants in the program, showcasing contributions to various projects, including NeoAlgo, NeoAlgo-Docs, React-Messenger-App, Periodo, CSwala-website, Awesome-Computer-Science, Delhi-Tourism, easya-website, pixelvibe, lifemedeasy, makesmatheasy-documentation, JagratiWebApp, and Kitabe Projects. My contributions spanned data structures, algorithms, and front-end development, reflecting my versatility as a developer. My proficiency in collaboration using Git and Github played a crucial role in my successful open-source journey during GSSoC'2021, leaving a lasting impact within the open-source community."
                link="https://www.linkedin.com/posts/saatviknagpal_opensource-girlscriptfoundation-gssoc-activity-6809734287684878336-AW5S?utm_source=share&utm_medium=member_desktop"
                readMore="https://unstop.com/blog/tally-codebrewers-2022-runner-up-2"
                img={gssoc}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
