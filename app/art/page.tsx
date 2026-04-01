import Image from "next/image";
import Link from "next/link";
import { artPieces } from "@/lib/art";

export default function ArtPage() {
  return (
    <div className="px-8 py-16 max-w-6xl mx-auto">
      <h2 className="text-xs tracking-widest uppercase text-[var(--muted)] mb-12">Art</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {artPieces.map((piece) => (
          <Link key={piece.slug} href={`/art/${piece.slug}`} className="group">
            <div className="bg-white mb-4 overflow-hidden relative border border-[var(--border)]" style={{ aspectRatio: piece.aspect ?? "1/1" }}>
              <Image
                src={piece.image}
                alt={piece.title}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <p className="text-sm group-hover:text-turquoise transition-colors">{piece.title}</p>
            <p className="text-xs text-[var(--muted)] mt-1">
              {piece.medium}{piece.dimensions ? `, ${piece.dimensions}` : ""} — {piece.year}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
