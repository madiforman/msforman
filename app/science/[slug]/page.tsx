import { scienceProjects } from "@/lib/science";
import { notFound } from "next/navigation";
import NotebookSection from "@/components/NotebookSection";

export function generateStaticParams() {
  return scienceProjects.map((p) => ({ slug: p.slug }));
}

export default async function ScienceProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = scienceProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="px-8 py-16 max-w-4xl mx-auto">
      {/* Header */}
      <p className="text-xs tracking-widest uppercase text-[var(--muted)] mb-8">
        Science / {project.year}
      </p>
      <h1 className="text-3xl mb-4">{project.title}</h1>
      <p className="text-base text-[var(--muted)] mb-4 max-w-2xl leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-12">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs tracking-widest uppercase border border-[var(--border)] px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* video / image */}
      {project.image && (
        <div className="mb-12 border border-[var(--border)] max-w-xs">
          {project.image.endsWith(".mp4") ? (
            <video autoPlay loop muted playsInline className="w-full">
              <source src={project.image} type="video/mp4" />
            </video>
          ) : (
            <img src={project.image} alt={project.title} className="w-full" />
          )}
        </div>
      )}

      {/* Links row */}
      {(project.paper || project.poster) && (
        <div className="flex gap-6 mb-12 text-sm tracking-widest uppercase">
          {project.paper && (
            <a
              href={project.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--terracotta)] hover:underline"
            >
              Paper →
            </a>
          )}
          {project.poster && (
            <a href={project.poster} target="_blank" rel="noopener noreferrer" className="text-[var(--terracotta)] hover:underline">
              Poster →
            </a>
          )}
        </div>
      )}

      {/* Notebook */}
      {project.notebook && (
        <section>
          <p className="text-xs tracking-widest uppercase text-[var(--muted)] mb-6 border-t border-[var(--border)] pt-8">
            Notebook
          </p>
          <NotebookSection src={`/notebooks/${project.notebook}`} />
        </section>
      )}

      {/* Subsections */}
      {project.sections && project.sections.map((section) => (
        <section key={section.title} className="border-t border-[var(--border)] pt-10 mt-10">
          <h2 className="text-xs tracking-widest uppercase text-[var(--muted)] mb-4">{section.title}</h2>
          <p className="text-base leading-relaxed max-w-2xl mb-6">{section.body}</p>
          {section.image && (
            <div className="border border-[var(--border)] max-w-xs mb-6">
              {section.image.endsWith(".mp4") ? (
                <video autoPlay loop muted playsInline className="w-full">
                  <source src={section.image} type="video/mp4" />
                </video>
              ) : (
                <img src={section.image} alt={section.title} className="w-full" />
              )}
            </div>
          )}
          {section.notebook && (
            <NotebookSection src={`/notebooks/${section.notebook}`} />
          )}
        </section>
      ))}
    </div>
  );
}
