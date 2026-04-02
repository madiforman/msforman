export default function Footer() {
  return (
    <footer className="px-8 py-6 border-t border-[var(--border)] flex items-center justify-between text-xs tracking-widest uppercase text-[var(--muted)]">
      <span>MSF</span>
      <div className="flex gap-6">
        <a
          href="https://www.linkedin.com/in/madiforman/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-turquoise active:text-turquoise transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/madiforman"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-turquoise active:text-turquoise transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://instagram.com/msanchezforman"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-turquoise active:text-turquoise transition-colors"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
