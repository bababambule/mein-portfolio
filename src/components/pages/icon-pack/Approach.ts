// import { imageSection } from "../../ImageComponent";
import { contentBlock } from "../../ContentBlock";
// import placeholder from "../../../assets/img/placeholder/placeholder-9-16.webp";
// import placeholderLarge from "../../../assets/img/placeholder/placeholder-16-9.webp";

export function CaseIconApproach(): HTMLElement {
  /*const iconImageBlock = imageSection({
    variant: "slateToLight",
    src: placeholder,
    srcLarge: placeholderLarge,
    alt: "Drafting the icons per hand",
    ratio: "Portrait",
  });*/

  const bodyContent = `
    <div class="flex flex-col gap-6 mt-4 lg:block lg:columns-2">
      <div class="flex flex-col gap-2 lg:mb-6">
        <p class="font-semibold">Research & Immersion</p>
        <p>Studied advertising, furniture catalogs, and illustrations from the 1940s-60s. Built extensive mood boards capturing the era's graphic design language – clean lines, geometric forms, optimistic energy.</p>
      </div>
      <div class="flex flex-col gap-2 lg:mb-6">
        <p class="font-semibold">Sketching & Iteration</p>
        <p>Started with pencil sketches exploring different visual weights and details. Tested icons at various sizes to ensure clarity. Refined proportions to balance period authenticity with modern usability.</p>
      </div>
      <div class="flex flex-col gap-2 lg:mb-6">
        <p class="font-semibold">Vector Execution</p>
        <p>Built final icons in Figma as scalable vectors. Maintained consistent stroke weights, corner radiuses, and visual rhythm across the set. All icons follow a consistent 24x24 grid system with 2px strokes – the same systematic thinking that scales design systems.</p>
      </div>
      <div class="flex flex-col gap-2 lg:mb-6">
        <p class="font-semibold">Delivered production-ready SVGs</p>
        <p>Integrated directly into the custom Shopify theme. Implemented with proper ARIA labels for screen reader accessibility. Icons work seamlessly across product pages, navigation, and checkout flows.</p>
    </div>
  `;

  const iconContentBlock = contentBlock({
    blockVariant: "amberLight",
    showBadge: false,
    headingText: "The Approach",
    headingType: "h2",
    body: bodyContent,
  });

  const approachContent = document.createElement("div");

  //approachContent.appendChild(iconImageBlock);
  approachContent.appendChild(iconContentBlock);

  return approachContent;
}
