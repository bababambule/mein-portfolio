import { CreateIconBox, type IconBoxOptions } from "../../IconBox";
import iconFigma from "../../../assets/icons/figma.svg?raw";
import iconHtml from "../../../assets/icons/html.svg?raw";
import iconNordcraft from "../../../assets/icons/nordcraft.svg?raw";
import iconTailwind from "../../../assets/icons/tailwind.svg?raw";
import iconJavascript from "../../../assets/icons/javascript.svg?raw";
import iconDirectus from "../../../assets/icons/directus.svg?raw";
import heroImg from "../../../assets/img/cris-zweiger-hero-shot.webp";

export function HeroLeftColumn(): HTMLElement {
  const leftColumn = document.createElement("div");
  leftColumn.className =
    "items-end justify-center grow-1 shrink-1 basis-full lg:basis-1/2 flex";

  const heroImageWrapper = document.createElement("div");
  heroImageWrapper.className = "flex-1 pt-20";

  const heroImage = document.createElement("img");
  heroImage.src = heroImg;
  heroImage.alt = "Cristian Zweigler, Senior Product Designer";
  //heroImage.width = 297;
  //heroImage.height = 448;
  heroImage.className = "drop-shadow-lg max-w-full sm:w-full";
  heroImageWrapper.appendChild(heroImage);

  const iconWrapperLeft = document.createElement("div");
  iconWrapperLeft.className =
    "z-10 w-6 flex flex-col gap-8 items-end relative -bottom-1 -right-8 sm:-right-4 sm:w-1/6";
  //"flex flex-col gap-8 z-10 absolute -left-10 -bottom-4";

  const iconWrapperRight = document.createElement("div");
  iconWrapperRight.className =
    "z-10 w-6 flex flex-col gap-8 items-start relative -bottom-2 -left-12 sm:-left-8 sm:w-1/6";
  //"flex flex-col gap-8 absolute -right-10 -bottom-4";

  const icons: IconBoxOptions[] = [
    {
      src: iconTailwind,
      size: "xxl",
      color: "amber",
      rotate: -3,
      translate: 2,
    },
    {
      src: iconHtml,
      size: "xxl",
      color: "slate",
      rotate: 6,
      translate: 1,
    },
    {
      src: iconJavascript,
      size: "xxl",
      color: "amber",
      rotate: -3,
      translate: 2,
    },
    {
      src: iconNordcraft,
      size: "xxl",
      color: "slate",
      rotate: -3,
      translate: 2,
    },
    {
      src: iconFigma,
      size: "xxl",
      color: "amber",
      rotate: 6,
      translate: 1,
    },
    {
      src: iconDirectus,
      size: "xxl",
      color: "slate",
      rotate: -3,
      translate: 2,
    },
  ];

  icons.forEach((icon, index) => {
    // Used property spreading, because array and interface options match
    const el = CreateIconBox({ ...icon });
    if (index <= 2) {
      iconWrapperLeft.appendChild(el);
    } else {
      iconWrapperRight.appendChild(el);
    }
  });

  leftColumn.appendChild(iconWrapperLeft);
  leftColumn.appendChild(heroImageWrapper);
  leftColumn.appendChild(iconWrapperRight);

  return leftColumn;
}
