"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";
import type { ProjectImage } from "@/lib/science";

const sizeClass = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full",
};

export default function ScienceImages({ images }: { images: ProjectImage[] }) {
  const [active, setActive] = useState<ProjectImage | null>(null);

  return (
    <>
      <div className="flex flex-wrap gap-8 mb-12">
        {images.map((img, i) => (
          <figure key={i} className={sizeClass[img.size ?? "sm"]}>
            {img.caption && (
              <figcaption
                className="text-xs text-[var(--muted)] hover:text-turquoise active:text-turquoise transition-colors mb-2 leading-relaxed cursor-pointer"
                onClick={() => setActive(img)}
              >
                {img.caption} →
              </figcaption>
            )}
            <div className={`border border-[var(--border)] ${img.darkBackground ? "bg-black" : ""}`}>
              {img.src.endsWith(".mp4") ? (
                <video autoPlay loop muted playsInline className="w-full block">
                  <source src={img.src} type="video/mp4" />
                </video>
              ) : (
                <img src={img.src} alt={img.caption ?? ""} className="w-full block" loading="eager" />
              )}
            </div>
          </figure>
        ))}
      </div>

      {active && (
        <Lightbox
          src={active.src}
          alt={active.caption ?? ""}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
