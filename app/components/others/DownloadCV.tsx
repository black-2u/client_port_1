import Link from "next/link";
import { motion } from "framer-motion";
import { IoNewspaperOutline } from "react-icons/io5";
import { poppins } from "@/app/utils/Fonts";

const DownloadCV = () => {
  return (
    <Link
      href="/assets/doc/Resume_Gaurav_Sharma.pdf"
      scroll={false}
      target="_blank"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="rounded-full w-full flex overflow-hidden p-1 animate-shift"
        style={{
          background:
            "linear-gradient(45deg, #f06, #f79, #06f, #79f, #0ff, #9f7)",
          backgroundSize: "300%, 300%",
        }}
      >
        <div className="px-10 py-2 rounded-full bg-gray-200 dark:bg-slate-800 flex items-center gap-2">
          <IoNewspaperOutline className="text-2xl" />
          <span
            style={poppins.style}
            className="font-semibold text-slate-700 dark:text-slate-300"
          >
            Download Resume
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

export default DownloadCV;
