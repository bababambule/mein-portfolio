import "./style.css";
import { createNavigation } from "./components/Navigation.ts";
import { createHero } from "./components/Hero.ts";
import { contentBlock } from "./components/ContentBlock.ts";
import { initMobileMenu } from "./utils/mobileMenu.ts";
import { ProjectCardSection } from "./components/ProjectCard.ts";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.className = "bg-amber-600 text-base/6";

document.body.insertBefore(createNavigation(), app);

app.innerHTML = "";
app.appendChild(createHero());
app.appendChild(
  contentBlock({
    badgeText: "Case Studies",
    badgeVariant: "amberLight",
    showBadge: true,
    headingText: "Selected Projects",
    headingType: "h2",
    body: `<p class="">My broad skill set and experience allows me to ship complex projects solo or in small teams - covering design, user testing, development and optimization.</p>`,
  })
);
app.appendChild(ProjectCardSection());
app.appendChild(
  contentBlock({
    blockVariant: "amberLight",
    showBadge: false,
    headingText: "Always learning. Always building.",
    headingType: "h2",
    body: `<p class="">My broad skill set and experience allows me to ship complex projects solo or in small teams - covering design, user testing, development and optimization.</p>`,
  })
);

//Init
initMobileMenu();
