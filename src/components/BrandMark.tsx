import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { width: 140, height: 140, className: "h-10 w-auto" },
  md: { width: 180, height: 180, className: "h-12 w-auto sm:h-14" },
  lg: { width: 240, height: 240, className: "h-20 w-auto" },
};

export function BrandMark({
  className = "",
  priority = false,
  size = "md",
}: BrandMarkProps) {
  const dim = sizes[size];

  return (
    <Image
      src="/logo.jpg"
      alt="RA HOMES"
      width={dim.width}
      height={dim.height}
      priority={priority}
      className={`${dim.className} object-contain ${className}`}
    />
  );
}
