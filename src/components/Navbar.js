import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-dark absolute w-0 left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }         dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
export default function Navbar() {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink
            href="/achievements"
            title={"Achievements"}
            className="ml-4"
          />
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
        <nav className="flex items-center justify-center flex-wrap ">
          <motion.a
            href="https://twitter.com/saatvik_nagpal"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/saatviknagpal"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/saatviknagpal/"
            target={"_blank"}
            className="w-6 ml-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/saatvik_nagpal/"
            target={"_blank"}
            className="w-6 ml-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="text-2xl" icon="skill-icons:instagram" />
          </motion.a>

          <button
            className={`ml-5 flex items-center justify-center rounded-full p-1 w-7 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </header>
    </>
  );
}
