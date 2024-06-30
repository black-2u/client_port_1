import { Url } from "url";

export type ProjectType = {
  id: string;
  title: string;
  overview: string;
  status: string;
  role: string;
  tools: string[];
  icons: string[];
  slug: string;
  url: string;
  thumbnail: string;
  images: string[];
};

// export type webProjectModel = {
//   _id: string;
//   name: string;
//   type: string;
//   role: string;
//   intro: string;
//   liveUrl: string;
//   gitRepo: string;
//   slug: string;
//   description: string;
//   img: string[];
//   tools: string[];
//   toolsLogo: string[];
//   __v: number;
//   status: string;
//   cover: string;
// };

// export type flutterProjectModel = {
//   _id: string;
//   __v: number;
//   name: string;
//   intro: string;
//   gitRepo: string;
//   slug: string;
//   description: string;
//   release: string;
//   cover: string;
//   img: string[];
//   status: string;
//   badge: string[];
//   libraries: string[];
// };

// export type HomeProps = {
//   flutterProjects: flutterProjectModel[];
//   webProjects: webProjectModel[];
// };
