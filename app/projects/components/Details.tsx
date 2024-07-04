"use client";

import Button from "@/app/components/others/Button";
import ImgSlider2 from "@/app/components/others/ImgSlider2";
import { useAppTheme } from "@/app/components/theme/AppTheme";
import { poppins, roboto, ubuntu } from "@/app/utils/Fonts";
import { ProjectType } from "@/app/utils/models";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineRollback } from "react-icons/ai";
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

const Details = ({ Data }: { Data: ProjectType }) => {
  const { themeColor } = useAppTheme();
  const router = useRouter();
  const links = [{ url: Data.url, icon: <FaLink />, text: "Live Url" }];

  return (
    <motion.div
      variants={outerVariants}
      viewport={{ once: false, amount: 0.2 }}
      initial="closed"
      animate="open"
      className="flex flex-col"
    >
      <div className="flex flex-col justify-center w-full">
        {/* hl5 description */}
        <motion.article
          variants={textVariants}
          style={poppins.style}
          className="text-base lg:text-lg w-full py-2 mr-4"
          dangerouslySetInnerHTML={{ __html: Data.overview }}
        ></motion.article>
        {/* hl5 ____________*/}
        <div className="w-fit mt-4 flex flex-col lg:flex-row items-center">
          {/* <div className="w-[90%] lg:max-w-[18rem] flex flex-col ml-0 lg:ml-8 mb-8 lg:mb-0 lg:text-xl text-lg justify-center lg:justify-start">
            {links.map((item, idx) => {
              return (
                <motion.div
                  key={`links-${idx}`}
                  variants={linkVariants}
                  className="mt-4 py-2 px-3 md:px-4 rounded-full flex items-center border-2"
                  style={{
                    borderColor: themeColor,
                    boxShadow: `0px 0px 25px ${themeColor}`,
                  }}
                >
                  {item.icon}
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    scroll={false}
                    className="ml-2"
                    style={poppins.style}
                  >
                    {item.text}
                  </Link>
                </motion.div>
              );
            })}
          </div> */}
          {/* used tools */}
          <div className=" mt-4 flex flex-col">
            <motion.div
              variants={languageVariants}
              className="flex items-center"
            >
              <FaGripfire
                className="animate-pulse"
                style={{ color: themeColor }}
              />
              <span className="ml-2 text-lg md:text-xl" style={roboto.style}>
                Frameworks and Tools Used
              </span>
            </motion.div>
            <div className="mt-2 grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 lg:gap-8 w-fit mx-auto">
              {Data["tools"].map((item, index) => {
                return (
                  <motion.div
                    variants={languageVariants}
                    key={index}
                    className="rounded-2xl p-2 w-16 flex items-center flex-col capitalize shadow-2xl dark:bg-slate-800/80 dark:shadow-black bg-slate-100 shadow-slate-400"
                    style={poppins.style}
                  >
                    <Image
                      src={Data.icons[index]}
                      height={40}
                      width={40}
                      alt="tools"
                      //   alt={Data.toolsLogo[index]}
                    />
                    {/* <span className="text-base">{item}</span> */}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* snapshots */}
      <motion.div
        variants={Bottom}
        className="mx-auto flex flex-col mt-8 w-full"
      >
        <div className="mx-auto mb-4 flex items-center text-lg md:text-2xl">
          <FaRegImages className="text-2xl" style={{ color: themeColor }} />
          <h4 className="ml-2" style={ubuntu.style}>
            Some
            <span className="ml-2 font-bold">Screenshots</span>
          </h4>
        </div>
        <ImgSlider2 images={Data.images} fade={true} />
        <div className="mt-8 mx-auto">
          <Button onClick={() => router.back()}>
            <div className="text-2xl flex items-center gap-4">
              <AiOutlineRollback />
              <span style={poppins.style} className="font-bold">
                Back
              </span>
            </div>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Details;
