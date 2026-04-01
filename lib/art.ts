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
    image: "/art/IMG_0252.jpg",
  },
];
