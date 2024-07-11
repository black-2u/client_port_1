"use client";

import { useAppTheme } from "@/app/components/theme/AppTheme";
import { roboto } from "@/app/utils/Fonts";
import { ProjectType } from "@/app/utils/models";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGripfire, FaLink, FaRegImages } from "react-icons/fa";

const outerVariants = {
  open: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
  closed: { transition: { staggerChildren: 0.7, staggerDirection: -1 } },
};
const textVariants = {
  open: { opacity: 1, transition: { delay: 0.5 } },
  closed: { opacity: 0 },
};
const linkVariants = {
  open: { y: 0, opacity: 1 },
  closed: { y: -100, opacity: 0 },
};
const languageVariants: Variants = {
  open: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300 },
  },
  closed: { scale: 0, opacity: 0 },
};
const Bottom = { open: { opacity: 1 }, closed: { opacity: 0 } };

const Overview = ({ project }: { project: ProjectType }) => {
  const { themeColor } = useAppTheme();

  return (
    <motion.div
      variants={outerVariants}
      viewport={{ once: false, amount: 0.2 }}
      initial="closed"
      animate="open"
      className="flex flex-col space-y-4"
    >
      {/* some introductions about the project*/}
      {/* title */}
      <h1 className="font-bold lg:text-4xl text-2xl mt-4 capitalize">
        {project.title}
      </h1>
      {/* thumbnail */}
      <div className="flex justify-center">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={600}
          height={500}
          className="rounded-lg hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 duration-300 transform"
        />
      </div>
      {/* overview */}
      <div className="flex flex-col space-y-2">
        <motion.div variants={languageVariants} className="flex items-center">
          <FaGripfire className="animate-pulse" style={{ color: themeColor }} />
          <span className="ms-2 text-xl md:text-3xl font-semibold">
            Overview
          </span>
        </motion.div>
        <div className="mt-2 ms-6">{project.overview}</div>
      </div>

      {/* role */}
      <div className="mt-4 flex flex-col">
        <motion.div variants={languageVariants} className="flex items-center">
          <FaGripfire className="animate-pulse" style={{ color: themeColor }} />
          <span className="ml-2 font-semibold">Role</span>
        </motion.div>
        <div className="mt-2 ms-6">{project.role}</div>
      </div>

      {/* status */}
      <div className="mt-4 flex flex-col">
        <motion.div variants={languageVariants} className="flex items-center">
          <FaGripfire className="animate-pulse" style={{ color: themeColor }} />
          <span className="ml-2 font-semibold">Status</span>
        </motion.div>
        <div className="mt-2 ms-6">{project.status}</div>
      </div>

      {/* tools */}
      <div className="mt-4 flex flex-col">
        <motion.div variants={languageVariants} className="flex items-center">
          <FaGripfire className="animate-pulse" style={{ color: themeColor }} />
          <span className="ml-2 font-semibold">Frameworks and Tools Used</span>
        </motion.div>
        <div className="mt-2 ms-6 grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 lg:gap-8 w-fit mx-auto">
          {project["tools"].map((item, index) => {
            return (
              <motion.div
                variants={languageVariants}
                key={index}
                className="rounded-2xl p-2 w-16 flex items-center flex-col capitalize shadow-2xl dark:bg-slate-800/80 dark:shadow-black bg-slate-100 shadow-slate-400"
              >
                <Image
                  src={project.icons[index]}
                  height={25}
                  width={25}
                  alt="tools"
                  className="rounded-lg hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 duration-300 transform"
                  //   alt={project.toolsLogo[index]}
                />
                {/* <span className="text-base">{item}</span> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Overview;
