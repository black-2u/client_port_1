import { Variants, motion } from "framer-motion";
import Lottie from "lottie-react";
import { FiPackage } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai";

import AnimatedHeading from "../others/AnimatedHeading";
import { Background, BackgroundOption } from "../others/Background";
import { comicNeue, poppins, roboto, ubuntu } from "@/app/utils/Fonts";
import techLottie from "@/public/assets/lottie/tech2.json";
import { skillSet } from "@/app/utils/placeholder";
import Image from "next/image";

interface props {
  themeColor: string;
}
const Tech = ({ themeColor }: props) => {
  return (
    <>
      <div className="myContainer py-[4rem] dark:text-gray-300 text-gray-800">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-center">
          <motion.div
            variants={Left}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="flex items-center"
          >
            <Lottie animationData={techLottie} loop={true} />
          </motion.div>
          <motion.div
            initial="closed"
            whileInView="open"
            viewport={{ once: false, amount: 0.1 }}
            variants={rightOuterVariants}
            className="flex flex-col mt-10 lg:mt-0 w-full lg:w-2/5"
          >
            <motion.div variants={Heading}>
              <AnimatedHeading
                classList="tracking-wide text-base md:text-lg"
                title="TOOLS & TECH"
              />
              <h1 className="text-xl lg:text-3xl my-4" style={ubuntu.style}>
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 md:gap-y-4 gap-x-8 lg:gap-x-12 w-full px-auto md:px-0 mt-4">
                {skillSet.design.map((item, index) => {
                  return (
                    <motion.div
                      variants={rightInnerVariants}
                      key={index}
                      className="flex px-2 py-1 border rounded shadow-md shadow-slate-500 bg-[#F0EDE2] dark:bg-[#242424] items-center justify-center"
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
              <div className="grid grid-cols-2 md:grid-cols-3  gap-y-2 md:gap-y-4 gap-x-8 lg:gap-x-12 w-full px-auto md:px-0 mt-4">
                {skillSet.tools.map((item, index) => {
                  return (
                    <motion.div
                      variants={rightInnerVariants}
                      key={index}
                      className="flex flex-col md:flex-row items-center"
                    >
                      <div className="flex items-center">
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
      <div className="absolute w-full h-full top-0 right-0  -z-10">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-b z-10 dark:from-[#00001180] from-white to-transparent"></div>
        <Background
          option={BackgroundOption.pattern}
          className="opacity-25 dark:opacity-70"
        />
      </div>
    </>
  );
};

export default Tech;

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
