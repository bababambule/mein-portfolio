type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonOptions {
  text: string;
  onClick: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
}

export function createButton(options: ButtonOptions): HTMLButtonElement {
  const {
    text,
    onClick,
    variant = "primary",
    disabled = false,
    fullWidth = false,
  } = options;

  const button = document.createElement("button");
  button.textContent = text;

  // Base classes
  const baseClasses =
    "px-8 py-4 rounded-md transition-all hover:scale-105 duration-300 font-semibold";

  const variantClasses = {
    primary:
      "bg-gradient-to-t from-slate-600 to-slate-500 text-white hover:from-slate-700 hover:to-slate-500",
    secondary: "bg-slate-700 text-white hover:bg-slate-600",
    outline:
      "border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  button.className = `${baseClasses} ${variantClasses[variant]} ${widthClass} ${disabledClass}`;
  button.disabled = disabled;
  button.addEventListener("click", onClick);

  return button;
}
