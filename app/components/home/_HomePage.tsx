"use client";

import { motion } from "framer-motion";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Tech from "./Tech";
import Projects from "./Projects";
import { useAppTheme } from "../theme/AppTheme";
import { useEffect } from "react";

const viewport = {
  once: false,
  amount:
    typeof window !== "undefined" ? (window.innerWidth > 450 ? 0.3 : 0.1) : 0.3,
};

const transition = {
  closed: { staggerChildren: 0.3, staggerDirection: -1 },
  open: { staggerChildren: 0.3, delayChildren: 0.2 },
};

// props: HomeProps
const _HomePage = () => {
  const { themeColor } = useAppTheme();
  console.log("Home-themeColor", themeColor);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* hero section */}
      <Hero />
      {/* about section */}
      <motion.section
        id="AboutMe"
        initial="closed"
        whileInView="open"
        viewport={viewport}
        transition={transition}
        className="relative max-w-[100vw] overflow-hidden dark:bg-gradient-to-t dark:from-[#10151D] dark:to-transparent"
      >
        <AboutMe themeColor={themeColor} />
      </motion.section>
      {/* project section */}
      <motion.section
        id="Tech"
        initial="closed"
        whileInView="open"
        viewport={viewport}
        transition={transition}
        className=" relative dark:bg-gradient-to-b dark:from-[#10151D]"
      >
        <Tech themeColor={themeColor} />
      </motion.section>
      <motion.section
        id="WebProjects"
        initial="closed"
        whileInView="open"
        viewport={viewport}
        transition={transition}
        className="relative overflow-hidden"
      >
        <Projects />
      </motion.section>
    </>
  );
};

export default _HomePage;
