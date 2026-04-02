export type ArtPiece = {
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions?: string;
  description: string;
  image: string; // path under /public
  aspect?: string; // e.g. "5/7", "4/3", "1/1" — defaults to "1/1" if omitted
};

export const artPieces: ArtPiece[] = [
  {
    slug: "gocco-print",
    title: "Untitled",
    year: 2024,
    medium: "Embossment ink on brillo pad",
    dimensions: "5 × 7 in",
    aspect: "5/7",
    description: "Gocco print of photograph, values isolated and binarized via python.",
    image: "/art/IMG_0252.jpeg",
  },
    {
    slug: "miles-guitar",
    title: "Desert Isle",
    year: 2025,
    medium: "Oil pastel on 100% cotton paper",
    dimensions: "3 × 4 in",
    aspect: "4/5",
    description: "Drawing from life",
    image: "/art/IMG_0443.jpeg",
  },
  {
    slug: "inking",
    title: "Untitled",
    year: 2025,
    medium: "Drawing ink + water on 300 gsm paper",
    dimensions: "26 × 20 in",
    aspect: "10/8",
    description: "",
    image: "/art/IMG_2937.jpeg",
  },
    {
    slug: "hairpin",
    title: "Sacred Hairpin",
    year: 2025,
    medium: "Sterling silver (925)",
    dimensions: "?",
    aspect: "8/10",
    description: "",
    image: "/art/IMG_6866.jpeg",
  },
  {
    slug: "oil-study",
    title: "Study",
    year: 2025,
    medium: "Oil paint",
    dimensions: "?",
    aspect: "8/10",
    description: "",
    image: "/art/IMG_5318.jpeg",
  },
  {
    slug: "ladyprint",
    title: "Untitled",
    year: 2023,
    medium: "Print gocco",
    dimensions: "?",
    aspect: "5/5",
    description: "",
    image: "/art/IMG_7792.jpeg",
  }

];

