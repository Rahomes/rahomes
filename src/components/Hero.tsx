"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { useQuote } from "./QuoteProvider";

export function Hero() {
  const { brand, hero } = site;
  const slides = hero.slides;
  const [active, setActive] = useState(0);
  const { openQuote } = useQuote();

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const slide = slides[active];

  return (
    <section id="top" className="relative min-h-[100svh] min-h-[100dvh] overflow-hidden">
      {slides.map((item, index) => (
        <div
          key={item.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover ${index === active ? "animate-slow-zoom" : ""}`}
          />
        </div>
      ))}
      <div className="hero-veil absolute inset-0" aria-hidden />

      <div className="relative z-10 container-site flex min-h-[100svh] min-h-[100dvh] flex-col justify-end pb-10 pt-28 sm:pb-14 lg:pb-16">
        <div className="max-w-3xl">
          <p className="animate-fade-in font-display text-3xl font-extrabold tracking-[0.04em] text-on-dark sm:text-4xl md:text-5xl">
            {brand.name}
            <span className="text-white">.</span>
          </p>
          <p className="animate-fade-in mt-1.5 text-[0.7rem] font-bold tracking-[0.22em] text-white uppercase">
            {brand.tagline}
          </p>

          <p
            className="animate-fade-up mt-8 text-[0.7rem] font-semibold tracking-[0.16em] text-on-dark/70 uppercase"
            style={{ animationDelay: "0.08s" }}
          >
            {hero.kicker}
          </p>

          <h1
            className="animate-fade-up mt-3 font-display text-[2.1rem] font-bold leading-[1.12] tracking-tight text-on-dark sm:text-4xl md:text-5xl lg:text-[3.5rem]"
            style={{ animationDelay: "0.14s" }}
          >
            {hero.headline}
          </h1>

          <p
            className="animate-fade-up mt-4 max-w-lg text-sm leading-relaxed text-on-dark/85 sm:text-base"
            style={{ animationDelay: "0.2s" }}
          >
            {hero.support}
          </p>

          <div
            className="animate-fade-up mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            style={{ animationDelay: "0.26s" }}
          >
            <a href={hero.ctaPrimary.href} className="btn btn-accent">
              {hero.ctaPrimary.label}
            </a>
            <button
              type="button"
              onClick={openQuote}
              className="btn btn-ghost"
            >
              {hero.ctaSecondary.label}
            </button>
          </div>
        </div>

        <div className="mt-10 flex items-end justify-between gap-6 border-t border-white/20 pt-5 sm:mt-14">
          <div>
            <p className="font-display text-lg font-bold text-on-dark sm:text-xl">
              {slide.title}
            </p>
            <p className="mt-1 text-[0.68rem] tracking-[0.14em] text-on-dark/65 uppercase">
              {slide.place}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-display text-base font-bold text-white tabular-nums sm:text-lg">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </p>
            <div className="hidden items-center gap-2 sm:flex">
              {slides.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Show ${item.title}`}
                  onClick={() => setActive(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === active
                      ? "w-7 bg-white"
                      : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
