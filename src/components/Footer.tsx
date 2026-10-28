import { site } from "@/content/site";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-site grid gap-10 py-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <BrandMark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            {site.footer.blurb}
          </p>
        </div>

        <div className="lg:col-span-3">
          <p className="meta">Explore</p>
          <nav className="mt-4 flex flex-col gap-2.5">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="lg:col-span-4">
          <p className="meta">Contact Details</p>
          <div className="mt-4 space-y-2 text-sm text-ink-soft">
            <a href={site.contact.phoneHref} className="phone-link block text-base">
              {site.contact.phone}
            </a>
            <p>
              {site.contact.address.line1}
              <br />
              {site.contact.address.line2}
              <br />
              {site.contact.address.line3}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-2 py-5 text-sm text-muted sm:flex-row sm:justify-between">
          <p>{site.footer.note}</p>
          <p>© 2026 {site.brand.fullName}</p>
        </div>
      </div>
    </footer>
  );
}
