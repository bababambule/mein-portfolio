import { contentBlock } from "../../ContentBlock";
import { createButton } from "../../Button";

export function HomeAbout(): HTMLElement {
  const aboutBody = `
        <div class="flex flex-col gap-8">
            <p>I've been designing and building <span class="font-semibold">digital products since 2014</span>. Started as a graphic designer, dove into dev during my apprenticeship, spent time in the games industry, and returned to product design in 2017.</p>
            <p>Today I'm a senior product designer at orange promotion, building multi-tenant SaaS architectures and automation systems. <span class="font-semibold">My range covers design, development, low-code and analytics</span> – because the best products are built end-to-end.</p>
            <div class="flex flex-wrap gap-5">
                <p class="grow basis-1/2 font-semibold ">I work where design meets code and I've been doing it for over a decade.</p>
                <div id="aboutButtonSlot"></div>
            </div>
        </div>
    `;

  const section = contentBlock({
    blockVariant: "amberLight",
    showBadge: false,
    headingText: "Always learning. Always building.",
    headingType: "h2",
    body: aboutBody,
  });

  const buttonSlot = section.querySelector("#aboutButtonSlot");

  if (buttonSlot) {
    const aboutButton = createButton({
      text: "Learn More",
      href: "/about.html",
      variant: "primary",
      fullWidth: false,
    });
    buttonSlot.appendChild(aboutButton);
  }

  return section;
}
