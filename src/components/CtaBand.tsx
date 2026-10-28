"use client";

import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { useQuote } from "./QuoteProvider";

export function CtaBand() {
  const { cta } = site;
  const { openQuote } = useQuote();

  return (
    <section className="bg-[#1e4a28]">
      <div className="container-site py-12 sm:py-14 lg:py-16">
        <Reveal>
          <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col justify-center lg:col-span-7">
              <p className="text-xs font-bold tracking-[0.16em] text-[#c5d9a8] uppercase">
                {cta.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {cta.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
                {cta.support}
              </p>
              <p className="mt-5 text-xs font-semibold tracking-[0.12em] text-white/70 uppercase">
                {cta.note}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="flex h-full flex-col justify-center rounded-2xl bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:p-8">
                <p className="text-xs font-bold tracking-[0.14em] text-[#4d564f] uppercase">
                  {cta.phoneLabel}
                </p>
                <a
                  href={cta.phoneHref}
                  className="mt-3 font-display text-3xl font-bold tracking-tight text-[#1e4a28] transition-colors hover:text-[#16381e] sm:text-4xl"
                >
                  {cta.phone}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-[#2c342e]">
                  Prefer a written brief? Request a free quote online.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={openQuote}
                    className="inline-flex min-h-12 flex-1 items-center justify-center rounded bg-[#1e4a28] px-5 text-xs font-bold tracking-[0.06em] text-white uppercase transition-colors hover:bg-[#16381e]"
                  >
                    Get a Free Quote
                  </button>
                  <a
                    href={cta.secondary.href}
                    className="inline-flex min-h-12 flex-1 items-center justify-center rounded border-2 border-[#1e4a28] bg-transparent px-5 text-xs font-bold tracking-[0.06em] text-[#1e4a28] uppercase transition-colors hover:bg-[#eef2e8]"
                  >
                    {cta.secondary.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
