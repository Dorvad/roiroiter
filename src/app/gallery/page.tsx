import type { Metadata } from "next";
import { Suspense } from "react";
import { GalleryBrowser } from "@/components/GalleryBrowser";

export const metadata: Metadata = {
  title: "The Gallery",
  description:
    "Every room — paintings, carvings, drawings, and departed works, side by side.",
};

export default function GalleryPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
      <GalleryBrowser />
    </Suspense>
  );
}
