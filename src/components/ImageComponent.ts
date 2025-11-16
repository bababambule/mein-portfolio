type ImageRatio = "Landscape" | "Portrait" | "Square";
type Variant = "light" | "dark" | "slate" | "slateToLight" | "lightToSlate";

export type { ImageRatio };
export type { Variant };

interface ComponentOptions {
  src: string;
  alt?: string;
  ratio?: ImageRatio;
  variant?: Variant;
}

export function imageSection(options: ComponentOptions): HTMLElement {
  const { src, alt, ratio = "Square", variant = "light" } = options;

  //Styling
  const baseClasses = "py-10 px-12";
  const variantClasses: Record<Variant, string> = {
    light: "bg-amber-50",
    dark: "bg-amber-600",
    slate: "bg-slate-600",
    slateToLight: "bg-gradient-to-b from-slate-600 from-65% to-amber-50 to-65%",
    lightToSlate: "bg-gradient-to-b from-amber-50 from-65% to-slate-600 to-65%",
  };
  const imageFormats: Record<ImageRatio, string> = {
    Landscape: "aspect-video",
    Portrait: "aspect-9/16",
    Square: "aspect-square",
  };

  const component = document.createElement("section");
  component.className = `${baseClasses} ${variantClasses[variant]}`;

  const image = document.createElement("img");
  image.className = `${imageFormats[ratio]} rounded-lg shadow-lg`;
  image.setAttribute("src", src);
  if (alt) {
    image.setAttribute("alt", alt);
  }

  component.appendChild(image);

  return component;
}
