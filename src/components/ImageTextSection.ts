import { CreateHeading } from "./Headline";

type FrontColor = "amber" | "slate";
type SectionVariant =
  | "amberLight"
  | "amberDark"
  | "slateLight"
  | "slateDark"
  | "amberToSlate";

interface SectionOptions {
  variant?: SectionVariant;
  title: string;
  body: string;
  src: string;
  alt?: string;
  color?: FrontColor;
}

export function imageContentBlock(options: SectionOptions): HTMLElement {
  const {
    title = "My Heading",
    body = "My Body",
    src = "./assets/img/placeholder/placeholder-square.webp",
    alt = "Alt Text",
    color = "amber",
    variant = "amberLight",
  } = options;

  const bgColor = color == "slate" ? "slate" : "amber";

  const section = document.createElement("section");

  const baseClasses = "px-6 py-10";
  const variantClasses: Record<SectionVariant, string> = {
    amberLight: "bg-amber-50",
    amberDark: "bg-amber-600",
    slateLight: "bg-slate-50",
    slateDark: "bg-slate-600",
    amberToSlate: "bg-gradient-to-b from-amber-50 from-65% to-slate-600 to-65%",
  };

  section.className = `${baseClasses} ${variantClasses[variant]}`;

  // Create Container
  const container = document.createElement("div");
  container.className = "max-w-7xl mx-auto flex flex-col gap-4";
  section.appendChild(container);

  // Image Block
  const imageBlock = document.createElement("div");
  imageBlock.className = `rounded-lg bg-${bgColor}-600 p-6 flex items-center justify-center`;
  imageBlock.innerHTML = `
        <div>
            <img src="${src}" alt="${alt}" class="aspect-square object-cover w-full">
        </div>
  `;

  container.appendChild(imageBlock);

  // Content Block
  const textBlock = document.createElement("div");
  textBlock.className = `rounded-lg bg-${bgColor}-600 text-${bgColor}-50 px-6 py-10 flex flex-col text-left gap-4`;

  const heading = CreateHeading({
    text: title,
    type: "h2",
  });

  textBlock.appendChild(heading);

  const contentBody = document.createElement("div");
  contentBody.innerHTML = body;

  textBlock.appendChild(contentBody);

  container.appendChild(textBlock);

  return section;
}
