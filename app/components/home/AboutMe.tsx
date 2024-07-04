import { motion } from "framer-motion";
import AnimatedHeading from "../others/AnimatedHeading";
import { Background, BackgroundOption } from "../others/Background";
import {
  roboto,
  ubuntu,
  monsterRat,
  robotoMono,
  comicNeue,
  poppins,
  inter,
} from "@/app/utils/Fonts";
import { experience } from "@/app/utils/placeholder";
import Image from "next/image";
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

const leftOuterVariants = {
  open: { transition: { staggerChildren: 0.3, delayChildren: 0.3 } },
  closed: { transition: { staggerChildren: 0.3, staggerDirection: -1 } },
};
const leftInnerVariants = {
  open: { y: 0, opacity: 1 },
  closed: { y: -50, opacity: 0 },
};

const AboutMe = ({ themeColor }: props) => {
  return (
    <>
      <div className="myContainer p-10 z-10 dark:text-gray-200 text-gray-800">
        <div className="flex flex-col w-full  md:text-lg my-auto">
          <AnimatedHeading
            classList="tracking-wide text-base md:text-lg"
            title="ABOUT ME"
          />
          <div className="flex w-full flex-col-reverse md:flex-row mt-4">
            <div className="w-full md:w-3/5 flex flex-col space-y-4  mt-4 md:mt-0">
              <h1 className="text-xl lg:text-3xl mb-4" style={ubuntu.style}>
                My <span className="font-bold ml-2">Experience</span>
              </h1>
              <article>
                <p className="dark:text-gray-300 text-gray-700 font-medium">
                  Hi! My name is Gaurav. I am an artist 🎨, an avid film watcher
                  🎞️, a traveler✈️, a problem-solver✔️, and a human being who
                  cares deeply about bringing more empathy into the workplace
                  and creating a lasting, meaningful impact on people&apos;s
                  experiences through good design.
                </p>
                <p className="dark:text-gray-300 text-gray-700 font-medium pt-2">
                  I am a user experience designer, meaning I design innovative,
                  data-driven, and impactful solutions that work! Using the
                  right mix of UX tools, I help drive smart business decisions
                  through goal alignment and problem-framing before delivering
                  powerful, value-driven design solutions that facilitate a more
                  enjoyable digital experience for all users.
                </p>
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
      </div>
      {/* background */}
      <div className="absolute w-full h-full top-0 left-0  -z-10">
        {/* <div className='absolute w-full h-full inset-0 bg-gradient-to-l z-10 dark:from-[#000011] from-[#ffffff] to-transparent'></div> */}
        <Background
          option={BackgroundOption.pattern}
          className="opacity-20 dark:opacity-70"
        />
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
