import { contentBlock } from "../../ContentBlock";

export function CaseIconIntro(): HTMLElement {
  const textBlock = `
    <p class="text-xl font-light ">Custom iconography for mid-century modern e-commerce</p>
  `;

  const iconIntro = contentBlock({
    blockVariant: "amberLight",
    showBadge: true,
    badgeText: "Icon Pack",
    badgeVariant: "slate",
    headingText: "Vintage Icon Package",
    headingType: "h1",
    body: textBlock,
  });

  iconIntro.classList.add("mt-10");

  return iconIntro;
}
