import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function About() {
  const { about, stats } = site;

  return (
    <section id="about" className="section bg-bg">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="label">{about.eyebrow}</p>
            <h2 className="headline mt-5 text-3xl sm:text-4xl lg:text-[2.75rem]">
              {about.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              {about.body}
            </p>
            <p className="mt-8 font-display text-lg font-semibold text-accent sm:text-xl">
              {about.attribution}
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="media-frame relative aspect-[4/5] sm:aspect-[5/6]">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-line pt-10 sm:mt-20 sm:gap-8 lg:grid-cols-4 lg:pt-12">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={((index % 3) + 1) as 1 | 2 | 3}
            >
              <div>
                <p className="font-display text-4xl font-bold text-accent sm:text-5xl">
                  {stat.value}
                </p>
                <p className="meta mt-2">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
