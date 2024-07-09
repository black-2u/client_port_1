"use client";

import { CSSProperties, useState, useEffect } from "react";
import { Variants, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/legacy/image";
import Link from "next/link";
import AnimatedHeading from "./AnimatedHeading";
import cardStyle from "@/app/css/WebCard2.module.css";
import { useAppTheme } from "../theme/AppTheme";
import {
  monsterRat,
  poppins,
  roboto,
  robotoMono,
  ubuntu,
} from "@/app/utils/Fonts";
import { ProjectType } from "@/app/utils/models";
import { clsx } from "clsx";
import { cn } from "@/app/utils/utils";

const outerVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2, delay: 0.4 },
  },
  closed: { transition: { staggerChildren: 0.07, staggerDirection: -1 } },
};
const innerVariants: Variants = {
  open: { y: 0, opacity: 1, transition: { type: "linear", stiffness: 300 } },
  closed: { y: 50, opacity: 0, transition: { type: "linear", stiffness: 300 } },
};

const WebProjectCard = ({ data }: { data: ProjectType }) => {
  const { themeColor } = useAppTheme();
  const [webCardCss, setWebCardCss] = useState<string>();
  const [shadow, setShadow] = useState<string>();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    resolvedTheme === "dark"
      ? setWebCardCss(cardStyle.darkWebCard2)
      : setWebCardCss(cardStyle.lightWebCard2);
    resolvedTheme === "dark"
      ? setShadow("10px 10px 5px #060911, -10px -10px 5px #1e293b80")
      : setShadow("10px 10px 10px #dddee0, -12px -12px 10px #ffffff");
  }, [resolvedTheme]);

  return (
    <Link
      href={`projects/${data.id}`}
      scroll={false}
      className="relative w-full flex"
    >
      <motion.section
        className="relative w-full group rounded-2xl flex flex-col justify-stretch"
        whileTap={{ scale: 0.9 }}
        style={{ boxShadow: shadow }}
      >
        {/* project thumbnail */}
        <div className="-translate-x-6 -translate-y-6 xl:-translate-x-7 xl:-translate-y-6 absolute top-0 z-20">
          <Image
            src={data.thumbnail}
            width={650}
            height={400}
            alt={`${data.title}-cover pic`}
            className="rounded-lg object-fill overflow-hidden hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 hover:scale-110 duration-300 transform"
            placeholder="blur"
            blurDataURL="/assets/image/imgPlaceholder.jpg"
          />
        </div>

        {/* project summary */}
        <div
          className={clsx(webCardCss, "grow")}
          style={{ "--stroke-color": themeColor } as CSSProperties}
        >
          {/* take equal size for top space */}
          <div className="opacity-0">
            <Image
              src={data.thumbnail}
              width={650}
              height={380}
              alt={`${data.title}-cover pic`}
              hidden
              className="rounded-lg overflow-hidden "
            />
          </div>
          <div className="z-10 grow flex flex-col justify-stretch">
            <p
              className={cn(
                "flex absolute -rotate-90 top-16 font-bold uppercase text-sm text-slate-500",
                data.role === "UX Designer" ? "-right-8" : "-right-11"
              )}
              style={ubuntu.style}
            >
              {data.role}
            </p>
            <motion.div
              initial="closed"
              whileInView="open"
              viewport={{ once: false, amount: 0.3 }}
              variants={outerVariants}
              className="px-4 py-4 grow flex flex-col justify-between"
            >
              <div>
                <motion.div variants={innerVariants} className="">
                  <p
                    // style={robotoMono.style}
                    className={`-translate-y-4 xl:translate-y-0 mb-0 xl:mb-2 px-2 py-1 rounded-full text-xs font-semibold text-center text-white w-fit ${
                      data.status == "completed" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {data.status}
                  </p>
                  <AnimatedHeading
                    title={data.title}
                    classList="text-lg xl:text-xl capitalize"
                  />
                </motion.div>
                <motion.p
                  variants={innerVariants}
                  className="mt-2 text-sm md:text-base text-slate-700 dark:text-slate-300"
                  // style={roboto.style}
                >
                  {data.overview}
                </motion.p>
              </div>
              <motion.p
                variants={innerVariants}
                style={monsterRat.style}
                className="self-end mt-4 font-semibold text-sm group-hover:text-blue-500 px-4 py-2 rounded-lg w-fit dark:bg-slate-700  dark:text-slate-300 bg-gray-200 text-slate-600"
              >
                Read More
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Link>
  );
};

export default WebProjectCard;
