import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const { testimonials } = site;

  return (
    <section className="section bg-surface-2">
      <div className="container-site">
        <Reveal>
          <p className="label">{testimonials.eyebrow}</p>
          <h2 className="headline mt-5 text-3xl sm:text-4xl lg:text-[2.75rem]">
            {testimonials.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:mt-14 lg:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <Reveal
              key={item.name}
              delay={((index % 3) + 1) as 1 | 2 | 3}
            >
              <blockquote className="panel flex h-full flex-col p-6 sm:p-8">
                <span
                  className="font-display text-4xl leading-none text-accent"
                  aria-hidden
                >
                  “
                </span>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
                  {item.quote}
                </p>
                <footer className="mt-8">
                  <div className="hairline mb-5" />
                  <cite className="not-italic">
                    <span className="block font-display text-lg font-bold text-ink">
                      {item.name}
                    </span>
                    <span className="meta mt-1.5 block">{item.meta}</span>
                  </cite>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
