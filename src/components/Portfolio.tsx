import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Portfolio() {
  const { work } = site;

  return (
    <section id="work" className="section bg-bg">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="label">{work.eyebrow}</p>
              <h2 className="headline mt-5 text-3xl sm:text-4xl lg:text-5xl">
                {work.title}
              </h2>
            </div>
            <a
              href="#contact"
              className="text-sm font-bold tracking-[0.08em] text-accent uppercase transition-opacity hover:opacity-80"
            >
              Start a project →
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {work.projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={((index % 3) + 1) as 1 | 2 | 3}
              className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <a href="#contact" className="group block">
                <figure className="media-frame relative overflow-hidden shadow-[0_12px_40px_rgba(29,43,58,0.08)]">
                  <div
                    className={`relative ${
                      index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      sizes={
                        index === 0
                          ? "(max-width: 1024px) 100vw, 66vw"
                          : "(max-width: 640px) 100vw, 33vw"
                      }
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <p className="text-xs font-bold tracking-[0.14em] text-[#d4e5b0] uppercase">
                        {project.place}
                      </p>
                      <p className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                        {project.title}
                      </p>
                    </figcaption>
                  </div>
                </figure>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
