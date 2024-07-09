import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Lottie from "lottie-react";
import { FiPackage } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai";

import AnimatedHeading from "../others/AnimatedHeading";

import { poppins, roboto, ubuntu } from "@/app/utils/Fonts";
import techLottie from "@/public/assets/lottie/tech2.json";
import { skillSet } from "@/app/utils/placeholder";
import myphoto from "@/public/assets/image/gaurav_sharma.png";

interface props {
  themeColor: string;
}

const Right = {
  closed: { x: 0, y: -50, rotate: "-30deg", opacity: 0 },
  open: { x: -350, y: 150, rotate: "-40deg", opacity: 1 },
};
const Right2 = {
  closed: { x: 150, y: 50, opacity: 0, rotate: "-30deg" },
  open: { x: -350, y: 300, opacity: 1, rotate: "-40deg" },
};

const rightOuterVariants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.5 },
    delay: 0.3,
  },
  closed: { transition: { staggerChildren: 0.07, staggerDirection: -1 } },
};
const rightInnerVariants: Variants = {
  open: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
  closed: {
    x: 200,
    scale: 1.2,
    opacity: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Heading = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { delay: 0.3 } },
};

const Left = {
  closed: { x: 10 },
  open: { x: -10 },
};

const leftOuterVariants = {
  open: { transition: { staggerChildren: 0.3, delayChildren: 0.3 } },
  closed: { transition: { staggerChildren: 0.3, staggerDirection: -1 } },
};

const leftInnerVariants: Variants = {
  open: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
  closed: {
    x: -200,
    scale: 1.2,
    opacity: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};
// const leftInnerVariants = {
//   open: { y: 0, opacity: 1 },
//   closed: { y: -50, opacity: 0 },
// };

const AboutMe = ({ themeColor }: props) => {
  return (
    <>
      <div className="myContainer mx-auto p-20 md:p-10  z-10 dark:text-gray-200 text-gray-800">
        {/* about me */}
        <div className="flex flex-col w-full md:text-lg my-8 md:my-12">
          <AnimatedHeading
            classList="tracking-wide text-base"
            title="ABOUT ME"
          />
          <div className="flex w-full flex-col-reverse md:flex-row justify-between text-base mt-4">
            <div className="w-full md:w-3/5 lg:w-2/5 flex flex-col space-y-4  mt-4 md:mt-0">
              <h1 className="text-2xl lg:text-3xl mb-4" style={roboto.style}>
                My <span className="font-bold ml-1">Experience</span>
              </h1>
              <article>
                <motion.div
                  variants={leftInnerVariants}
                  className="flex flex-col space-y-2"
                >
                  <p className="dark:text-gray-300 text-gray-700">
                    Hi! My name is Gaurav. I am an artist 🎨, an avid film
                    watcher 🎞️, a traveler✈️, a problem-solver✔️, and a human
                    being who cares deeply about bringing more empathy into the
                    workplace and creating a lasting, meaningful impact on
                    people&apos;s experiences through good design.
                  </p>
                </motion.div>
                <motion.div
                  variants={leftInnerVariants}
                  className="flex flex-col space-y-2"
                >
                  <p className="dark:text-gray-300 text-gray-700 pt-2">
                    I am a user experience designer, meaning I design
                    innovative, data-driven, and impactful solutions that work!
                    Using the right mix of UX tools, I help drive smart business
                    decisions through goal alignment and problem-framing before
                    delivering powerful, value-driven design solutions that
                    facilitate a more enjoyable digital experience for all
                    users.
                  </p>
                </motion.div>
              </article>
            </div>
            <div className="w-full md:w-2/5 flex justify-center items-center">
              <Image
                src={myphoto}
                alt="Gaurav Sharma"
                sizes="80vw"
                objectFit="fill"
              />
            </div>
          </div>
        </div>

        {/* skillset */}
        <div className="flex flex-col md:flex-row w-full justify-center items-center md:justify-between">
          {/* lottie */}
          <motion.div
            variants={Left}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="flex justify-center items-center w-full md:w-2/5"
          >
            <Lottie animationData={techLottie} loop={true} />
          </motion.div>

          {/* skills */}
          <motion.div
            initial="closed"
            whileInView="open"
            viewport={{ once: false, amount: 0.1 }}
            variants={rightOuterVariants}
            className="flex flex-col mt-10 w-full md:w-3/5 lg:w-2/5"
          >
            <motion.div variants={Heading}>
              <AnimatedHeading classList="tracking-wide" title="TOOLS & TECH" />
              <h1 className="text-2xl lg:text-3xl my-4" style={ubuntu.style}>
                My <span className="font-bold ml-2">SkillSet</span>
              </h1>
            </motion.div>

            {/* design skills */}
            <div className="flex flex-col w-full">
              <h2
                className=" flex items-center"
                style={(poppins.style, { color: themeColor })}
              >
                <FiPackage />
                <span className="ms-4 text-lg md:text-xl font-semibold">
                  Design
                </span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 md:gap-y-4 gap-x-4 w-full px-auto md:px-0 mt-4">
                {skillSet.design.map((item, index) => {
                  return (
                    <motion.div
                      variants={rightInnerVariants}
                      key={index}
                      className="flex px-2 py-1 border rounded shadow-md shadow-slate-500 bg-[#F0EDE2] dark:bg-[#242424] items-center justify-center h-14"
                    >
                      <p
                        className="text-center text-sm md:text-base leading-tight"
                        style={roboto.style}
                      >
                        {item}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* tools */}
            <div className="flex flex-col w-full mt-8">
              <h2
                className="text-lg md:text-xl font-semibold flex items-center"
                style={(poppins.style, { color: themeColor })}
              >
                <AiFillSetting />
                <span className="ms-4">Tools</span>
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-y-2 md:gap-y-3 gap-x-4  w-full px-auto md:px-0 mt-4">
                {skillSet.tools.map((item, index) => {
                  return (
                    <motion.div
                      variants={rightInnerVariants}
                      key={index}
                      className="flex flex-col md:flex-row items-center"
                    >
                      <div className="flex items-center w-[40px] shrink-0">
                        <Image
                          src={item.icon}
                          alt={item.tool}
                          width={40}
                          height={40}
                        />
                      </div>
                      <div
                        className="ms-0 md:ms-5 text-sm md:text-base text-center md:text-left"
                        style={roboto.style}
                      >
                        {item.tool}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* background */}
      <div className="absolute w-full h-full top-0 left-0  -z-10">
        {/* <Background
          option={BackgroundOption.pattern}
          className="opacity-20 dark:opacity-70"
        /> */}
        <div className="absolute w-full h-full inset-0 bg-gradient-to-b z-10 dark:from-[#1B2735] from-[#FBFBFB] to-transparent"></div>
      </div>
      <div className="w-full overflow-hidden">
        <motion.div
          variants={Right}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[30%] -right-32 lg:right-32 w-80 lg:w-[40%] h-12 lg:h-20 rounded-full dark:bg-gradient-to-l dark:to-[#ff1b6b] dark:from-[#45caff] dark:blur-[80px] bg-gradient-to-t from-pink-200 to-indigo-200 blur-[40px]"
        ></motion.div>
        <motion.div
          variants={Right2}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[45%] lg:top-[30%] -right-32  lg:right-32 w-80 h-16 rounded-xl bg-gradient-to-b dark:from-blue-500 dark:to-blue-500 dark:blur-[80px]  from-cyan-200 to-blue-200 blur-[40px]"
        ></motion.div>
      </div>
    </>
  );
};

export default AboutMe;
