import Layout from "@/components/Layout";
import { Model } from "../components/Model";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { Suspense, useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import Image from "next/image";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <Head>
        <title>Saatvik Nagpal | Home Page</title>
        <meta name="description" content="Personal Portfolio" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {page_path:window.location.pathname,});
  `,
          }}
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Canvas
                frameloop="demand"
                className="lg:hidden  md:w-full"
                camera={{ position: [2, 0, 12.25], fov: 10 }}
                style={{
                  width: "100%",
                  height: "80vh",
                }}
              >
                <ambientLight intensity={2} />
                <ambientLight intensity={0.9} />
                <directionalLight intensity={0.4} />
                <Suspense fallback={null}>
                  <Model position={[0.025, -0.9, 0]} />
                </Suspense>
                <OrbitControls />
              </Canvas>
              <Canvas
                frameloop="demand"
                className="hidden md:inline-block md:w-full"
                camera={{ position: [2, 0, 12.25], fov: 10 }}
                style={{
                  width: "100%",
                  height: "40vh",
                }}
              >
                <ambientLight intensity={2} />
                <ambientLight intensity={0.9} />
                <directionalLight intensity={0.4} />
                <Suspense fallback={null}>
                  <Model position={[0.025, -0.9, 0]} />
                </Suspense>
                <OrbitControls />
              </Canvas>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Crafting Reality Through the Language of Code."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs ">
                As a skilled full-stack developer and data science enthusiast, I
                am dedicated to turning ideas into innovative web applications
                and intelligent solutions. Explore my latest projects and
                articles, showcasing my expertise in React.js, machine learning,
                and web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <button
                  onClick={() => setShowResume(true)}
                  className="flex items-center bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold hover:bg-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                >
                  View Resume <LinkArrow className={"w-6 ml-1"} />
                </button>
                <Link
                  className="ml-4 text-lg font-medium capitalize dark:text-light text-dark underline md:text-base"
                  href="mailto:saatvikn@usc.edu"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src={lightBulb}
            alt="Saatvik"
            className="w-full h-auto"
          ></Image>
        </div>
      </main>
      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg w-3/4 h-3/4 relative">
            <button
              onClick={() => setShowResume(false)}
              className="bg-red-500 text-white p-2 rounded absolute top-4 right-4"
            >
              Close
            </button>
            <iframe
              src="/resume.pdf"
              style={{ width: "100%", height: "100%" }}
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
