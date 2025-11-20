import { contentBlock } from "../../ContentBlock";

export function HomeIntro(): HTMLElement {
  const introBody =
    "My broad skill set and experience allows me to ship complex projects solo or in small teams - covering design, user testing, development and optimization.";

  const introSection = contentBlock({
    showBadge: true,
    badgeText: "Case Studies",
    badgeVariant: "amberLight",
    headingText: "Selected Projects",
    headingType: "h2",
    body: introBody,
  });

  return introSection;
}
