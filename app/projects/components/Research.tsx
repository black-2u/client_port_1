import { ResearchType } from "@/app/utils/models";
import { FaGripfire } from "react-icons/fa";
import { Variants, motion } from "framer-motion";
import { useAppTheme } from "@/app/components/theme/AppTheme";
import Image from "next/image";
import { cn } from "@/app/utils/utils";

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

const Research = ({ researches }: { researches: ResearchType[] }) => {
  const { themeColor } = useAppTheme();

  return (
    <div className="flex flex-col mt-16 md:mt-24 space-y-4">
      {/* <h3 className="text-lg md:text-xl font-bold"> Researches</h3> */}
      <div className="flex flex-col mt-4 space-y-16 md:space-y-24">
        {researches.map((research, res_idx) => (
          <div key={research.title} className="flex flex-col space-y-4">
            {/* title */}
            <div className={cn("flex", res_idx % 2 === 0 ? "" : "justify-end")}>
              {/* <div className={cn("flex")}> */}
              <motion.div
                variants={languageVariants}
                className="w-full md:w-1/3 flex items-center"
              >
                <FaGripfire
                  className="animate-pulse"
                  style={{ color: themeColor }}
                />
                <h4 className="ml-2 text-xl md:text-3xl inline-block font-semibold">
                  {research.title}
                </h4>
              </motion.div>
            </div>

            {/* research content */}
            {/* <div
              className={cn(
                "flex flex-col space-y-4 md:space-y-0 md:space-x-8 md:flex-row"
              )}
            > */}
            <div
              className={cn(
                "flex flex-col space-y-4 md:space-y-0 md:space-x-8",
                res_idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              <div className="w-full md:w-1/3 flex flex-col space-y-2 shrink-0">
                {research.subtitle.map((sub, idx) => (
                  <>
                    {sub && (
                      <h5 className="font-medium">{research.subtitle}</h5>
                    )}
                    <ul className="gap-2">
                      {research.description[idx].map((desc, idx) => (
                        <li key={research.title + "-description-" + idx}>
                          {/* {research.description[idx].length > 1 ? "-" : ""} */}
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ))}
                {research.images.length > 1 && (
                  <Image
                    key={research.images[0]}
                    src={research.images[0]}
                    alt={"summary"}
                    height={500}
                    width={500}
                    className="rounded-lg hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 duration-300 transform pt-8"
                  />
                )}
              </div>
              <div className="w-full md:w-2/3 flex flex-col justify-center items-center space-y-4 shrink-0">
                {research.images.map(
                  (image, img_idx) =>
                    (img_idx > 0 || !(research.images.length > 1)) && (
                      <Image
                        key={image}
                        src={image}
                        alt={"summary"}
                        height={300}
                        width={600}
                        className="rounded-lg hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 duration-300 transform"
                      />
                    )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
