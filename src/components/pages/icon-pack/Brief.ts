import { contentBlock } from "../../ContentBlock";

export function CaseIconBrief(): HTMLElement {
  const iconBrief = document.createElement("section");
  iconIntro.className = "px-12";

  const container = document.createElement("container");
  container.className = "max-w-7xl mx-auto";

  const textBlock = `
    <div class="flex flex-col gap-6">
      <p class="">A mid-century furniture retailer needed a custom icon set to complete their brand identity. </p>
      <p>The challenge: create icons that felt authentically vintage while remaining functional at small sizes and maintaining perfect technical execution for web use.</p>
    </div>
  `;

  const introText = contentBlock({
    blockVariant: "amberLight",
    showBadge: false,
    headingText: "The Brief",
    headingType: "h2",
    body: textBlock,
  });

  container.appendChild(introText);
  iconBrief.appendChild(container);

  return iconBrief;
}
