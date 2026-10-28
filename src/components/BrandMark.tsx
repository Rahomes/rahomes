import { site } from "@/content/site";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
  /** Show name beside the mark (default true). */
  showName?: boolean;
};

/** Display sizes — always the official mark file, never recompressed. */
const markSizes = {
  sm: "h-10 w-10",
  md: "h-12 w-12 sm:h-14 sm:w-14",
  lg: "h-20 w-20",
};

const nameSizes = {
  sm: {
    name: "text-[0.95rem] leading-none",
    tag: "text-[0.55rem] tracking-[0.18em]",
  },
  md: {
    name: "text-[1.05rem] sm:text-[1.2rem] leading-none",
    tag: "text-[0.58rem] sm:text-[0.62rem] tracking-[0.2em]",
  },
  lg: {
    name: "text-[1.45rem] leading-none",
    tag: "text-[0.7rem] tracking-[0.22em]",
  },
};

export function BrandMark({
  className = "",
  priority = false,
  size = "md",
  showName = true,
}: BrandMarkProps) {
  const { brand } = site;

  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- serve exact logo bytes, no optimizer */}
      <img
        src="/logo.png"
        alt=""
        width={1024}
        height={1024}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className={`${markSizes[size]} shrink-0 object-contain`}
      />
      {showName ? (
        <span className="min-w-0 text-left">
          <span
            className={`block font-display font-extrabold tracking-[0.04em] text-[#1E4A28] ${nameSizes[size].name}`}
          >
            {brand.name}
            <span className="text-[#1E4A28]">.</span>
          </span>
          <span
            className={`mt-1 block font-bold uppercase text-[#1E4A28]/80 ${nameSizes[size].tag}`}
          >
            {brand.tagline}
          </span>
        </span>
      ) : null}
    </span>
  );
}
