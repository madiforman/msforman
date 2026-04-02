import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-8 text-center">
      <p className="text-xs tracking-widest uppercase text-[var(--muted)] mb-6">
        Art &amp; Data Science
      </p>
      <h1 className="text-4xl md:text-6xl mb-2 tracking-tight">Madison </h1>
      <h1 className="text-4xl md:text-6xl mb-16 tracking-tight">Sanchez-Forman</h1>

      <div className="flex flex-col sm:flex-row gap-px bg-[var(--border)] border border-[var(--border)] w-full max-w-lg">
        <Link
          href="/art"
          className="flex-1 bg-white py-8 text-sm tracking-widest uppercase hover:text-turquoise active:text-turquoise transition-colors"
        >
          Art
        </Link>
        <Link
          href="/science"
          className="flex-1 bg-white py-8 text-sm tracking-widest uppercase hover:text-turquoise active:text-turquoise transition-colors"
        >
          Science
        </Link>
      </div>
    </div>
  );
}
