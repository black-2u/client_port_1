"use client";

import { Variants, motion } from "framer-motion";
import Link from "next/link";

import FooterStyle from "@/app/css/Footer.module.css";
import { useAppTheme } from "../theme/AppTheme";
import { useTheme } from "next-themes";
import { roboto, ubuntu } from "@/app/utils/Fonts";
import { useMemo, useRef } from "react";
import ContactForm from "./ContactForm";

import DownloadCV from "./DownloadCV";
import clsx from "clsx";

import { FaEnvelope, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export const socialLinks = [
  {
    url: "mailto:Gaurg046@gmail.com",
    toolTip: "Email",
    color: "#181717",
    icon: <FaEnvelope />,
  },
  {
    url: "https://www.linkedin.com/in/",
    toolTip: "Linkedin",
    color: "#0A66C2",
    icon: <FaLinkedinIn />,
  },
  {
    url: "https://api.whatsapp.com/send?phone=+919953234699",
    toolTip: "Whatsapp",
    color: "#25D366",
    icon: <FaWhatsapp />,
  },
];

const viewport = {
  once: false,
  amount:
    typeof window !== "undefined"
      ? window.innerWidth > 450
        ? 0.5
        : 0.05
      : 0.5,
};
const outerVariants = {
  open: { transition: { staggerChildren: 0.5, delayChildren: 0.3 } },
  closed: { transition: { staggerChildren: 0.5, staggerDirection: -1 } },
};
const smooth: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};
const smooth2: Variants = {
  closed: { opacity: 0, y: -100 },
  open: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, type: "spring", stiffness: 300 },
  },
};

export default function Footer() {
  const { themeColor, isClient } = useAppTheme();
  const { resolvedTheme } = useTheme();
  const modalRef = useRef<HTMLDialogElement>(null);

  const theme = useMemo(() => {
    return isClient && resolvedTheme === "dark"
      ? FooterStyle.dark
      : FooterStyle.light;
  }, [isClient, resolvedTheme]);

  return (
    <>
      <motion.footer
        id="Contact"
        initial="closed"
        whileInView="open"
        viewport={viewport}
        variants={outerVariants}
        className="w-full flex flex-col text-white pt-16"
      >
        <div
          className={clsx(
            "myContainer rounded-tl-full rounded-br-full mb-4 py-4",
            theme
          )}
          // style={roboto.style}
        >
          <motion.div
            variants={smooth}
            className="w-[90%] flex md:justify-between justify-center flex-col gap-4"
          >
            <div className="flex justify-center items-center space-x-8">
              {socialLinks.map((item, idx) => (
                <Link
                  key={item.toolTip}
                  href={item.url}
                  title={item.toolTip}
                  className="text-2xl hover:rounded-full hover:bg-white/10 p-4 transition-all duration-300 ease-in-out"
                  target="_blank"
                >
                  {item.icon}
                </Link>
              ))}
            </div>

            {/* Download CV */}
            <div className="flex justify-center items-center">
              <DownloadCV />
            </div>

            {/* social links */}
            <div className="flex flex-col justify-center items-center gap-2">
              <h2>
                Copyright {new Date().getFullYear()} - All rights reserved.
              </h2>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
}
