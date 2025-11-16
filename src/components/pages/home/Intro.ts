import { contentBlock } from "../../ContentBlock";

export function HomeIntro(): HTMLElement {
  const introBody = `
        <p>My broad skill set and experience allows me to ship complex projects solo or in small teams - covering design, user testing, development and optimization.</p>
    `;

  const introSection = contentBlock({
    badgeText: "Case Studies",
    badgeVariant: "amberLight",
    showBadge: true,
    headingText: "Selected Projects",
    headingType: "h2",
    body: introBody,
  });

  return introSection;
}
