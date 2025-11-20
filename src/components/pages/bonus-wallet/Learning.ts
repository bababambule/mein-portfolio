import { imageContentBlock } from "../../ImageTextSection";
import promise from "../../../assets/img/bonus-wallet/promise.webp";

export function CaseBonusLearning(): HTMLElement {
  const bonusLearning = imageContentBlock({
    variant: "amberToSlate",
    title: "Self-Hosted PWA Platform",
    body: "I built a Progressive Web App that delivers app-store quality without app-store approval – giving furniture retailers white label loyalty platforms in one week once ERP integrations are live.",
    src: promise,
    alt: "A modern app experience without app store limitations",
    color: "amber",
  });
  bonusLearning.classList.add("rounded-lg");

  return bonusLearning;
}
