import { contentBlock } from "../../ContentBlock";
import { createButton } from "../../Button";

export function HomeAbout(): HTMLElement {
  const aboutBody = document.createElement("div");
  aboutBody.className = "flex flex-col gap-8";

  const text1 = document.createElement("p");
  text1.textContent = "I've been designing and building";
  const span = document.createElement("span");
  span.className = "font-semibold";
  span.textContent = "digital products since 2014";
  text1.appendChild(span);
  text1.appendChild(
    document.createTextNode(
      ". Started as a graphic designer, dove into dev during my apprenticeship, spent time in the games industry, and returned to product design in 2017."
    )
  );

  const text2 = document.createElement("p");
  text2.textContent =
    "Today I'm a senior product designer at orange promotion, building multi-tenant SaaS architectures and automation systems. ";
  const span2 = document.createElement("span");
  span.className = "font-semibold";
  span2.textContent =
    "My range covers design, development, low-code and analytics. ";
  text2.appendChild(span2);
  text2.appendChild(
    document.createTextNode(
      "Started as a graphic designer, dove into dev during my apprenticeship, spent time in the games industry, and returned to product design in 2017."
    )
  );

  aboutBody.appendChild(text1);
  aboutBody.appendChild(text2);

  const footerElement = document.createElement("div");
  footerElement.className = "flex flex-wrap gap-5";

  const footerText = document.createElement("p");
  footerText.className = "grow basis-1/2 font-semibold";
  footerText.textContent =
    "I work where design meets code and I've been doing it for over a decade.";

  const footerButton = createButton({
    text: "Learn More",
    href: "/about.html",
    variant: "primary",
    fullWidth: false,
  });

  footerElement.appendChild(footerText);
  footerElement.appendChild(footerButton);

  aboutBody.appendChild(footerElement);

  const section = contentBlock({
    blockVariant: "amberLight",
    showBadge: false,
    headingText: "Always learning. Always building.",
    headingType: "h2",
    body: aboutBody,
  });

  return section;
}
