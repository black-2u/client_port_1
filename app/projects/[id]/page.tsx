"use client";

import AnimatedHeading from "@/app/components/others/AnimatedHeading";
import { Ubuntu } from "next/font/google";
import Details from "../components/Details";
import Bg from "../components/Bg";
import { ProjectType } from "@/app/utils/models";
import { projects } from "@/app/utils/placeholder";

import { useParams } from "next/navigation";

const ubuntu = Ubuntu({
  display: "swap",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Page({ params }: { params: { id: string } }) {
  const path = useParams();
  console.log("path", path.id);
  console.log("param", params);

  console.log(
    projects.find((project) => {
      console.log("prj", project.id);
      console.log("path", path.id);

      return project.id == path.id;
    })
  );

  const devFlag: boolean =
    process.env.NEXT_PUBLIC_DEV_FLAG == "yes" ? true : false;
  // const Data: webProjectModel = await fetchDetails(params.slug);
  const Data: ProjectType | undefined = projects.find((project) => {
    return project.id === params.id;
  }); // id or slug

  return (
    <>
      {/* <DevFlag /> */}
      <main className="relative min-h-screen">
        {Data && (
          <section className="myContainer pt-[4rem] pb-[2rem] dark:text-gray-300 text-gray-800">
            <AnimatedHeading classList="mt-8 uppercase" title="Project" />
            <h1
              style={ubuntu.style}
              className="font-bold lg:text-3xl text-xl mt-4 capitalize"
            >
              {Data.title}
            </h1>
            <Details Data={Data} />
          </section>
        )}
        <Bg />
      </main>
    </>
  );
}
