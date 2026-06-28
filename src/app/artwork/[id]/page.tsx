import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtworkView } from "@/components/ArtworkView";
import { roomByKey, relatedWorks, workById, works } from "@/lib/data";

export function generateStaticParams() {
  return works.map((w) => ({ id: w.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const work = workById(id);
  if (!work) return {};
  return {
    title: `${work.title} (${work.year})`,
    description: work.poetic,
    openGraph: work.img
      ? { images: [{ url: `/art/${work.img}` }] }
      : undefined,
  };
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = workById(id);
  if (!work) notFound();

  const room = roomByKey(work.room);
  const roomName = room?.name ?? "The Gallery";
  const roomHref = `/gallery?room=${work.room}`;
  const related = relatedWorks(work, 3);

  return (
    <ArtworkView
      work={work}
      related={related}
      roomName={roomName}
      roomHref={roomHref}
    />
  );
}
