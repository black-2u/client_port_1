"use client";

import AnimatedHeading from "@/app/components/others/AnimatedHeading";
import Overview from "../components/Overview";
import { ProjectType } from "@/app/utils/models";
import { projects } from "@/app/utils/placeholder";
import Summary from "../components/Summary";
import Research from "../components/Research";
import Solution from "../components/Solution";
import Button from "@/app/components/others/Button";
import { AiOutlineRollback } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();

  const project: ProjectType | undefined = projects.find((project) => {
    return project.id === params.id;
  }); // id or slug

  return (
    <>
      {project && (
        <main className="relative min-h-screen">
          <section className="myContainer pt-[4rem] pb-[2rem] dark:text-gray-300 text-gray-800">
            <AnimatedHeading classList="mt-8 uppercase" title="Project" />

            <Overview project={project} />
            {/* summary */}
            <Summary summary={project.summary} />
            {/* research */}
            <Research researches={project.research} />
            {/* solution */}
            <Solution solution={project.solution} />

            <div className="mt-8 mx-auto">
              <Button onClick={() => router.back()}>
                <div className="text-xl flex items-center gap-4">
                  <AiOutlineRollback />
                  <span className="font-bold">Back</span>
                </div>
              </Button>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
