import { artPieces } from "@/lib/art";

export default function ArtPage() {
  return (
    <div className="px-8 py-16 max-w-6xl mx-auto">
      <h2 className="text-xs tracking-widest uppercase text-[var(--muted)] mb-12">Art</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {artPieces.map((piece) => (
          <div key={piece.slug} className="group cursor-default">
            {/* Image placeholder — replace src with real image path */}
            <div className="aspect-square bg-[var(--border)] mb-4 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-xs text-[var(--muted)] tracking-widest uppercase">
                Image
              </div>
            </div>
            <p className="text-sm group-hover:text-[var(--turquoise)] transition-colors">{piece.title}</p>
            <p className="text-xs text-[var(--muted)] mt-1">
              {piece.medium}{piece.dimensions ? `, ${piece.dimensions}` : ""} — {piece.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
