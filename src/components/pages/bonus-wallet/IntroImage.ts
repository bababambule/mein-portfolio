import { imageSection } from "../../ImageComponent";
import mobileImg from "../../../assets/img/bonus-wallet/Shot 1.webp";
import placeholderLarge from "../../../assets/img/placeholder/placeholder-16-9.webp";

export function CaseBonusIntroImage(): HTMLElement {
  const introImageElement = imageSection({
    src: mobileImg,
    srcLarge: placeholderLarge,
    alt: "A modern SaaS product for furniture marketing",
    ratio: "Portrait",
    variant: "lightToSlate",
  });

  return introImageElement;
}
