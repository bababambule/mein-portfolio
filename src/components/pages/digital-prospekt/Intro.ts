import { contentBlock } from "../../ContentBlock";
import { imageSection } from "../../ImageComponent";
import shot1 from "../../../assets/img/digital-prospekt/Shot 1.webp";
import placeholderLg from "../../../assets/img/placeholder/placeholder-16-9.webp";

export function CaseDigitalIntro(): HTMLElement {
  const digitalIntro = document.createElement("div");
  digitalIntro.className = "pt-12";

  const contentBody = `<p class="text-xl font-light">How I reduced costs by €17,000 and load times by 67% by converting an outdated system into a scalable multi-tenant product.</p>
    <div class="-ml-6 -mr-6 my-6 grid grid-cols-2 gap-4">
      <div class="bg-amber-900/10 p-4 rounded-lg">
        <p class="text-2xl font-bold">67%</p>
        <p>Faster load times</p>
      </div>
      <div class="bg-amber-900/10 p-4 rounded-lg">
        <p class="text-2xl font-bold">93%</p>
        <p>Reduced production time</p>
      </div>
      <div class="bg-amber-900/10 p-4 rounded-lg">
        <p class="text-2xl font-bold">600%</p>
        <p>More conversions</p>
      </div>
      <div class="bg-amber-900/10 p-4 rounded-lg">
        <p class="text-2xl font-bold">€15,000</p>
        <p>Cost savings annually</p>
      </div>
    </div>
  `;

  const introContent = contentBlock({
    blockVariant: "amberLight",
    badgeText: "Digital Prospekt",
    badgeVariant: "slate",
    showBadge: true,
    headingText: "From Bottleneck to Performance Champion",
    headingType: "h1",
    body: contentBody,
  });

  const introMedia = imageSection({
    src: shot1,
    srcLarge: placeholderLg,
    alt: "A modern SaaS product for furniture marketing",
    ratio: "Portrait",
    variant: "lightToSlate",
  });

  digitalIntro.appendChild(introContent);
  digitalIntro.appendChild(introMedia);

  return digitalIntro;
}
