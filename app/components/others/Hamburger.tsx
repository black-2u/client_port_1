"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  FaRegHandPeace,
  FaFileSignature,
  FaHome,
  FaAngleDoubleLeft,
  FaUserCheck,
} from "react-icons/fa";
import { BsGearFill, BsCameraFill, BsCodeSlash } from "react-icons/bs";
import { useState, useEffect, ReactNode, useCallback } from "react";
import { CgMenuRight } from "react-icons/cg";
import { BiMessageDetail } from "react-icons/bi";
import { useAppTheme } from "../theme/AppTheme";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ModeSwitch2 } from "./ModeSwitch";
import { poppins, roboto, robotoMono, ubuntu } from "@/app/utils/Fonts";

interface I_links {
  name: string;
  link: string;
  icon: ReactNode;
}

export default function HamBurger() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>();
  const [navLink, setNavLink] = useState<I_links[]>();

  const { themeColor, isClient } = useAppTheme();
  const { resolvedTheme } = useTheme();

  //   hamburger link setting
  useEffect(() => {
    if (pathName === "/") {
      setNavLink(navLinkHome);
      // } else if (pathName.toLowerCase().includes("blossoms")) {
      //   setNavLink(navLinkBlossoms);
    } else if (pathName.toLowerCase().includes("projects")) {
      setNavLink(navLinkProjects);
    } else {
      setNavLink(navLinkOthers);
    }
  }, [pathName]);

  const handleClick = useCallback((name: string) => {
    setActiveLink(name);
    setIsOpen(false);
  }, []);

  if (isClient) {
    return (
      <>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-0 right-4 w-fit mt-2 z-50 rounded-full cursor-pointer text-2xl p-[9px] dark:bg-blue-300 bg-slate-300 visible md:hidden"
          area-label="sideNavBar"
          title="sideNavbar"
        >
          <CgMenuRight className="dark:text-black text-slate-800" />
        </button>
        {/* hl3 side navbar */}
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className={`z-40 fixed top-0 right-0 min-h-full flex ${
            isOpen ? "w-full" : "max-w-0"
          }`}
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="bg-transparent min-w-full min-h-full"
          ></div>
          <motion.div
            variants={divVariants}
            style={
              resolvedTheme == "dark"
                ? {
                    background: "linear-gradient(to right,#294861,#0e1c26)",
                    boxShadow: "0px 0px 24px #6b7280",
                  }
                : {
                    background: "linear-gradient(#eeffee,#ffffff)",
                    boxShadow: "0px 0px 24px #374151",
                  }
            }
            className="absolute top-0 right-0 bottom-0 w-full md:w-[300px] md:rounded-l-2xl overflow-hidden dark:text-gray-300 text-gray-800 transition-transform duration-300 ease-out"
          >
            {navLink && (
              <section className="w-full min-h-full px-4 flex items-center ">
                <motion.div
                  variants={ulVariants}
                  animate={isOpen ? "open" : "closed"}
                  className="min-w-full flex flex-col h-fit"
                >
                  {/* name */}
                  <motion.h1
                    style={poppins.style}
                    variants={liVariants}
                    className="text-lg md:text-xl lg:text-2xl mb-8 lg:mb-12 text-center"
                  >
                    <span
                      className="font-semibold ml-2"
                      style={{ color: themeColor }}
                    >
                      Gaurav Sharma
                    </span>
                  </motion.h1>
                  {/* navItems */}
                  {navLink.map((curr, index) => {
                    return (
                      <motion.div
                        key={`navLink - ${index}`}
                        className="text-sm md:text-base ml-4 mb-3"
                        variants={liVariants}
                        whileTap={{ scale: 0.88 }}
                        whileHover={{
                          scale: 1.2,
                          originX: 0,
                          color: themeColor,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Link
                          href={curr.link}
                          onClick={() => handleClick(curr.name)}
                          className={`flex items-center ${
                            resolvedTheme === "dark"
                              ? "text-gray-300"
                              : "text-gray-800"
                          }`}
                        >
                          {curr.icon}
                          <span className="ml-3 text-xl">{curr.name}</span>
                          <FaAngleDoubleLeft
                            className={
                              activeLink === curr.name
                                ? "ml-4 text-2xl"
                                : "hidden"
                            }
                            style={{ color: themeColor }}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* theme selector */}
                  <motion.div
                    variants={liVariants}
                    className="mt-8 md:mt-12 flex justify-center items-center w-full"
                    style={roboto.style}
                  >
                    <ModeSwitch2 />
                  </motion.div>
                </motion.div>
              </section>
            )}
          </motion.div>
        </motion.div>
      </>
    );
  } else {
    return (
      <button
        className="fixed top-0 right-4 w-fit mt-2 z-50 rounded-full cursor-pointer text-2xl p-[9px] dark:bg-blue-300 bg-slate-300"
        area-label="sideNavBar"
        title="sideNavbar"
      >
        <CgMenuRight className="dark:text-black text-slate-800" />
      </button>
    );
  }
}

const divVariants = {
  open: {
    height: "100vh",
    x: "0px",
    transition: { timingFunction: "ease", duration: 0.8 },
  },
  closed: {
    height: "100vh",
    x: "500px",
    transition: { delay: 0.8, duration: 0.8 },
  },
};
const ulVariants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};
const liVariants = {
  open: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 160 } },
  closed: { y: -40, opacity: 0 },
};

const navLinkHome: I_links[] = [
  { name: "Intro", link: "#Intro", icon: <FaRegHandPeace /> },
  { name: "About Me", link: "#AboutMe", icon: <BiMessageDetail /> },
  { name: "Skills", link: "#Tech", icon: <BsGearFill /> },
  { name: "Projects", link: "#WebProjects", icon: <BsCodeSlash /> },
  { name: "Contact", link: "#Contact", icon: <FaFileSignature /> },
];
const navLinkProjects: I_links[] = [
  { name: "Home", link: "/", icon: <FaHome /> },
  { name: "Projects", link: "#WebProjects", icon: <BsCodeSlash /> },
];

const navLinkOthers: I_links[] = [
  { name: "Home", link: "/", icon: <FaHome /> },
  { name: "Projects", link: "/projects", icon: <FaUserCheck /> },
];
