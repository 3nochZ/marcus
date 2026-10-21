import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: "solid" | "outline";
};

export const DualTextButton = forwardRef<HTMLButtonElement, Props>(function DualTextButton(
  { label, variant = "solid", className, ...rest },
  ref,
) {
  const base =
    "group relative inline-flex items-center gap-3 rounded-full pl-7 pr-2 py-2 text-eyebrow transition-colors duration-500";
  const skin =
    variant === "solid"
      ? "bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground"
      : "border border-primary/20 bg-transparent text-primary hover:border-primary/40";

  return (
    <button ref={ref} className={cn(base, skin, className)} {...rest}>
      <span className="btn-dual">
        <span className="btn-dual__a">{label}</span>
        <span className="btn-dual__b" aria-hidden="true">
          {label}
        </span>
      </span>
      <span className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 transition-transform duration-500 group-hover:translate-x-0.5">
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
          <path
            d="M0 5h12M8 1l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="square"
          />
        </svg>
      </span>
    </button>
  );
});
