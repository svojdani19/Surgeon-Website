import Image from "next/image";
import Container from "./Container";

/**
 * Dark hero with a full-bleed background photo and navy gradient overlay —
 * matches the video heroes on the homepage and services hub.
 */
export default function PhotoHero({
  image,
  imageAlt,
  eyebrow,
  title,
  children,
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-950">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/70 to-brand-900/40"
        aria-hidden="true"
      />
      <Container className="relative py-16 lg:py-24">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        {children}
      </Container>
    </section>
  );
}
