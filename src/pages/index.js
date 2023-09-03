import Layout from "@/components/Layout";
import { Model } from "../components/Model";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { Suspense } from "react";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import Image from "next/image";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Canvas
                camera={{ position: [2, 0, 12.25], fov: 10 }}
                style={{
                  width: "80%",
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
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  className="ml-4 text-lg font-medium capitalize dark:text-light text-dark underline"
                  href="mailto:nagpal.saa@northeastern.edu"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image
            src={lightBulb}
            alt="Saatvik"
            className="w-full h-auto"
          ></Image>
        </div>
      </main>
    </>
  );
}
