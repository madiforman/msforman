import Link from "next/link";

export default function Nav() {
  return (
    <header className="px-8 py-6 flex items-center justify-between border-b border-[var(--border)]">
      <Link
        href="/"
        className="text-sm tracking-widest uppercase hover:text-turquoise transition-colors"
      >
        M. T. Sanchez-Forman
      </Link>
      <nav className="flex gap-8 text-sm tracking-widest uppercase">
        <Link href="/art" className="hover:text-turquoise transition-colors">
          Art
        </Link>
        <Link href="/science" className="hover:text-turquoise transition-colors">
          Science
        </Link>
        <Link href="/about" className="hover:text-turquoise transition-colors">
          About
        </Link>
      </nav>
    </header>
  );
}
