"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { BrandMark } from "./BrandMark";
import { useQuote } from "./QuoteProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openQuote } = useQuote();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-300 ${
          scrolled || open
            ? "border-b border-line bg-white shadow-[0_10px_30px_rgba(26,33,28,0.06)]"
            : "border-b border-transparent bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="container-site flex h-[4.25rem] items-center justify-between gap-3 sm:h-[4.75rem]">
          <a
            href="#top"
            className="min-w-0 shrink-0"
            onClick={() => setOpen(false)}
            aria-label={`${site.brand.fullName} home`}
          >
            <BrandMark priority size="sm" />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.78rem] font-semibold tracking-[0.08em] text-ink uppercase transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={openQuote}
              className="hidden min-h-10 items-center justify-center rounded bg-[#1e4a28] px-3 text-[0.65rem] font-bold tracking-[0.05em] text-white uppercase transition-colors hover:bg-[#16381e] sm:inline-flex sm:px-4"
            >
              Get a Free Quote
            </button>

            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-[80] flex h-11 w-11 items-center justify-center text-ink lg:hidden"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close" : "Menu"}</span>
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-200 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-[1.5px] w-full bg-current transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-200 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] bg-white transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-6 pt-24 pb-10">
          <nav className="flex flex-1 flex-col">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-line py-5 font-display text-2xl font-bold tracking-tight text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-3 pt-8">
            <button
              type="button"
              className="flex min-h-12 w-full items-center justify-center rounded bg-[#1e4a28] px-5 text-sm font-bold tracking-[0.05em] text-white uppercase"
              onClick={() => {
                setOpen(false);
                openQuote();
              }}
            >
              Get a Free Quote
            </button>
            <a
              href={site.contact.phoneHref}
              className="flex min-h-12 w-full items-center justify-center rounded border-2 border-[#1e4a28] px-5 text-sm font-bold tracking-[0.05em] text-[#1e4a28] uppercase"
              onClick={() => setOpen(false)}
            >
              Call {site.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
