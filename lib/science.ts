export type Section = {
  title: string;
  body: string;
  image?: string;    // optional image/video for this section
  notebook?: string; // optional notebook for this section
};

export type ProjectImage = {
  src: string;
  caption?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  darkBackground?: boolean; // set to true for images that need a black background
};

export type ScienceProject = {
  slug: string;
  title: string;
  year: number;
  tags: string[];
  summary: string;     // short text shown on the science listing page
  description: string; // full text shown on the individual project page
  image?: string;        // single image/video path
  imageCaption?: string;
  imageSize?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  imageDarkBackground?: boolean;
  images?: ProjectImage[]; // multiple images — renders as a row
  notebook?: string;   // filename under /public/notebooks/
  poster?: string;     // path under /public/posters/
  paper?: string;      // external URL
  sections?: Section[];
};

export const scienceProjects: ScienceProject[] = [
  {
    slug: "whole-embryo-analysis",
    title: "In toto cell-to-structure analysis during early mammalian organ formation",
    year: 2026,
    tags: ["microscopy", "image analysis"],
    summary: "",
    description:"",
      // "Advances in tissue clearing and light sheet fluorescence microscopy (LSFM) provide an opportunity to obtain single-cell measurements in large 3D tissue environments. These methods are required for the in toto, whole embryo study of mammalian embryogenesis beyond gastrulation. Here, we combine tissue clearing and high-resolution LSFM on mouse embryos from embryonic day (E)9.0 to capture single-cell and structure features from the same individual as organ formation begins. Because our process is section-free, we obtain near lossless recovery of the spatial niche and its constituent cells.",
    images: [
      // { src: "/science/300ppi/the_cohort_1.png", 
      //   darkBackground: true, 
      //   caption: "The cohort: 11 individuals, 17T of image data.",
      //   size: "xl"},
      { src: "/science/nuclear_masks_rendering.mp4", 
        darkBackground: false,
        caption: "3D rendering of nuclear masks from one individual, segmented by finetuned CellPose-SAM.",
        size: "sm"}
    ],
    // image: "/science/nuclear_masks_rendering.mp4",
    // imageCaption: "3D rendering of nuclear masks from one individual, segmented by finetuned CellPose-SAM.",
    // imageSize: "sm",
    poster: undefined,
    paper: undefined,
    // sections: [
    //   {
    //     title: "Background",
    //     body: "Add your background text here.",
    //   },
    //   {
    //     title: "Methods",
    //     body: "Describe your methods here.",
    //   },
    //   {
    //     title: "Results",
    //     body: "Describe your results here.",
    //   },
    // ],
  },
  {
    slug: "CellCycleNet",
    title: "Predicting cell cycle stage from 3D single-cell nuclear-stained images",
    year: 2025,
    tags: ["deep learning", "cell cycle", "microscopy", "CNN"],
    summary: "Training a convolutional neural net to predict the stage in the cell cycle of a single nucleus from a nuclear stained image, achieving an AUROC of 0.94–0.95.",
    description: "The cell cycle governs the proliferation of all eukaryotic cells. Profiling cell cycle dynamics is therefore central to basic and biomedical research. However, current approaches to cell cycle profiling involve complex interventions that may confound experimental interpretation. We developed CellCycleNet, a machine learning (ML) workflow, to simplify cell cycle staging from fluorescent microscopy data with minimal experimenter intervention and cost. CellCycleNet accurately predicts cell cycle phase using only a fluorescent nuclear stain (DAPI) in fixed interphase cells. Using the Fucci2a cell cycle reporter system as ground truth, we collected two benchmarking image datasets and trained 2D and 3D ML models—of support vector machine and deep neural network architecture—to classify nuclei in the G1 or S/G2 phases. Our results show that 3D CellCycleNet outperforms support vector machine models on each dataset. When trained on two image datasets simultaneously, CellCycleNet achieves the highest classification accuracy (AUROC of 0.94–0.95). Overall, we found that using 3D features, rather than 2D features alone, significantly improves classification performance for all model architectures. We released our image data, models, and software as a community resource",
    paper: "https://www.life-science-alliance.org/content/8/6/e202403067",
    image: "/science/Dapi Image.png",
    imageCaption: "The data: DAPI-stained nuclei used for model training.",
    imageSize: "lg"
  },
];
