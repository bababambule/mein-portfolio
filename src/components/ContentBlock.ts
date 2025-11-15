import { createBadge, type BadgeVariant } from "./Badge";
import { CreateHeading, type HeadingTypes } from "./Headline";

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
  body?: string;
}

export function contentBlock(options: ContentBlockOptions): HTMLElement {
  //Set ContentBlock default Options
  const {
    blockVariant = "amberDark",
    badgeText = "",
    badgeVariant = "amberLight",
    showBadge = true,
    headingText = "Headline",
    headingType = "h1",
    body = "",
  } = options;

  //create the ContentBlock
  const contentBlock = document.createElement("section");
  //set the base classes
  const baseClasses = "w-full px-12";
  //variations based on the blockVariant
  const variantClasses = {
    amberLight: "bg-amber-50 text-amber-800",
    amberDark: "bg-amber-600 text-amber-50",
    slateLight: "bg-slate-50 text-slate-800",
    slateDark: "bg-slate-600 text-slate-50",
  };
  //set the styling
  contentBlock.className = `${baseClasses} ${variantClasses[blockVariant]} flex flex-col gap-4 py-12`;

  //create the badge element
  const badge = createBadge({
    text: badgeText, //text to be use
    variant: badgeVariant, //variant to be used
  });

  //create the heading element
  const heading = CreateHeading({
    text: headingText,
    type: headingType,
  });

  /*Design part starts here*/
  const headingBlock = document.createElement("div");
  headingBlock.className = "flex flex-col gap-2";

  //Create body element
  const bodyBlock = document.createElement("div");
  bodyBlock.className = "";
  bodyBlock.innerHTML = body;

  //show badge only set to true
  if (showBadge) {
    headingBlock.appendChild(badge);
  }
  headingBlock.appendChild(heading);
  contentBlock.appendChild(headingBlock);
  contentBlock.appendChild(bodyBlock);

  return contentBlock;
}
