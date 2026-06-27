import Link from "next/link";
import { Container } from "@/components/Page";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex min-h-[80svh] flex-col items-center justify-center text-center">
      <div className="label label-gold">A locked door</div>
      <h1 className="mt-6 font-display text-6xl text-bone sm:text-8xl">
        This room is dark
      </h1>
      <p className="prose-serif mt-6 max-w-md text-lg">
        Whatever you were looking for has been moved, sold, or was only ever a
        dream. The rest of the cabinet is still open.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/" variant="solid">
          Return to the entrance
        </ButtonLink>
        <ButtonLink href="/gallery" variant="ghost">
          Enter the gallery
        </ButtonLink>
      </div>
      <Link
        href="/index-of-faces"
        className="mt-10 label text-bone-muted transition-colors hover:text-gold"
      >
        Or wander the Index of Faces
      </Link>
    </Container>
  );
}
