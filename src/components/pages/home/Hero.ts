import { HeroLeftColumn } from "./HeroLeftColumn";
import { HeroRightColumn } from "./HeroRightColumn";

export function HomeHero(): HTMLElement {
  const hero = document.createElement("section");
  hero.className =
    "min-h-screen flex items-center justify-center overflow-x-clip bg-gradient-to-b from-15% from-amber-50 to-amber-600";
  hero.setAttribute("aria-label", "Hero Section");
  hero.setAttribute("role", "Banner");

  const container = document.createElement("div");
  container.className = "max-w-7xl mx-auto sm:px-6 flex flex-wrap gap-4";

  container.appendChild(HeroLeftColumn());
  container.appendChild(HeroRightColumn());
  hero.appendChild(container);

  return hero;
}
