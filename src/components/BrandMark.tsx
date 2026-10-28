type BrandMarkProps = {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
};

/** Display sizes — always the official mark file, never recompressed. */
const sizes = {
  sm: "h-11 w-11",
  md: "h-14 w-14 sm:h-16 sm:w-16",
  lg: "h-24 w-24",
};

export function BrandMark({
  className = "",
  priority = false,
  size = "md",
}: BrandMarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- serve exact logo bytes, no optimizer
    <img
      src="/logo.png"
      alt="RA HOMES"
      width={1024}
      height={1024}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
      className={`${sizes[size]} object-contain ${className}`}
    />
  );
}
