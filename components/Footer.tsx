export default function Footer() {
  return (
    <footer className="px-8 py-6 border-t border-[var(--border)] flex items-center justify-between text-xs tracking-widest uppercase text-[var(--muted)]">
      <span>Madison Theodora Sanchez-Forman</span>
      <div className="flex gap-6">
        <a
          href="https://linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--terracotta)] transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--terracotta)] transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--terracotta)] transition-colors"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
