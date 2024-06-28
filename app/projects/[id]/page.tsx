import DevFlag from "@/app/components/others/DevFlag";
import AnimatedHeading from "@/app/components/others/AnimatedHeading";
import { Ubuntu } from "next/font/google";
import Details from "../components/Details";
import Bg from "../components/Bg";
import { Metadata, ResolvingMetadata } from "next";
import { ProjectType } from "@/app/utils/models";
import { projects } from "@/app/utils/placeholder";
// import { ServerData } from "@/app/utils/ServerData";
// import { webProjectModel } from "@/app/utils/models";

const ubuntu = Ubuntu({
  display: "swap",
  weight: ["400", "700"],
  subsets: ["latin"],
});

// async function fetchDetails(slug: string) {

//     if(slug.includes('object') || slug.includes("Object")) return;

//     const data = new ServerData({ path: 'getWeb' });

//     const res = await data.get({ body: { slug } });

//     if (!res.ok) {
//         throw new Error(`Failed to fetch web project : ${slug}`)
//     }

//     return await res.json();
// }

export default function page({ id }: { id: number }) {
  console.log("id", id);
  console.log(projects[id - 1]);

  const devFlag: boolean =
    process.env.NEXT_PUBLIC_DEV_FLAG == "yes" ? true : false;
  // const Data: webProjectModel = await fetchDetails(params.slug);
  const Data: ProjectType = projects[id]; // id or slug

  return (
    <>
      <DevFlag />
      <main className="relative min-h-screen">
        <section className="myContainer pt-[4rem] pb-[2rem] dark:text-gray-300 text-gray-800">
          <AnimatedHeading classList="mt-8 uppercase" title="Project" />
          <h1
            style={ubuntu.style}
            className="font-bold lg:text-5xl text-4xl capitalize"
          >
            {Data.title}
          </h1>
          <Details Data={Data} />
        </section>
        <Bg />
      </main>
    </>
  );
}
