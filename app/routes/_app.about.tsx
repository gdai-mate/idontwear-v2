import type { MetaFunction } from "@remix-run/node";
import { AnimateIn } from "~/components/AnimateIn";

export const meta: MetaFunction = () => [
  { title: "About | idontwear" },
  {
    name: "description",
    content:
      "We make clothes for people who wear them. Not for hangers, not for Instagram. For Monday mornings and Friday nights.",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero band */}
      <section className="relative pt-24">
        <div className="h-[50vh] w-full overflow-hidden bg-idw-graphite md:h-[60vh]">
          <img
            src="/images/editorial-overcoat-field.jpeg"
            alt="Overcoat in field"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>

      {/* Main copy */}
      <section className="px-gutter py-section">
        <div className="mx-auto max-w-2xl">
          <AnimateIn>
            <h1 className="font-serif text-display mb-12 text-balance">
              Clothes for people
              <br />
              who wear them.
            </h1>
          </AnimateIn>

          <AnimateIn delay={100}>
            <div className="space-y-6 text-sm leading-[1.8] opacity-70">
              <p>
                We started idontwear because we were tired of clothes that tried
                to be something. Clothes that wanted to tell you who you are.
                Clothes that came with a manifesto and a mood board and a
                carefully selected Spotify playlist.
              </p>
              <p>
                We just wanted to make things you&apos;d actually wear. Things
                that fit properly, felt good, and got out of the way. Things that
                became better the more you lived in them.
              </p>
              <p>
                Every piece we make starts with a functional silhouette. Workwear,
                outdoorswear, tailoring. Shapes that were designed for doing
                things, not just looking like you might. We pull techniques and
                context from different cultures around the world, because good
                ideas don&apos;t respect borders.
              </p>
              <p>
                The result is clothes that don&apos;t need a story. They
                don&apos;t need to be explained. You put them on and they feel
                right. That&apos;s it.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Editorial moment */}
      <section className="px-gutter pb-section">
        <div className="mx-auto max-w-content">
          <AnimateIn>
            <div className="mx-auto max-w-3xl overflow-hidden">
              <img
                src="/images/editorial-couple-tweed.jpeg"
                alt="Tweed and houndstooth"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Quote band */}
      <section className="bg-idw-black px-gutter py-section text-idw-white">
        <AnimateIn className="mx-auto max-w-content text-center">
          <blockquote className="font-serif text-heading italic text-balance">
            &ldquo;The most beautiful aspect of clothing is the person wearing
            them.&rdquo;
          </blockquote>
        </AnimateIn>
      </section>

      {/* Process */}
      <section className="px-gutter py-section">
        <div className="mx-auto max-w-content">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
            <AnimateIn className="order-2 md:order-1">
              <p className="text-subheading mb-4 uppercase tracking-widest opacity-40">
                Process
              </p>
              <h2 className="font-serif text-heading mb-6">
                Built to become yours.
              </h2>
              <div className="space-y-4 text-sm leading-[1.8] opacity-70">
                <p>
                  We work with natural materials because they age honestly. Waxed
                  cotton develops character. Raw denim fades to match your body.
                  Linen wrinkles because it&apos;s supposed to. These aren&apos;t
                  flaws. They&apos;re features.
                </p>
                <p>
                  Every seam, every rivet, every button is there because it needs
                  to be. Nothing decorative. Nothing for show. Just the right
                  materials put together the right way.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn className="order-1 md:order-2" delay={150}>
              <div className="aspect-square w-full overflow-hidden bg-idw-sand">
                <img
                  src="/images/editorial-newspaper.jpeg"
                  alt="Reading the paper"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Process images strip */}
      <section className="px-gutter pb-section">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            <AnimateIn>
              <div className="aspect-[4/5] w-full overflow-hidden bg-idw-clay">
                <img
                  src="/images/process-fabric-rolls.jpeg"
                  alt="Fabric rolls"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="aspect-[4/5] w-full overflow-hidden bg-idw-graphite">
                <img
                  src="/images/process-tailoring.jpeg"
                  alt="Tailoring scissors and patterns"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="aspect-[4/5] w-full overflow-hidden bg-idw-sand">
                <img
                  src="/images/process-pattern-marking.jpeg"
                  alt="Marking a pattern"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-idw-black/10 px-gutter py-section">
        <div className="mx-auto max-w-content">
          <AnimateIn>
            <div className="grid gap-12 md:grid-cols-3">
              <div>
                <h3 className="font-serif text-xl mb-3">Human</h3>
                <p className="text-sm leading-relaxed opacity-60">
                  Clothes exist because people exist. We never lose sight of the
                  person inside them. Everything we make starts with how it
                  feels, not how it looks in a flat lay.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">Researched</h3>
                <p className="text-sm leading-relaxed opacity-60">
                  We study the construction methods and cultural contexts behind
                  functional clothing from around the world. Not to copy, but to
                  understand why things were made the way they were.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">Quality</h3>
                <p className="text-sm leading-relaxed opacity-60">
                  Not a marketing word. A material fact. Better fabrics, better
                  construction, better fit. Clothes that last longer than the
                  season they were made in.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
