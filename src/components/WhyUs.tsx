import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function WhyUs() {
  const { why } = site;

  return (
    <section className="section bg-surface">
      <div className="container-site">
        <Reveal>
          <p className="label">{why.eyebrow}</p>
          <h2 className="headline mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-[2.75rem]">
            {why.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {why.items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={((index % 3) + 1) as 1 | 2 | 3}
            >
              <article className="panel panel-hover h-full p-6 sm:p-7">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink sm:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
