import { SummaryType } from "@/app/utils/models";
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

const Summary = ({ summary }: { summary: SummaryType }) => {
  const { themeColor } = useAppTheme();

  return (
    <div className="flex flex-col md:flex-row mt-8 md:mt-12 space-y-4 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/3 flex flex-col space-y-4 shrink-0">
        <div className="flex flex-col space-y-2">
          <motion.div variants={languageVariants} className="flex items-center">
            <FaGripfire
              className="animate-pulse"
              style={{ color: themeColor }}
            />
            <h3 className="ml-2 text-xl md:text-3xl font-bold">Summary</h3>
          </motion.div>
        </div>
        {summary.content.map((item) => (
          <div key={item.title} className="flex flex-col space-y-2">
            <p className="font-semibold">{item.title}</p>

            <ul className="gap-2">
              {item.description.map((desc, idx) => (
                <li key={item.title + "-description-" + idx} className="flex">
                  <span>-</span>
                  <span className="ms-2">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full md:w-2/3 flex justify-center items-center shrink-0">
        <Image
          src={summary.image}
          alt={"summary"}
          width={600}
          height={600}
          className="rounded-lg hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 duration-300 transform"
        />
      </div>
    </div>
  );
};

export default Summary;
