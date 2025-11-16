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

document.body.insertBefore(createNavigation(), app);

// App Content
app.innerHTML = "";

//Hero Section
app.appendChild(createHero());

//Projects Intro
app.appendChild(
  contentBlock({
    badgeText: "Case Studies",
    badgeVariant: "amberLight",
    showBadge: true,
    headingText: "Selected Projects",
    headingType: "h2",
    body: `
    <p>My broad skill set and experience allows me to ship complex projects solo or in small teams - covering design, user testing, development and optimization.</p>
  `,
  })
);

//Projects Section
app.appendChild(ProjectCardSection());

//About Section
const aboutBlock = contentBlock({
  blockVariant: "amberLight",
  showBadge: false,
  headingText: "Always learning. Always building.",
  headingType: "h2",
  body: `
    <div class="flex flex-col gap-8">
      <p>I've been designing and building <span class="font-semibold">digital products since 2014</span>. Started as a graphic designer, dove into dev during my apprenticeship, spent time in the games industry, and returned to product design in 2017.</p>
      <p>Today I'm a senior product designer at orange promotion, building multi-tenant SaaS architectures and automation systems. <span class="font-semibold">My range covers design, development, low-code and analytics</span> – because the best products are built end-to-end.</p>
      <div class="flex flex-wrap gap-5">
        <p class="grow basis-1/2 font-semibold ">I work where design meets code and I've been doing it for over a decade.</p>
        <div id="aboutButtonSlot"></div>
      </div>
    </div>
    `,
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

app.appendChild(aboutBlock);

//Terminal Section
const quote = createQuote({
  body: `Want to work with me?<span class="cursorAnim">_</span>`,
  button: true,
  variant: "light",
  id: "contact",
});

app.appendChild(quote);

// Footer
app.appendChild(footerElement());

//Init
initMobileMenu();
