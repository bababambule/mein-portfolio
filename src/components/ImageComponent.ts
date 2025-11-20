type ImageRatio = "Landscape" | "Portrait" | "Square";
type Variant = "light" | "dark" | "slate" | "slateToLight" | "lightToSlate";

export type { ImageRatio };
export type { Variant };

interface ComponentOptions {
  src: string;
  srcLarge?: string;
  alt?: string;
  ratio?: ImageRatio;
  variant?: Variant;
}

export function imageSection(options: ComponentOptions): HTMLElement {
  const { src, srcLarge, alt, ratio = "Square", variant = "light" } = options;

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

  const container = document.createElement("div");
  container.className = "max-w-6xl mx-auto";

  const image = document.createElement("img");
  image.className = `${imageFormats[ratio]} rounded-lg shadow-lg`;
  image.setAttribute("src", src);

  const pictureElement = document.createElement("picture");
  pictureElement.className = `${imageFormats[ratio]} lg:aspect-video`;

  //Create a larger version for responsive elements
  if (srcLarge) {
    const pictureLarge = document.createElement("source");
    pictureLarge.srcset = srcLarge;
    pictureLarge.media = "(min-width: 1024px)";
    pictureLarge.className = "rounded-lg shadow-xl";
    pictureElement.appendChild(pictureLarge);
  }

  // Create the default image for the picture element
  const pictureDefault = document.createElement("img");
  pictureDefault.src = src;
  if (alt) {
    pictureDefault.setAttribute("alt", alt);
  }
  pictureDefault.className = "shadow-lg rounded-lg";
  pictureElement.appendChild(pictureDefault);

  container.appendChild(pictureElement);
  component.appendChild(container);

  return component;
}
