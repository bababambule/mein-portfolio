import { createButton } from "../../Button";
import { resizeSvg } from "../../../utils/svg";
import gitIcon from "../../../assets/icons/fa7-brands_square-github.svg?raw";
import linkedIcon from "../../../assets/icons/fa7-brands_linkedin.svg?raw";
import dribbbleIcon from "../../../assets/icons/fa7-brands_dribbble-square.svg?raw";
import iconFigma from "../../../assets/icons/figma.svg?raw";
import iconHtml from "../../../assets/icons/html.svg?raw";
import iconNordcraft from "../../../assets/icons/nordcraft.svg?raw";
import iconTailwind from "../../../assets/icons/tailwind.svg?raw";
import iconJavascript from "../../../assets/icons/javascript.svg?raw";
import iconDirectus from "../../../assets/icons/directus.svg?raw";
import heroImg from "../../../assets/img/cris-zweiger-hero-shot.webp";

export function HomeHero(): HTMLElement {
  const hero = document.createElement("section");
  hero.className =
    "min-h-screen flex items-center justify-center bg-gradient-to-b from-15% from-amber-50 to-amber-600";

  const container = document.createElement("div");
  container.className = "max-w-7xl mx-auto px-6 overflow-x-clip";

  const wrapper = document.createElement("div");
  wrapper.className = "w-full pb-10 flex flex-wrap gap-8";

  const leftColumn = document.createElement("div");
  leftColumn.className = "flex-1 basis-1/2";

  leftColumn.innerHTML = `
  <div class="flex gap-2 relative">

    <div class="flex flex-col gap-8 z-10 absolute -left-10 -bottom-4">
      <div class="flex items-center justify-center size-20 bg-amber-400 text-slate-800 rounded-md shadow-lg -rotate-3 translate-x-2 hover:scale-110 transition-transform">
        ${resizeSvg(iconTailwind, "xxl")}
      </div>
      <div class="flex items-center justify-center size-20 bg-slate-800 text-slate-50 rounded-md shadow-lg rotate-6 -translate-x-1 hover:scale-110 transition-transform">
        ${resizeSvg(iconHtml, "xxl")}
      </div>
      <div class="flex items-center justify-center size-20 bg-amber-400 text-slate-800 rounded-md shadow-lg -rotate-3 translate-x-2 hover:scale-110 transition-transform">
        ${resizeSvg(iconJavascript, "xxl")}
      </div>
    </div>

    <div class="shrink-0 w-full">
      <div class="pt-20">
        <img src="${heroImg}" class="drop-shadow-lg" />
      </div>
    </div>

    <div class="flex flex-col gap-8 absolute -right-10 -bottom-4">
      <div class="flex items-center justify-center size-20 bg-slate-800 text-slate-50 rounded-md shadow-lg rotate-6 -translate-x-2 hover:scale-110 transition-transform">
        ${resizeSvg(iconNordcraft, "xxl")}
      </div>
      <div class="flex items-center justify-center size-20 bg-amber-400 text-slate-800 rounded-md shadow-lg -rotate-3 hover:scale-110 transition-transform">
        ${resizeSvg(iconFigma, "xxl")}
      </div>
      <div class="flex items-center justify-center size-20 bg-slate-800 text-slate-50 rounded-md shadow-lg rotate-3 -translate-x-2 hover:scale-110 transition-transform">
        ${resizeSvg(iconDirectus, "xxl")}
      </div>
    </div>
  </div>
  `;

  const rightColumn = document.createElement("div");
  rightColumn.className = "flex-1 flex gap-5 flex-col justify-center shrink";

  rightColumn.innerHTML = `
        <h1 class="text-3xl font-bold text-amber-50">I ship features - from design to <span class="bg-amber-400 border-b-2 border-amber-50">production</span></h1>
        <p class="text-base text-amber-50">Component systems, iterative UX, production-ready code. <span class="font-bold">I design, develop and optimize for real impact – fast.</span></p>
  `;

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "flex flex-wrap gap-4 justify-between";

  const projectsButton = createButton({
    text: "Read Case Studies",
    onClick: () => {
      document
        .querySelector("#projects")
        ?.scrollIntoView({ behavior: "smooth" });
    },
    variant: "primary",
    fullWidth: false,
  });

  const socialButtonWrapper = document.createElement("div");
  socialButtonWrapper.className = "flex gap-4 items-center";

  socialButtonWrapper.innerHTML = `
    <a href="https://www.github.com/bababambule" target="_blank" rel="noopener noreferrer" class="text-amber-50 hover:text-white transition-colors size-10 flex items-center justify-center bg-amber-500 rounded-md hover:scale-105 hover:bg-amber-400">${resizeSvg(
      gitIcon,
      "md"
    )}</a>
    <a href="https://www.linkedin.com/in/cristianzweigler/" target="_blank" rel="noopener noreferrer" class="text-amber-50 hover:text-white transition-colors size-10 flex items-center justify-center bg-amber-500 rounded-md hover:scale-105 hover:bg-amber-400">${resizeSvg(
      linkedIcon,
      "md"
    )}</a>
    <a href="https://dribbble.com/CristianZweigler" target="_blank" rel="noopener noreferrer" class="text-amber-50 hover:text-white transition-colors size-10 flex items-center justify-center bg-amber-500 rounded-md hover:scale-105 hover:bg-amber-400">${resizeSvg(
      dribbbleIcon,
      "md"
    )}</a>
  `;

  buttonContainer.appendChild(projectsButton);
  buttonContainer.appendChild(socialButtonWrapper);

  rightColumn.appendChild(buttonContainer);
  wrapper.appendChild(leftColumn);
  wrapper.appendChild(rightColumn);
  container.appendChild(wrapper);
  hero.appendChild(container);

  return hero;
}
