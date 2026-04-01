"use client";

import dynamic from "next/dynamic";

const NotebookViewer = dynamic(() => import("@/components/NotebookViewer"), { ssr: false });

export default function NotebookSection({ src }: { src: string }) {
  return <NotebookViewer src={src} />;
}
