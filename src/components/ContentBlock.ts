import { createBadge, type BadgeVariant } from "./Badge";
import { CreateHeading, type HeadingTypes } from "./Headline";
// import { brandGridElement } from "./BrandGridElement";

// Declare different Styles for the ContentBlock
type ContentBlockVariant =
  | "amberLight"
  | "amberDark"
  | "slateLight"
  | "slateDark";

//Declare ContentBlock Interface
interface ContentBlockOptions {
  blockVariant?: ContentBlockVariant;
  badgeText?: string;
  badgeVariant?: BadgeVariant;
  showBadge?: boolean;
  headingText: string;
  headingType?: HeadingTypes;
  body?: string | HTMLElement;
}

export function contentBlock(options: ContentBlockOptions): HTMLElement {
  //Set ContentBlock default Options
  const {
    blockVariant = "amberDark",
    badgeText,
    badgeVariant,
    showBadge = false,
    headingText,
    headingType = "h1",
    body,
  } = options;

  const contentBlock = document.createElement("section");

  const baseClasses = "w-full px-12";
  const variantClasses = {
    amberLight: "bg-amber-50 text-slate-800",
    amberDark: "bg-amber-600 text-amber-50",
    slateLight: "bg-slate-50 text-slate-800",
    slateDark: "bg-slate-600 text-slate-50",
  };

  contentBlock.className = `${baseClasses} ${variantClasses[blockVariant]} py-12`;

  const container = document.createElement("div");
  container.className = "max-w-prose mx-auto w-full flex flex-col gap-6";

  const headingBlock = document.createElement("div");
  headingBlock.className = "flex flex-col gap-2 w-full";

  if (showBadge && badgeText) {
    const badge = createBadge({
      text: badgeText, //text to be use
      variant: badgeVariant, //variant to be used
    });
    headingBlock.appendChild(badge);
  }

  const heading = CreateHeading({
    text: headingText,
    type: headingType,
  });

  headingBlock.appendChild(heading);
  container.appendChild(headingBlock);

  if (body) {
    const bodyBlock = document.createElement("div");
    bodyBlock.className = "flex flex-col gap-6";

    if (typeof body === "string") {
      bodyBlock.innerHTML = body;
    } else {
      bodyBlock.appendChild(body);
    }

    container.appendChild(bodyBlock);
  }

  contentBlock.appendChild(container);

  return contentBlock;
}
