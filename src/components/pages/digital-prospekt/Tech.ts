import techstack from "../../../assets/img/digital-prospekt/techstack.webp";
import { contentBlock } from "../../ContentBlock";
import { imageSection } from "../../ImageComponent";

export function CaseDigitalTech(): HTMLElement {
  const digitalTech = document.createElement("div");

  const techContent = contentBlock({
    blockVariant: "slateDark",
    showBadge: false,
    headingText: "Tech Stack Breakdown: Self-Hosted, Scalable, Fast",
    headingType: "h2",
    body: "I built a complete multi-tenant system that delivers individual digital brochures to clients in hours – without expensive SaaS dependencies.",
  });

  const techImage = imageSection({
    src: techstack,
    variant: "slate",
  });

  digitalTech.appendChild(techContent);
  digitalTech.appendChild(techImage);

  return digitalTech;
}
