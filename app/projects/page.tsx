import { Metadata } from "next";
import { ServerData } from "../utils/ServerData";
// import { webProjectModel } from "../utils/models";
import { MainSection } from "./components/Main";
import { projects, star } from "../utils/placeholder";

// async function getWebProjects() {
//     const data = new ServerData({ path: 'getAllWeb' });

//     const res = await data.get();

//     if (!res.ok) {
//         throw new Error("Failed to fetch web project data.");
//     }

//     return [...await res.json()];
// }

export const metadata: Metadata = {
  title: `${star} | Projects`,
  description:
    "Explore a diverse array of projects showcasing our expertise in UI/UX design. Discover how we deliver tailored solutions to elevate your needs and meet your business goals.",
  authors: [
    {
      name: star,
      url: "https://www.linkedin.com/in/gaurav_sharma",
    },
  ],
  creator: "Black W",
  publisher: "Vercel",
  metadataBase: new URL("https://black-2u.vercel.app/"),
  openGraph: {
    type: "website",
    title: `${star} | Projects`,
    description:
      "Explore a diverse array of projects showcasing our expertise in UI/UX design. Discover how we deliver tailored solutions to elevate your needs and meet your business goals.",
  },
};

const page = () => {
  // const webProjects: webProjectModel[] = await getWebProjects();

  return <MainSection data={projects} />;
};

export default page;
