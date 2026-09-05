import Link from "next/link";
import { ReactNode } from "react";

type Variant = "gold" | "outline" | "dark";

const VARIANT_CLASSES: Record<Variant, string> = {
  gold: "bg-gold text-black hover:bg-gold-light",
  outline:
    "border border-gold text-gold hover:bg-gold hover:text-black",
  dark: "bg-black text-cream hover:bg-ink",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-200";

export default function Button({
  href,
  children,
  variant = "gold",
  className = "",
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${VARIANT_CLASSES[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
