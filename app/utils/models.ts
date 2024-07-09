export type ProjectType = {
  id: string;
  title: string;
  overview: string;
  status: string;
  role: string;
  tools: string[];
  summary: SummaryType;
  research: ResearchType[];
  solution: SolutionType;
  icons: string[];
  slug: string;
  url: string;
  thumbnail: string;
};

export type SummaryType = {
  content: { title: string; description: string[] }[];
  image: string;
};

export type ResearchType = {
  title: string;
  subtitle: string[];
  description: string[][];
  images: string[];
};

export type SolutionType = {
  title: string;
  description: string[];
  images: string[];
};
