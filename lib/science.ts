export type ScienceProject = {
  slug: string;
  title: string;
  year: number;
  tags: string[];
  description: string;
  notebook?: string; // filename under /public/notebooks/
  poster?: string;   // path under /public/posters/
  paper?: string;    // external URL
};

export const scienceProjects: ScienceProject[] = [
  {
    slug: "placeholder-project",
    title: "Placeholder Project",
    year: 2024,
    tags: ["microscopy", "image analysis"],
    description:
      "Placeholder science project. Replace with your real work — add a notebook, poster, or paper link.",
    notebook: "placeholder.ipynb",
    poster: undefined,
    paper: undefined,
  },
];
