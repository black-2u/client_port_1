import { SolutionType } from "@/app/utils/models";
import { FaGripfire } from "react-icons/fa";
import { Variants, motion } from "framer-motion";
import { useAppTheme } from "@/app/components/theme/AppTheme";
import Image from "next/image";

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

const Solution = ({ solution }: { solution: SolutionType }) => {
  const { themeColor } = useAppTheme();

  return (
    <div className="flex flex-col mt-8 md:mt-12 space-y-4">
      <div className="w-full flex flex-col space-y-4">
        {/* <h3 className="text-lg md:text-xl font-bold">Solution</h3> */}
        {/* title */}
        <div key={solution.title} className="flex flex-col space-y-2">
          <motion.div variants={languageVariants} className="flex items-center">
            <FaGripfire
              className="animate-pulse"
              style={{ color: themeColor }}
            />
            <span className="ml-2 text-xl md:text-3xl font-semibold">
              {solution.title}
            </span>
          </motion.div>
          {/* description */}
          <ul className="gap-2 ms-6">
            {solution.description.map(
              (desc, idx) =>
                desc !== "" && (
                  <li
                    key={solution.title + "-description-" + idx}
                    className="flex gap-2"
                  >
                    <span>-</span>
                    <span>{desc}</span>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
      {/* images */}
      <div className="w-full flex flex-col justify-center items-center gap-4">
        {solution.images.map((img) => (
          <Image
            key={img}
            src={img}
            alt={img}
            width={900}
            height={900}
            className="rounded-lg hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 duration-300 transform"
          />
        ))}
      </div>
    </div>
  );
};

export default Solution;
