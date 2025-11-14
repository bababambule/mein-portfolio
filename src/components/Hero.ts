import { createButton } from "./Button";
import { resizeSvg } from "../utils/svg";
import gitIcon from "../assets/fa7-brands_square-github.svg?raw";
import linkedIcon from "../assets/fa7-brands_linkedin.svg?raw";
import dribbbleIcon from "../assets/fa7-brands_dribbble-square.svg?raw";

export function createHero(): HTMLElement {
  const hero = document.createElement("section");
  hero.className =
    "min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-amber-600";

  const container = document.createElement("div");
  container.className = "max-w-4xl mx-auto px-6";

  const wrapper = document.createElement("div");
  wrapper.className = "max-w-4xl mx-auto px-6 flex flex-wrap";

  const leftColumn = document.createElement("div");
  leftColumn.className = "flex-1";

  leftColumn.innerHTML = `<p class="text-4xl">Product Designer</p>`;

  const rightColumn = document.createElement("div");
  rightColumn.className = "flex-1 flex gap-5 flex-col";

  rightColumn.innerHTML = `
        <h1 class="text-4xl font-bold text-amber-50">I ship features - from design to <span class="bg-amber-400 border-b-2 border-amber-50">production</span></h1>
        <p class="text-base text-amber-50">Component systems, iterative UX, production-ready code. <span class="font-bold">I design, develop and optimize for real impact – fast.</span></p>
  `;

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "flex gap-4 justify-between";

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
