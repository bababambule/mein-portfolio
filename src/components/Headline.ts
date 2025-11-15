type HeadingTypes = "h1" | "h2" | "h3" | "h4";
export type { HeadingTypes };

interface HeadingOptions {
  text: string;
  type?: HeadingTypes;
  className?: string;
}

export function CreateHeading(options: HeadingOptions): HTMLElement {
  const { text, type = "h1", className = "" } = options;

  const heading = document.createElement(type);

  const defaultClasses: Record<HeadingTypes, string> = {
    h1: "text-4xl font-black",
    h2: "text-2xl/8 font-black",
    h3: "text-lg font-bold",
    h4: "text-base font-bold",
  };
  heading.textContent = text;
  heading.className = className || defaultClasses[type];

  return heading;
}
