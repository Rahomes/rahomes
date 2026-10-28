import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Process() {
  const { process } = site;

  return (
    <section id="process" className="section bg-bg">
      <div className="container-site">
        <Reveal>
          <p className="label">{process.eyebrow}</p>
          <h2 className="headline mt-5 max-w-2xl text-3xl sm:text-4xl lg:text-[2.75rem]">
            {process.title}
          </h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-8 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          <div
            className="pointer-events-none absolute top-[1.15rem] right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent lg:block"
            aria-hidden
          />
          {process.steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={((index % 3) + 1) as 1 | 2 | 3}
            >
              <li className="relative">
                <span className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-accent bg-surface font-display text-sm font-bold text-accent">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
