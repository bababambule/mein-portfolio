import "./style.css";
import { createNavigation } from "./components/Navigation.ts";
import { createHero } from "./components/Hero.ts";
import { contentBlock } from "./components/ContentBlock.ts";
import { initMobileMenu } from "./utils/mobileMenu.ts";
import { ProjectCardSection } from "./components/ProjectCard.ts";
import { createButton } from "./components/Button.ts";
import { createQuote } from "./components/QuoteBlock.ts";
import { footerElement } from "./components/Footer.ts";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.className = "bg-amber-600 text-base/6";

const projectsIntro = contentBlock({
  badgeText: "Case Studies",
  badgeVariant: "amberLight",
  showBadge: true,
  headingText: "Selected Projects",
  headingType: "h2",
  body: `
    <p class="">My broad skill set and experience allows me to ship complex projects solo or in small teams - covering design, user testing, development and optimization.</p>
  `,
});

const aboutBlock = contentBlock({
  blockVariant: "amberLight",
  showBadge: false,
  headingText: "Always learning. Always building.",
  headingType: "h2",
  body: `
    <div class="flex flex-col gap-8">
      <p class="">I've been designing and building <span class="font-semibold">digital products since 2014</span>. Started as a graphic designer, dove into dev during my apprenticeship, spent time in the games industry, and returned to product design in 2017.</p>
      <p class="">Today I'm a senior product designer at orange promotion, building multi-tenant SaaS architectures and automation systems. <span class="font-semibold">My range covers design, development, low-code and analytics</span> – because the best products are built end-to-end.</p>
      <div class="flex gap-4">
        <p class="shrink font-semibold">I work where design meets code and I've been doing it for over a decade.</p>
        <div id="aboutButtonSlot" class="shrink-0"></div>
      </div>
    </div>
    `,
});

const quote = createQuote({
  body: "Want to work with me?_",
  button: true,
  variant: "amber",
  id: "contact",
});

const buttonSlot = aboutBlock.querySelector("#aboutButtonSlot");
if (buttonSlot) {
  const aboutButton = createButton({
    text: "Learn More",
    href: "/about.html",
    variant: "primary",
    fullWidth: false,
  });
  buttonSlot.appendChild(aboutButton);
}

document.body.insertBefore(createNavigation(), app);

app.innerHTML = "";
app.appendChild(createHero());
app.appendChild(projectsIntro);
app.appendChild(ProjectCardSection());
app.appendChild(aboutBlock);
app.appendChild(quote);
app.appendChild(footerElement());

//Init
initMobileMenu();
