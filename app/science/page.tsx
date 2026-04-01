import Link from "next/link";
import { scienceProjects } from "@/lib/science";

export default function SciencePage() {
  return (
    <div className="px-8 py-16 max-w-4xl mx-auto">
      <h2 className="text-xs tracking-widest uppercase text-[var(--muted)] mb-12">Science</h2>

      <div className="flex flex-col divide-y divide-[var(--border)]">
        {scienceProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/science/${project.slug}`}
            className="py-8 group flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 hover:text-[var(--terracotta)] transition-colors"
          >
            <div>
              <p className="text-lg">{project.title}</p>
              <p className="text-sm text-[var(--muted)] mt-2 max-w-xl">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-widest uppercase border border-[var(--border)] px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-sm text-[var(--muted)] shrink-0">{project.year}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
