export type ArtPiece = {
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions?: string;
  description: string;
  image: string; // path under /public
};

export const artPieces: ArtPiece[] = [
  {
    slug: "untitled-001",
    title: "Untitled 001",
    year: 2024,
    medium: "Mixed media",
    dimensions: "24 × 36 in",
    description: "Placeholder artwork. Replace with your real piece.",
    image: "/art/placeholder.jpg",
  },
];
