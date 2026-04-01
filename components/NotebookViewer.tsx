"use client";

import { useEffect, useState } from "react";

type Output = {
  output_type: string;
  text?: string[];
  data?: { "text/plain"?: string[]; "text/html"?: string[] };
};

type Cell = {
  cell_type: "markdown" | "code" | "raw";
  source: string[];
  outputs?: Output[];
};

type Notebook = {
  cells: Cell[];
};

export default function NotebookViewer({ src }: { src: string }) {
  const [notebook, setNotebook] = useState<Notebook | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(src)
      .then((r) => r.json())
      .then(setNotebook)
      .catch(() => setError(true));
  }, [src]);

  if (error) return <p className="text-sm text-[var(--muted)]">Could not load notebook.</p>;
  if (!notebook) return <p className="text-sm text-[var(--muted)]">Loading notebook…</p>;

  return (
    <div className="font-mono text-sm space-y-6">
      {notebook.cells.map((cell, i) => {
        const source = cell.source.join("");
        if (cell.cell_type === "markdown") {
          return (
            <div
              key={i}
              className="prose prose-sm max-w-none text-[var(--foreground)] font-sans whitespace-pre-wrap leading-relaxed"
            >
              {source}
            </div>
          );
        }
        if (cell.cell_type === "code") {
          const outputs = cell.outputs ?? [];
          return (
            <div key={i} className="space-y-1">
              <div className="bg-[#f5f5f5] border border-[var(--border)] p-4 rounded-none overflow-x-auto">
                <pre className="text-xs leading-relaxed text-[var(--foreground)]">{source}</pre>
              </div>
              {outputs.map((out, j) => {
                const text =
                  out.text?.join("") ??
                  out.data?.["text/plain"]?.join("") ??
                  "";
                if (!text) return null;
                return (
                  <div key={j} className="bg-white border border-[var(--border)] border-l-[var(--turquoise)] border-l-2 p-4 overflow-x-auto">
                    <pre className="text-xs leading-relaxed text-[var(--muted)]">{text}</pre>
                  </div>
                );
              })}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
