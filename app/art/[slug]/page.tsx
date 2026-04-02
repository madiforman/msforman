import Image from "next/image";
import Link from "next/link";
import { artPieces } from "@/lib/art";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return artPieces.map((p) => ({ slug: p.slug }));
}

export default async function ArtPiecePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = artPieces.find((p) => p.slug === slug);
  if (!piece) notFound();

  return (
    <div className="px-8 py-16 max-w-4xl mx-auto">
      <Link
        href="/art"
        className="text-xs tracking-widest uppercase text-[var(--muted)] hover:text-turquoise active:text-turquoise transition-colors mb-12 inline-block"
      >
        ← Art
      </Link>

      <div className="flex flex-col md:flex-row gap-12 mt-8">
        <div className="flex-1 relative border border-[var(--border)] bg-white" style={{ aspectRatio: piece.aspect ?? "1/1" }}>
          <Image
            src={piece.image}
            alt={piece.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="md:w-56 shrink-0 flex flex-col gap-3">
          <p className="text-lg">{piece.title}</p>
          <p className="text-sm text-[var(--muted)]">{piece.year}</p>
          <p className="text-sm text-[var(--muted)]">{piece.medium}</p>
          {piece.dimensions && (
            <p className="text-sm text-[var(--muted)]">{piece.dimensions}</p>
          )}
          {piece.description && (
            <p className="text-sm leading-relaxed mt-2">{piece.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
