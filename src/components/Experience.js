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
              position="Software Engineer (MTS)"
              company="Mercor"
              companyLink="https://www.mercor.com/"
              time="08/25 - 09/26"
              address="San Francisco, CA"
              work="Core engineer across 20+ client projects with multi-million-dollar estimated revenue impact, resolving 200+ issues spanning client delivery, infrastructure, automations, and expert tooling. Built the pass@k scoring pipeline and interactive dashboard behind 100% of client pass@k deliveries. Cut eval batch QA review from 2-3 hours to 20 minutes per benchmark with Claude-based validation, and reduced Canonical Eval setup from 5-10 minutes to under 1 minute. Built MultiSource task generation, delivery pipelines, autosave, and a Lean 4 compiler inside the annotation platform, enabling 100+ experts to annotate at scale. Gave 11+ engineers visibility into 2.5K+ eval batches and 1M+ trajectories with a model-by-benchmark dashboard, and led an S3-backed PII annotation workflow that anonymized 5K documents."
            />
            <Details
              position="Software Developer Intern"
              company="Desi QnA"
              companyLink="https://www.desiqna.in/"
              time="04/23 - 08/23"
              address="Remote"
              work="Kept the app usable in low-connectivity conditions by building an offline-capable Progressive Web App (PWA) with data sync on reconnect and token-based authentication for sign-in and onboarding."
            />
            <Details
              position="Frontend Developer Intern"
              company="TGH Tech"
              companyLink="https://www.tghtech.com/"
              time="05/22 - 08/22"
              address="Remote"
              work="Shipped 2 customer-facing websites and a SaaS application, and cut unnecessary data fetching with GraphQL caching, cursor-based pagination, and lazy loading."
            />

            <Details
              position="Open Source Contributor"
              company="GirlScript Summer of Code"
              companyLink="https://gssoc.girlscript.tech/"
              time="03/21- 05/21"
              address="Remote"
              work="Ranked 34th of 1,300+ participants in GirlScript Summer of Code 2021, contributing to NeoAlgo, NeoAlgo-Docs, CSwala, JagratiWebApp, and other open-source projects."
            />
          </ul>
        </div>
      </div>
    </>
  );
}
