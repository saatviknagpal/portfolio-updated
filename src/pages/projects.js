import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import vidLounge from "../../public/images/projects/vidlounge.png";
import stock from "../../public/images/projects/stock.png";
import devshowcase from "../../public/images/projects/devshowcase.png";
import quotesly from "../../public/images/projects/quotesly.png";
import apistore from "../../public/images/projects/apistore.png";
import thesocialtown from "../../public/images/projects/thesocialtown.png";
import portfolio from "../../public/images/projects/portfolio.png";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  techStack,
}) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          priority
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="my-2 text-2xl flex space-x-5 font-bold text-dark dark:text-light md:text-xl">
          {techStack.map((e, key) => {
            return <Icon icon={e} key={key} />;
          })}
        </div>
        <div className="mt-3 flex items-center">
          {github !== "" ? (
            <>
              <Link href={github} className="w-10 md:w-8" target="_blank">
                <GithubIcon />
              </Link>
              <Link
                href={link}
                target="_blank"
                className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base md:text-base"
              >
                Visit Project
              </Link>
            </>
          ) : (
            <>
              <Link
                href={link}
                target="_blank"
                className=" rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold md:text-base"
              >
                Visit Project
              </Link>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, techStack, summary }) => {
  return (
    <article className="w-full flex items-center justify-center rounded-2xl border border-solid dark:border-light border-dark dark:bg-dark bg-light p-6 relative flex-col xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          priority
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl sm:text-sm">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="my-2 text-2xl flex space-x-5 font-bold dark:text-light text-dark flex-wrap md:text-xl">
          {techStack.map((e, key) => {
            return <Icon icon={e} key={key} />;
          })}
        </div>
        <div className="mt-3 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="underline dark:text-white text-lg font-semibold sm:text-sm"
          >
            Visit
          </Link>
          <Link href={github} className="w-8 md:w-6" target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects(props) {
  return (
    <>
      <Head>
        <title>Saatvik Nagpal | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination trumps knowledge"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className="col-span-12">
            <FeaturedProject
                title="Stock Search App"
                summary="StockMaster is a comprehensive stock trading application designed to empower users with the tools to effectively manage their investments. With its user-friendly interface, StockMaster allows users to effortlessly search for and monitor stock performance in real-time. Users can execute trades, including buying and selling shares, directly through the app. Additionally, StockMaster offers a secure wallet feature where users can keep track of their cash balance and transaction history. This app aims to simplify the trading process, making it accessible for both novice investors and experienced traders. Enhanced with robust security measures, StockMaster ensures a reliable and safe trading environment for all its users."
                techStack={[
                  "logos:nextjs-icon",
                  "logos:nodejs-icon",
                  "simple-icons:express",
                  "logos:mongodb-icon",
                ]}
                type="Featured Project"
                link="https://frontend-dot-webtechassignment3-418820.wl.r.appspot.com/"
                github="https://github.com/saatviknagpal/assignment-3"
                img={stock}
              />
              </div>
            <div className="col-span-12">
              <FeaturedProject
                title="VidLounge"
                summary="VidLounge is an online platform that allows its users to watch and stream videos that are accessible on the site. In addition, users can interact with the videos by commenting, liking, disliking, or sharing them. Moreover, the website provides the option for users to upload their own videos, with a file size limit of 50 megabytes."
                techStack={[
                  "logos:react",
                  "logos:nodejs-icon",
                  "simple-icons:express",
                  "logos:mongodb-icon",
                  "logos:tailwindcss-icon",
                  "logos:cloudinary-icon",
                ]}
                type="Featured Project"
                link="https://vidlounge.vercel.app/"
                github="https://github.com/saatviknagpal/VidLounge"
                img={vidLounge}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Devshowcase"
                techStack={[
                  "logos:nextjs-icon",
                  "logos:mongodb-icon",
                  "logos:tailwindcss-icon",
                  "logos:cloudinary-icon",
                ]}
                type="Website"
                summary="This is where people who code, can connect, can showcase their development projects in front of whole coder's community. Get hired by startups to build your developer expertise."
                link="https://devshowcase-22.vercel.app/"
                github="https://github.com/saatviknagpal/devshowcase"
                img={devshowcase}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              {" "}
              <Project
                title="Personal Portfolio"
                techStack={[
                  "logos:nextjs-icon",
                  "logos:tailwindcss-icon",
                  "logos:framer",
                ]}
                type="Website"
                summary="Welcome to my digital oasis of creativity and innovation! I'm thrilled to invite you to explore my personal portfolio website, a captivating journey through my passion and expertise. With a blend of design finesse and technical prowess, this site embodies my professional identity and showcases the distinctive facets of my journey."
                link="https://saatviknagpal.vercel.app/"
                github="https://github.com/saatviknagpal/portfolio-updated/"
                img={portfolio}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="The Social Town"
                summary="The Social Town works towards creating a seamless network of tools for nonprofits, volunteers, funders, and other interested organisations to learn and participate in social development."
                techStack={["logos:react", "logos:redux"]}
                type="Featured Project"
                link="https://thesocialtown.in/"
                github=""
                img={thesocialtown}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="API Store"
                summary="Discover the API Store, where you can effortlessly explore a variety of user-created APIs on any device. Experience its user-friendly design while also enjoying a handy background remover mini app, powered by the removeBG API. Make your images shine by easily eliminating backgrounds, all within this accessible and imaginative platform."
                techStack={[
                  "logos:react",
                  "logos:nodejs-icon",
                  "simple-icons:express",
                  "logos:mongodb-icon",
                  "logos:sass",
                ]}
                type="Website"
                link=""
                github="https://github.com/saatviknagpal/api-store"
                img={apistore}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Quotesly"
                techStack={[
                  "logos:react",
                  "logos:graphql",
                  "logos:nodejs-icon",
                  "logos:mongodb-icon",
                  "logos:tailwindcss-icon",
                ]}
                type="Website"
                summary="Quotesly is a web-based platform for browsing and managing quotes with a user-focused design."
                link="https://quotesly.vercel.app/"
                github="https://github.com/saatviknagpal/quotesly/"
                img={quotesly}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
