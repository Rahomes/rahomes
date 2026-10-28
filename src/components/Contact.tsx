"use client";

import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { useQuote } from "./QuoteProvider";

export function Contact() {
  const { contact, contactSection } = site;
  const { openQuote } = useQuote();
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contact.address.mapsQuery,
  )}`;

  return (
    <section id="contact" className="section bg-bg">
      <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-6">
          <p className="label">{contactSection.eyebrow}</p>
          <h2 className="headline mt-5 text-3xl sm:text-4xl lg:text-[2.75rem]">
            {contactSection.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
            {contactSection.support}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={openQuote} className="btn btn-accent">
              Get a Free Quote
            </button>
            <a href={contact.phoneHref} className="btn btn-outline">
              Call {contact.phone}
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5 lg:col-start-8" delay={1}>
          <div className="panel space-y-8 p-6 sm:p-8">
            <div>
              <p className="meta">Phone</p>
              <a
                href={contact.phoneHref}
                className="phone-link mt-3 inline-block font-display text-3xl sm:text-4xl"
              >
                {contact.phone}
              </a>
            </div>
            <div className="hairline" />
            <div>
              <p className="meta">Studio</p>
              <address className="mt-3 not-italic text-base leading-relaxed text-ink-soft">
                {contact.address.line1}
                <br />
                {contact.address.line2}
                <br />
                {contact.address.line3}
              </address>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-[#1e4a28] underline-offset-4 hover:underline"
              >
                Get Directions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
