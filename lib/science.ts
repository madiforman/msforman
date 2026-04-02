export type Section = {
  title: string;
  body: string;
  image?: string;    // optional image/video for this section
  notebook?: string; // optional notebook for this section
};

export type ScienceProject = {
  slug: string;
  title: string;
  year: number;
  tags: string[];
  description: string;
  image?: string;    // path under /public, e.g. "/science/my-file.mp4"
  notebook?: string; // filename under /public/notebooks/
  poster?: string;   // path under /public/posters/
  paper?: string;    // external URL
  sections?: Section[];
};

export const scienceProjects: ScienceProject[] = [
  {
    slug: "whole-embryo-analysis",
    title: "In toto cell-to-structure analysis during early mammalian organ formation",
    year: 2026,
    tags: ["microscopy", "image analysis"],
    description:
      "Advances in tissue clearing and light sheet fluorescence microscopy (LSFM) provide an opportunity to obtain single-cell measurements in large 3D tissue environments. These methods are required for the in toto, whole embryo study of mammalian embryogenesis beyond gastrulation. Here, we combine tissue clearing and high-resolution LSFM on mouse embryos from embryonic day (E)9.0 to capture single-cell and structure features from the same individual as organ formation begins. Because our process is section-free, we obtain near lossless recovery of the spatial niche and its constituent cells. ",
    image: "/science/nuclear_masks_rendering.mp4",
    // notebook: "placeholder.ipynb",
    poster: undefined,
    paper: undefined,
    sections: [
      {
        title: "Background",
        body: "Add your background text here.",
      },
      {
        title: "Methods",
        body: "Describe your methods here.",
        image: "/science/your-methods-image.png", // optional, delete if not needed
      },
      {
        title: "Results",
        body: "Describe your results here.",
      },
    ],
  },
];
