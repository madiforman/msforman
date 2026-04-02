export default function AboutPage() {
  return (
    <div className="px-8 py-16 max-w-2xl mx-auto">
      <h2 className="text-xs tracking-widest uppercase text-[var(--muted)] mb-12">About</h2>

      <div className="space-y-6 text-base leading-relaxed">
        <p>
          I am an artist and data scientist working at the intersection of microscopy and visual inquiry.
          I seek to explore ways to describe form, whether geometrically or via light and shadow.
        </p>
        <p>
          {/* Replace with your real bio */}
          Placeholder bio. Describe your background, research focus, artistic practice, and what
          connects the two for you.
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-3 text-sm tracking-widest uppercase">
        <a
          href="https://linkedin.com/in/madiforman/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--turquoise)] transition-colors"
        >
          LinkedIn →
        </a>
        <a
          href="https://github.com/madiforman"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--turquoise)] transition-colors"
        >
          GitHub →
        </a>
        <a
          href="https://instagram.com/msanchezforman"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--turquoise)] transition-colors"
        >
          Instagram →
        </a>
      </div>
    </div>
  );
}
