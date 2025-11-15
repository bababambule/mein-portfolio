type BadgeVariant = "amberLight" | "amberDark" | "slate" | "pill";
export type { BadgeVariant };

interface BadgeOptions {
  text: string;
  variant?: BadgeVariant;
}

export function createBadge(options: BadgeOptions): HTMLElement {
  const { text, variant = "amberLight" } = options;

  const badge = document.createElement("div");
  badge.textContent = text;

  const baseClasses = "py-2 px-1 border-b-2 max-w-max text-xs";

  const variantClasses = {
    amberLight: "text-amber-50 border-amber-50",
    amberDark: "text-amber-400 border-amber-400",
    slate: "text-slate-400 border-amber-400",
    pill: "rounded-lg bg-slate-100 text-slate-600 border-0",
  };

  badge.className = `${baseClasses} ${variantClasses[variant]}`;

  return badge;
}
