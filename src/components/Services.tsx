import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Services() {
  const { services } = site;

  return (
    <section id="services" className="section bg-surface">
      <div className="container-site">
        <Reveal>
          <p className="label">{services.eyebrow}</p>
          <h2 className="headline mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-[2.75rem]">
            {services.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={((index % 3) + 1) as 1 | 2 | 3}
            >
              <article className="group media-frame relative aspect-[4/5] overflow-hidden bg-surface-3 shadow-[0_12px_36px_rgba(26,33,28,0.08)]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="font-display text-xl font-bold text-on-dark sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-on-dark/85">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
