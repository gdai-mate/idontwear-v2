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
            src="/images/shoot/jacket-portrait.jpg"
            alt="Stand collar jacket"
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
                Most clothing brands begin with a mood board and work backwards
                to a product. We started with the product. Specifically, with
                the question of why a railroad worker&apos;s shirt from 1943
                feels better to wear than most things designed this year.
              </p>
              <p>
                The answer, we think, has to do with function. When a garment is
                designed to actually do something, to keep out rain or survive a
                twelve-hour shift or move with the body rather than against it,
                the result tends to be more honest. The proportions make sense.
                The materials justify themselves. Nothing is there for
                decoration&apos;s sake.
              </p>
              <p>
                We build around these functional silhouettes. Workwear,
                outdoorswear, military surplus, tailoring. Then we pull techniques
                and context from different cultures, because a Japanese approach
                to dyeing indigo or an Italian understanding of drape aren&apos;t
                proprietary ideas. Good knowledge travels.
              </p>
              <p>
                The clothes don&apos;t come with a story. They don&apos;t need
                one. You put them on and they either feel right or they
                don&apos;t. That&apos;s the whole test.
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
                src="/images/shoot/sailbag-held-full.jpg"
                alt="Sailcloth tote over shoulder"
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
                  We work with natural materials because synthetic alternatives
                  tend to solve problems that don&apos;t exist. Waxed cotton
                  develops character. Raw denim fades to record your specific
                  habits. Linen wrinkles, which is a feature, not a defect.
                </p>
                <p>
                  The Japanese have a word for this sort of thing. You don&apos;t
                  need to know it to appreciate the principle: things that age
                  honestly are more interesting than things that try not to age
                  at all.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn className="order-1 md:order-2" delay={150}>
              <div className="aspect-square w-full overflow-hidden bg-idw-sand">
                <img
                  src="/images/shoot/weathered-tote-held.jpg"
                  alt="Weathered canvas tote"
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
                  src="/images/shoot/pocket-stitch-detail.jpg"
                  alt="Pocket stitch detail"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="aspect-[4/5] w-full overflow-hidden bg-idw-graphite">
                <img
                  src="/images/shoot/jacket-waist-detail.jpg"
                  alt="Jacket construction detail"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="aspect-[4/5] w-full overflow-hidden bg-idw-sand">
                <img
                  src="/images/shoot/branding-detail.jpg"
                  alt="/dontwear. branding"
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
                  A flat lay on a marble countertop tells you nothing about how
                  a shirt feels against your skin at 2pm on a Tuesday.
                  Everything we make starts with the person who&apos;ll wear it,
                  not the camera that&apos;ll photograph it.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">Researched</h3>
                <p className="text-sm leading-relaxed opacity-60">
                  We study the construction methods behind functional clothing
                  from around the world. Not to copy, but to understand why a
                  chore jacket from Lyon and a noragi from Kyoto arrived at
                  similar solutions independently.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">Quality</h3>
                <p className="text-sm leading-relaxed opacity-60">
                  Not a marketing word. A material fact. We use better fabrics,
                  more considered construction, and more honest sizing. The
                  kind of clothes you stop replacing every eighteen months.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
