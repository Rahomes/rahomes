import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
};

/** Display sizes — source asset stays 1024×1024 for sharpness. */
const sizes = {
  sm: { className: "h-11 w-11" },
  md: { className: "h-14 w-14 sm:h-16 sm:w-16" },
  lg: { className: "h-24 w-24" },
};

export function BrandMark({
  className = "",
  priority = false,
  size = "md",
}: BrandMarkProps) {
  const dim = sizes[size];

  return (
    <Image
      src="/logo.png"
      alt="RA HOMES"
      width={1024}
      height={1024}
      quality={100}
      priority={priority}
      className={`${dim.className} object-contain ${className}`}
    />
  );
}
